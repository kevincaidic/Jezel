import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';
import { ArrowDownRight, Sparkles, Code, Palette, Quote } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Handle mouse move for parallax
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      const y = (e.clientY / innerHeight) * 2 - 1; // -1 to 1
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // Set up spring physics for ultra-smooth responsiveness
  const spiritX = useSpring(0, { damping: 40, stiffness: 200 });
  const spiritY = useSpring(0, { damping: 40, stiffness: 200 });

  useEffect(() => {
    spiritX.set(coords.x);
    spiritY.set(coords.y);
  }, [coords.x, coords.y, spiritX, spiritY]);

  // Map coordinate range to movement offsets
  const backgroundX = useTransform(spiritX, [-1, 1], [-20, 20]);
  const backgroundY = useTransform(spiritY, [-1, 1], [-20, 20]);
  const foregroundX = useTransform(spiritX, [-1, 1], [30, -30]);
  const foregroundY = useTransform(spiritY, [-1, 1], [30, -30]);
  const midgroundX = useTransform(spiritX, [-1, 1], [15, -15]);
  const midgroundY = useTransform(spiritY, [-1, 1], [15, -15]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pb-32 overflow-hidden flex items-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Absolute background premium gradient glows matching Clean Minimalism */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-200/40 dark:bg-orange-900/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column - Creative Typography & Tags */}
        <div className="lg:col-span-5 flex flex-col justify-center select-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2"
          >
            <span className="w-8 h-[1px] bg-gray-900 dark:bg-white" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-45 text-gray-900 dark:text-white">
              Creative Director &amp; Designer
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-[84px] leading-[0.9] font-serif italic mb-6 tracking-tight text-gray-900 dark:text-white"
            >
              Jezel Salcedo<br/>Batingal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-[400px] font-light"
            >
              {PORTFOLIO_OWNER.tagline} {PORTFOLIO_OWNER.bioShort}
            </motion.p>
          </div>

          {/* CTA Buttons - Pure black & classic white outline pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-purple-900/10 dark:shadow-purple-500/10 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              View Portfolio
              <ArrowDownRight size={14} />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-full text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-center cursor-pointer"
            >
              About Me
            </button>
          </motion.div>
        </div>

        {/* Right Column - Premium Layered Portrait Illustration */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative select-none mt-10 lg:mt-0">
          
          {/* Main Portrait Frame with White Border Shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-[70%] lg:w-[65%] aspect-[4/5] bg-gradient-to-br from-purple-100 via-white to-orange-100 dark:from-purple-900/30 dark:via-gray-800 dark:to-orange-900/30 rounded-[40px] overflow-hidden shadow-2xl z-0 border-[12px] border-white dark:border-gray-800"
          >
            <img
              src={PORTFOLIO_OWNER.portraitUrl}
              alt="Jezel Salcedo Batingal Portrait"
              className="w-full h-full object-cover object-center scale-110 relative z-10 transition-transform duration-700 hover:scale-115"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Name Accent element */}
          <div className="absolute top-12 right-12 flex flex-col items-end hidden lg:flex">
            <div className="text-[10px] font-semibold uppercase tracking-[0.5em] opacity-20 text-gray-900 dark:text-white [writing-mode:vertical-rl]">
              JEZEL BATINGAL
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
