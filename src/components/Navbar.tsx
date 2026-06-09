import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Brochure' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 px-4 md:px-8'
          : 'py-6 px-4 md:px-12'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-xs'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-display font-medium tracking-widest text-gray-900 dark:text-white text-lg uppercase transition-all duration-300">
            JEZEL<span className="font-light opacity-50">.</span>B
          </span>
          <span className="block text-[8px] uppercase tracking-[0.25em] text-slate-400 dark:text-gray-500 font-mono scale-90 -translate-x-1 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
            Interactive Craft
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-widest cursor-pointer rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-gray-900 dark:text-white'
                    : 'text-slate-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gray-900/5 dark:bg-white/10 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Dark Mode Toggle & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button hidden
            onClick={toggleTheme}
            className="px-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer focus:outline-none font-sans text-xs font-medium"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 border border-gray-200 dark:border-gray-700 rounded-full text-[11px] font-bold uppercase tracking-widest bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-white transition-all duration-300 cursor-pointer focus:outline-none"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer text-gray-900 dark:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute left-6 right-6 top-24 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg z-40 lg:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full py-3 px-4 rounded-xl text-left font-sans text-xs font-semibold uppercase tracking-widest transition-colors ${
                      isActive
                        ? 'bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white pl-6 border-l border-gray-900 dark:border-white'
                        : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-slate-100 dark:border-gray-800 mt-2 space-y-3">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300"
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100"
                >
                  Let's Talk
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
