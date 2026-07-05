import React, { useEffect, useRef, memo } from 'react';

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  
  // Hash function for random values
  vec2 hash(vec2 p) {
      p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
      return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  // Simplex noise approximation
  float noise(in vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
          mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
              dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
          mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
              dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
          u.y);
  }

  // Fractal Brownian Motion for organic flow
  float fbm(vec2 p) {
      float f = 0.0;
      float w = 0.5;
      for (int i = 0; i < 4; i++) {
          f += w * noise(p);
          p *= 2.0;
          w *= 0.5;
      }
      return f;
  }

  void main() {
      // Normalized pixel coordinates
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      
      // Correct aspect ratio
      vec2 aspectUv = uv;
      aspectUv.x *= u_resolution.x / u_resolution.y;

      // Mouse influence (subtle normal bending)
      vec2 mouse = u_mouse / u_resolution.xy;
      mouse.x *= u_resolution.x / u_resolution.y;
      
      // Calculate distance to mouse
      float distToMouse = length(aspectUv - mouse);
      // Soft gaussian-like falloff for mouse interaction
      float mouseEffect = exp(-distToMouse * 4.0) * 0.05;
      
      // Add subtle ripple effect based on mouse distance
      float mouseRipple = sin(distToMouse * 20.0 - u_time * 2.0) * mouseEffect;
      
      // Coordinate warping space
      vec2 p = aspectUv + mouseEffect + mouseRipple;
      
      // Slow down time for a relaxing feel
      float t = u_time * 0.12;

      // Domain warping (creates the flowing liquid look)
      vec2 q = vec2(0.0);
      q.x = fbm(p + vec2(0.0, t));
      q.y = fbm(p + vec2(1.0, t * 0.8));
      
      vec2 r = vec2(0.0);
      r.x = fbm(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
      r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);
      
      float f = fbm(p + r);
      
      // Premium colors: Deep blue, cyan, turquoise
      vec3 baseColor = vec3(0.02, 0.05, 0.12); // Deep dark blue background
      vec3 midColor = vec3(0.04, 0.25, 0.45);  // Ocean blue
      vec3 highlightColor = vec3(0.0, 0.65, 0.85); // Cyan/Turquoise
      vec3 causticColor = vec3(0.4, 0.85, 0.95); // Bright specular
      
      // Blend colors based on noise fields to create depth
      vec3 color = mix(baseColor, midColor, clamp((f * f) * 4.0, 0.0, 1.0));
      color = mix(color, highlightColor, clamp(length(q), 0.0, 1.0));
      color = mix(color, causticColor, clamp(length(r.x) * 1.5, 0.0, 1.0));
      
      // Add extra soft brightness for peaks (moonlight reflection effect)
      color += vec3(0.1, 0.35, 0.45) * (f * f * f * 2.5);
      
      // Vignette effect for premium feel
      float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
      vignette = clamp(pow(16.0 * vignette, 0.1), 0.0, 1.0);
      color *= vignette;

      // Apply low opacity multiplier for the subtle background effect (5-10% intensity)
      // We output solid colors but keep them very dark to act as a dark mode background
      float intensity = 0.3; // Overall brightness control
      float alpha = clamp(f * 0.5 + 0.1, 0.0, 1.0); // Modulate alpha based on fluid
      gl_FragColor = vec4(color, alpha * intensity);
  }
`;

const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const createProgram = (gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
    return null;
  }
  return program;
};

export const LiquidBackground: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Prefers reduced motion check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const gl = (canvas.getContext('webgl', { alpha: true, antialias: false, depth: false }) || 
                canvas.getContext('experimental-webgl', { alpha: true, antialias: false, depth: false })) as WebGLRenderingContext | null;
    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    // Create a full-screen quad (two triangles)
    const positions = [
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    let animationFrameId: number;
    let startTime = performance.now();
    let isVisible = true;
    
    // Normalized mouse coordinates
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Handle resize without triggering React renders
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }

      gl.useProgram(program);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeLocation, (time - startTime) * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseLocation, mouseX, canvas.height - mouseY); // WebGL origin is bottom-left

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Performance optimization: Pause when out of view/tab hidden
    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-100"
      aria-hidden="true"
    />
  );
});
