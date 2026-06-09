import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X } from 'lucide-react';
import { CERTIFICATES } from '../data';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certificates" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative vector assets */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-100/50 dark:bg-purple-900/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-pink-100/40 dark:bg-pink-900/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center mb-16 select-none animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-700 border border-slate-200 dark:border-gray-600 mb-3">
            <Award size={11} className="text-lavender-500 dark:text-purple-400" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-gray-400">
              Verified Merit
            </span>
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-gray-900 dark:text-white tracking-tight">
            Academic <span className="font-serif italic text-lavender-500 dark:text-purple-400 font-normal">Credentials</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-3 font-light max-w-lg mx-auto">
            A history of continuous learning, tracking contemporary advancements across modern WebGL interfaces, design system orchestration, and classical layout principles.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Certificate Image */}
              {cert.image && (
                <div 
                  className="relative overflow-hidden cursor-pointer bg-slate-50 dark:bg-gray-700"
                  onClick={() => openImageModal(cert.image!)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium text-gray-900 dark:text-white">
                      Click to view full size
                    </span>
                  </div>
                </div>
              )}

              {/* Certificate Info */}
              <div className="p-5">
                <span className="inline-block font-mono text-[8px] uppercase tracking-widest font-bold text-slate-400 dark:text-gray-500 bg-slate-100 dark:bg-gray-700 px-2 py-0.5 rounded-sm mb-2">
                  {cert.tag}
                </span>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-2">
                  {cert.title}
                </h3>
                <p className="font-sans text-xs text-slate-500 dark:text-gray-400 font-light mb-3">
                  {cert.issuer} &bull; {cert.date}
                </p>
                <p className="font-sans text-xs font-light leading-relaxed text-slate-600 dark:text-gray-400">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-black/90 backdrop-blur-sm p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Certificate Image */}
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

