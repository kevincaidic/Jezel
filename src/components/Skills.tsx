import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Code, Layout, Sparkles, Feather, HelpCircle } from 'lucide-react';
import { SKILLS } from '../data';

type CategoryFilter = 'All' | 'Design & Direction' | 'Tech & Development' | 'Strategy & Media';

const categories: CategoryFilter[] = ['All', 'Design & Direction', 'Tech & Development', 'Strategy & Media'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  // Helper to pick icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Design & Direction':
        return <Feather size={16} className="text-blush-500" />;
      case 'Tech & Development':
        return <Code size={16} className="text-pastelblue-500" />;
      default:
        return <Sparkles size={16} className="text-lavender-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative asset highlights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-100/40 dark:bg-purple-900/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-12 right-0 w-96 h-96 bg-pink-100/40 dark:bg-pink-900/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title / Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700 mb-3">
            <Award size={11} className="text-lavender-500 dark:text-purple-400" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600 dark:text-gray-400">
              Skill Metrics
            </span>
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-gray-900 dark:text-white tracking-tight">
            The Interactive <span className="font-serif italic text-lavender-500 dark:text-purple-400 font-normal">Capacities</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-3 font-light leading-relaxed">
            Measuring capabilities from high-fidelity digital art layout grids to performance reactive frontend engineering codebases.
          </p>

          {/* Filter Categories Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 font-display font-semibold text-[10px] uppercase tracking-widest rounded-full border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-gray-900 dark:bg-white border-gray-900 dark:border-white text-white dark:text-gray-900 shadow-md'
                      : 'bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-600 dark:text-gray-300 hover:border-lavender-200 dark:hover:border-purple-600 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-slate-100 dark:border-gray-700 hover:border-lavender-100 dark:hover:border-purple-600 shadow-xs hover:shadow-xl hover:shadow-lavender-100/10 dark:hover:shadow-purple-900/10 transition-all duration-300 group select-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-gray-700 rounded-xl group-hover:bg-slate-100 dark:group-hover:bg-gray-600 transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-gray-500 font-bold">
                      {skill.category}
                    </span>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm mt-0.5 group-hover:text-lavender-600 dark:group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>
                
                <span className="font-mono text-xs font-semibold text-slate-600 dark:text-gray-400 group-hover:text-lavender-500 dark:group-hover:text-purple-400 transition-colors">
                  {skill.level}%
                </span>
              </div>

              <p className="font-sans text-[11px] sm:text-xs text-slate-600 dark:text-gray-400 leading-normal font-light mt-4">
                {skill.description}
              </p>

              {/* Sophisticated Dual Indicator Progress bar */}
              <div className="mt-5 w-full h-[3px] bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-lavender-400 via-pink-400 to-peach-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Micro Credential Alert */}
        <div className="mt-16 text-center select-none">
          <div className="inline-flex items-center gap-3 py-3 px-6 rounded-2xl bg-gradient-to-r from-slate-50 to-indigo-50/20 dark:from-gray-800 dark:to-purple-900/20 border border-slate-100 dark:border-gray-700 text-left max-w-lg mx-auto">
            <HelpCircle size={15} className="text-slate-400 dark:text-gray-500 shrink-0" />
            <p className="font-sans text-[11px] text-slate-500 dark:text-gray-400 leading-normal font-light">
              Don&apos;t see a specific tool? I specialize in rapid visual and engineering onboarding, routinely mastering new language syntaxes and platforms within single-week agile test sprints.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

