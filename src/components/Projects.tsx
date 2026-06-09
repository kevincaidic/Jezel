import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ArrowUpRight, Monitor, Layers, Calendar, UserCheck, Briefcase } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Decorative vector background lines / details */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/40 dark:bg-purple-900/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 select-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gray-900/20 dark:bg-white/20" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-gray-600 dark:text-gray-400">
                Aesthetics in Action
              </span>
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-gray-900 dark:text-white tracking-tight">
              The <span className="font-serif italic font-normal">Brochure</span> Projects
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-md mt-2 font-light leading-relaxed">
              Curated, full-stack design and development solutions combining pixel precision and highly scalable logic frameworks.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="font-mono text-[9px] uppercase tracking-widest text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-2.5 rounded-full font-semibold">
              3 Featured Exhibits
            </span>
          </div>
        </div>

        {/* Projects Layout - Large, alternating Asymmetrical Cards */}
        <div className="space-y-16 md:space-y-28">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                
                {/* Product Image Column */}
                <div className={`col-span-1 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative group rounded-[2rem] overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xs hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer block transition-all duration-300"
                  >
                    {/* Artistic gradient hover overlay */}
                    <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    
                    {/* Year stamp top right */}
                    <div className="absolute top-5 right-5 z-20 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200 dark:border-gray-700">
                      <span className="font-mono text-[10px] font-bold text-gray-900 dark:text-white">
                        {project.year}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Quick overlay details */}
                    <div className="absolute bottom-5 left-5 z-20 flex flex-wrap gap-1.5 opacity-90">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 text-[8px] uppercase tracking-widest font-mono font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details Column */}
                <div className={`col-span-1 lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gray-600 dark:text-gray-400 font-bold block">
                    {project.category}
                  </span>

                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-gray-900 dark:text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight Stat (Gives immediate credibility) */}
                  {project.stats && (
                    <div className="flex items-center gap-4 py-2.5 px-3.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-fit">
                      <span className="font-mono text-xs text-slate-500 dark:text-gray-400 font-medium">
                        {project.stats.label}:
                      </span>
                      <span className="font-display text-base font-bold text-gray-900 dark:text-white">
                        {project.stats.value}
                      </span>
                    </div>
                  )}

                  {/* Technology tokens */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[9px] uppercase tracking-widest font-mono text-slate-500 dark:text-gray-400 border border-slate-200 dark:border-gray-700 px-2 py-1 rounded-md bg-white/40 dark:bg-gray-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link to case study review */}
                  <div className="flex items-center gap-4 pt-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center gap-2 font-display font-semibold text-xs uppercase tracking-widest text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      View Case Spec
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Fulloverlay Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-900 h-full overflow-y-auto shadow-2xl flex flex-col z-10 border-l border-gray-200 dark:border-gray-700"
            >
              
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors cursor-pointer text-slate-500 dark:text-gray-400 focus:outline-none z-30"
                aria-label="Close panel"
              >
                <X size={18} />
              </button>

              {/* Cover Image of Case Study */}
              <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-gray-800 overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#f5f3ff] bg-[#a78bfa]/30 backdrop-blur-md px-3 py-1 rounded-md inline-block mb-2 font-bold">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Specs Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 dark:bg-gray-800 border-b border-slate-100 dark:border-gray-700 select-none">
                <div className="flex items-center gap-2.5">
                  <UserCheck size={14} className="text-lavender-500" />
                  <div>
                    <span className="block text-[8px] tracking-widest uppercase font-mono text-slate-400 dark:text-gray-500">Client Partner</span>
                    <span className="font-sans text-[11px] font-semibold text-gray-900 dark:text-white">{selectedProject.client}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Briefcase size={14} className="text-pink-400" />
                  <div>
                    <span className="block text-[8px] tracking-widest uppercase font-mono text-slate-400 dark:text-gray-500">My Assignment</span>
                    <span className="font-sans text-[11px] font-semibold text-gray-900 dark:text-white">{selectedProject.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar size={14} className="text-pastelblue-400" />
                  <div>
                    <span className="block text-[8px] tracking-widest uppercase font-mono text-slate-400 dark:text-gray-500">Fiscal Period</span>
                    <span className="font-sans text-[11px] font-semibold text-gray-900 dark:text-white">{selectedProject.year}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Monitor size={14} className="text-peach-400" />
                  <div>
                    <span className="block text-[8px] tracking-widest uppercase font-mono text-slate-400 dark:text-gray-500">Ecosystem</span>
                    <span className="font-sans text-[11px] font-semibold text-gray-900 dark:text-white">Design &amp; Code</span>
                  </div>
                </div>
              </div>

              {/* Long Form Article */}
              <div className="p-6 sm:p-8 space-y-8 flex-1">
                <div className="space-y-4">
                  <h4 className="font-display font-medium text-xs uppercase tracking-widest text-gray-900 dark:text-white border-b border-indigo-100 dark:border-gray-700 pb-2">
                    Executive Overview
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-light">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Sub-exhibit photo collection */}
                {selectedProject.gallery && (
                  <div className="space-y-4">
                    <h4 className="font-display font-medium text-xs uppercase tracking-widest text-gray-900 dark:text-white border-b border-indigo-100 dark:border-gray-700 pb-2">
                      Visual Spec Collection
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.gallery.map((imgUrl, galleryIdx) => (
                        <div key={galleryIdx} className="rounded-xl overflow-hidden shadow-md aspect-5/4 border border-slate-100 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                          <img
                            src={imgUrl}
                            alt="Mock visual exhibit specifications"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core KPI metrics breakdown */}
                {selectedProject.stats && (
                  <div className="p-5 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-gray-500 font-bold">
                      Key Performance Indicator (KPI)
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-serif text-3xl font-extrabold text-gray-900 dark:text-white italic">
                        {selectedProject.stats.value}
                      </span>
                      <span className="font-sans text-xs text-slate-600 dark:text-gray-400">
                        {selectedProject.stats.label}
                      </span>
                    </div>
                  </div>
                )}

                {/* Technology and Stack checklists */}
                <div className="space-y-3">
                  <h4 className="font-display font-medium text-xs uppercase tracking-widest text-gray-900 dark:text-white">
                    Platform Mechanics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="py-1 px-3 text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-gray-800 rounded-lg inline-flex items-center gap-1.5"
                      >
                        <Layers size={9} className="text-lavender-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footnote statement */}
                <div className="pt-6 border-t border-slate-100 dark:border-gray-800 text-slate-400 dark:text-gray-500 text-[10px] font-mono text-center">
                  CONFIDENTIAL RESEARCH &amp; DESIGN COPY // © JEZEL S. BATINGAL
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
