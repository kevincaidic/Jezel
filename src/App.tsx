import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Soft entering transition
    const timer = setTimeout(() => setHasLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
      
      {/* Viewport Top Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-lavender-500 via-pink-400 to-peach-300 dark:from-purple-500 dark:via-pink-500 dark:to-orange-400 transform origin-left z-55"
        style={{ scaleX }}
      />

      {/* Modern Custom Launch Transition overlay */}
      {!hasLoaded && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50">
          <div className="text-center space-y-3">
            <h1 className="font-display font-medium tracking-widest text-gray-900 dark:text-white text-xl uppercase animate-pulse">
              JEZEL <span className="font-serif italic text-pink-400 dark:text-pink-500">S.B.</span>
            </h1>
            <div className="w-[120px] h-[2px] bg-slate-100 dark:bg-gray-800 mx-auto rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-lavender-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 animate-infinite-loading" />
            </div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-gray-500 mt-2">
              Compiling Creative Ecosystem...
            </p>
          </div>
        </div>
      )}

      {/* Main Layout Entry */}
      <div className={`transition-opacity duration-500 ease-out ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />

        <main className="relative">
          <Hero />
          
          <About />
          
          <Projects />
          
          <Skills />
          
          <Certificates />
          
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
