import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Milestone, Compass, Bookmark } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';

const milestones = [
  {
    year: "2024",
    title: "Expanded Brand Design Portfolio",
    detail: "Completed major branding projects for AquaFlow, Thynk Unlimited, Moncofaco, and MacFac, establishing strong visual identities."
  },
  {
    year: "2023",
    title: "IoT Smart Trash Bin Capstone",
    detail: "Led development of innovative IoT waste management system, earning recognition and multiple certifications."
  },
  {
    year: "2023",
    title: "Cybersecurity Certification",
    detail: "Achieved Ethical Hacker certification, expanding technical expertise in security and system protection."
  },
  {
    year: "2022",
    title: "Professional Design Practice",
    detail: "Began freelance brand design work, focusing on local businesses and startups seeking modern visual identities."
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState<'manifesto' | 'milestones'>('manifesto');

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
      
      {/* Soft background accents matching Clean Minimalism */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title layout - Editorial look */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 select-none">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gray-900/20 dark:bg-white/20" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-gray-600 dark:text-gray-400">
                Craft Identity
              </span>
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-gray-900 dark:text-white tracking-tight">
              An Immersive Path of <span className="font-serif italic font-normal">Artistry</span> &amp; <span className="font-serif italic font-normal">Code</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right hidden sm:block">
            <span className="font-mono text-xs text-slate-400 dark:text-gray-500 text-right">
              / READ STORY (PAGE 01)
            </span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Big Statement & Statistics */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <p className="font-serif italic text-xl sm:text-2xl text-gray-900 dark:text-white leading-relaxed font-light">
                &ldquo;I believe that a truly premium interface should feel less like a sterile utility grid and more like a carefully printed magazine—alive with negative space, elegant weights, and responsive motion.&rdquo;
              </p>
              
              <div className="w-full h-px bg-gray-300 dark:bg-gray-700" />
              
              <p className="font-sans text-sm text-slate-500 dark:text-gray-400 leading-relaxed font-light">
                {PORTFOLIO_OWNER.bioLong}
              </p>
            </div>

            {/* Premium Stat Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {PORTFOLIO_OWNER.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 select-none group"
                >
                  <span className="block font-display text-2xl sm:text-3xl font-light text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300 origin-left">
                    {stat.value}
                  </span>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-slate-400 dark:text-gray-500 mt-2 font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Navigation Tabs: Manifesto vs Timeline */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-xs relative">
              
              {/* Clean layout label */}
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-[8px] uppercase tracking-widest">
                LATEST MILESTONES
              </div>

              {/* Tabs list */}
              <div className="flex border-b border-slate-100 dark:border-gray-800 pb-3 mb-6 space-x-4">
                <button
                  onClick={() => setActiveTab('manifesto')}
                  className={`flex items-center gap-2 pb-2.5 px-1 font-display font-medium text-xs uppercase tracking-widest border-b-2 transition-colors cursor-pointer focus:outline-none ${
                    activeTab === 'manifesto'
                      ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white'
                      : 'border-transparent text-slate-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Compass size={13} />
                  My Ethos
                </button>
                <button
                  onClick={() => setActiveTab('milestones')}
                  className={`flex items-center gap-2 pb-2.5 px-1 font-display font-medium text-xs uppercase tracking-widest border-b-2 transition-colors cursor-pointer focus:outline-none ${
                    activeTab === 'milestones'
                      ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white'
                      : 'border-transparent text-slate-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Milestone size={13} />
                  Milestone Grid
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'manifesto' ? (
                  <motion.div
                    key="manifesto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white mt-1">
                          <User size={16} />
                        </div>
                        <div>
                          <h4 className="font-sans font-semibold text-gray-900 dark:text-white text-sm">
                            Honest Visual Composition
                          </h4>
                          <p className="font-sans text-xs text-slate-500 dark:text-gray-400 leading-relaxed mt-1">
                            Avoiding unnecessary, cluttered animations or pseudo-intellectual metrics. I favor visual structures designed purely to augment the project's genuine core objectives.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white mt-1">
                          <Bookmark size={16} />
                        </div>
                        <div>
                          <h4 className="font-sans font-semibold text-gray-900 dark:text-white text-sm">
                            Production-Grade Engineering
                          </h4>
                          <p className="font-sans text-xs text-slate-500 dark:text-gray-400 leading-relaxed mt-1">
                            Writing component frameworks that are highly scaleable. Creating precise animations backed by optimized math definitions so they compile smoothly on any screen.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <span className="font-serif text-gray-900 dark:text-white text-xs italic block mb-1">
                        &ldquo;Good art direction communicates feeling immediately; good engineering ensures that feeling is never delayed by poor latency.&rdquo;
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-gray-500 block text-right font-medium">
                        — Jezel S. Batingal
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="milestones"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative pl-4 space-y-6 border-l border-gray-300 dark:border-gray-700"
                  >
                    {milestones.map((milestone, idx) => (
                      <div key={idx} className="relative group select-none">
                        {/* Bullets point style */}
                        <div className="absolute -left-[21px] top-1.5 h-3.5 w-3.5 rounded-full border border-white dark:border-gray-900 bg-gray-900 dark:bg-white group-hover:scale-110 transition-transform duration-200" />
                        
                        <div>
                          <span className="font-mono text-[10px] font-bold text-gray-600 dark:text-gray-400">
                            {milestone.year}
                          </span>
                          <h4 className="font-sans font-semibold text-gray-900 dark:text-white text-xs mt-0.5">
                            {milestone.title}
                          </h4>
                          <p className="font-sans text-[11px] text-gray-600 dark:text-gray-400 leading-normal mt-1">
                            {milestone.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
