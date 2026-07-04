import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Preloader } from './components/ui/Preloader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <>
      <Preloader />
      <Layout>
        <Suspense fallback={<div className="flex h-[100dvh] items-center justify-center"><div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
