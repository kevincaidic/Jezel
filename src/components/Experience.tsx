import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#fafbfc] relative overflow-hidden">
      
      {/* Abstract color flares */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-100/35 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-sky-50/40 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 select-none">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-pastelblue-400" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#717180]">
                Creative History
              </span>
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#22222c] tracking-tight">
              A Journey of <span className="font-serif italic text-pastelblue-500 font-normal">Continuous</span> Alignment
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right hidden sm:block">
            <span className="font-mono text-xs text-slate-400">
              / WORK HISTORY (PAGE 02)
            </span>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-105px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-lavender-100 shadow-xl shadow-slate-100/40 hover:shadow-2xl hover:shadow-slate-200/45 transition-all duration-300 select-none"
              >
                {/* Visual marker stating "LATEST" for the top role */}
                {exp.isLatest && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-lavender-500 to-pink-500 rounded-full flex items-center gap-1.5 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                    <span className="font-mono text-[8px] uppercase tracking-wider text-white font-bold">
                      Latest Activity
                    </span>
                  </div>
                )}

                {/* Columns 1-4: Company, period, placement */}
                <div className="md:col-span-4 space-y-3">
                  <h3 className="font-display font-bold text-[#1f1f2a] text-[#2c2c3e] text-base group-hover:text-lavender-600 transition-colors">
                    {exp.company}
                  </h3>

                  <div className="space-y-2 text-slate-500 font-sans text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-pink-400 shrink-0" />
                      <span className="font-medium">{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-[#a78bfa] shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Columns 5-12: Role title and detailed bullets */}
                <div className="md:col-span-8 space-y-4">
                  <h4 className="font-display font-semibold text-[#1e1e24] text-sm tracking-wide inline-flex items-center gap-2">
                    <Briefcase size={14} className="text-[#5b21b6]/40" />
                    {exp.role}
                  </h4>

                  <ul className="space-y-2 pl-4 list-disc text-slate-500 font-sans text-xs font-light leading-relaxed">
                    {exp.description.map((desc, descIdx) => (
                      <li key={descIdx} className="hover:text-slate-700 transition-colors">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags deployed during this tenure */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[9px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
