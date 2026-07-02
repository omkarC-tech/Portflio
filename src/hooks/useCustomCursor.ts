import { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function useCustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const element = document.elementFromPoint(position.x, position.y);
      if (!element) return;

      const computedStyle = window.getComputedStyle(element);
      const isClickable = 
        computedStyle.cursor === 'pointer' || 
        element.tagName.toLowerCase() === 'a' ||
        element.tagName.toLowerCase() === 'button' ||
        element.closest('a') !== null ||
        element.closest('button') !== null;

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursorType);
    window.addEventListener('mouseout', updateCursorType);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursorType);
      window.removeEventListener('mouseout', updateCursorType);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  return { position, isPointer, isHidden };
}
