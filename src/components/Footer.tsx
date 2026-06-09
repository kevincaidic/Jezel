import { Sparkles, ArrowUp } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pt-20 pb-12 border-t border-gray-200 dark:border-gray-700 relative overflow-hidden select-none">
      
      {/* Background soft layout blur accents */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-[#E9DFFF]/10 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Column layouts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gray-200 dark:border-gray-700">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display font-medium text-gray-900 dark:text-white tracking-widest text-lg uppercase">
              JEZEL <span className="font-serif italic text-slate-500 dark:text-gray-400 font-normal">SALCEDO</span> BATINGAL
            </h3>
            
            <p className="font-sans text-xs text-slate-500 dark:text-gray-400 max-w-sm leading-relaxed font-light">
              Crafting cohesive brand codes, editorial layout pairings, and high-fidelity interaction state maps in React and modern CSS.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <Sparkles size={11} className="text-gray-900 dark:text-white shrink-0" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-450">
                LATEST WORKSPACE SYNC &bull; 2026
              </span>
            </div>
          </div>

          {/* Quick Shortcuts Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-900 dark:text-white font-bold">
              Navigation Coordinates //
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-display text-[10px] uppercase tracking-widest font-semibold">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-slate-500 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-500 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-slate-500 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Exhibit
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-slate-500 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('experience')} className="text-slate-500 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Journey
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('certificates')} className="text-slate-500 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Awards
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-500 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Inquire
                </button>
              </li>
            </ul>
          </div>

          {/* Connected spaces */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-900 dark:text-white font-bold">
              Sub-channels //
            </h4>
            <p className="font-sans text-xs text-slate-500 dark:text-gray-400 font-light max-w-xs leading-normal">
              Feel free to connect or inspect raw source code components hosted on digital repositories.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest font-semibold text-slate-500 dark:text-gray-400 font-medium">
              <a href={PORTFOLIO_OWNER.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:text-white transition-colors">
                LinkedIn
              </a>
              <a href={PORTFOLIO_OWNER.socials.github} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:text-white transition-colors">
                GitHub
              </a>
              <a href={PORTFOLIO_OWNER.socials.dribbble} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:text-white transition-colors">
                Dribbble
              </a>
              <a href={PORTFOLIO_OWNER.socials.behance} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:text-white transition-colors">
                Behance
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_OWNER.name}. All Rights Reservable.
          </div>
          
          <div className="flex items-center gap-6">
            <span>
              CRAFTED IN MANILA // REACT MODULES
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 w-10 h-10 rounded-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 transition-all flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

