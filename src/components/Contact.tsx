import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle, Flame, Send, ArrowRight, Github, Linkedin, Dribbble, Compass } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data';

export default function Contact() {
  // Input fields state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Preferred services state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate high-tier API server transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // reset form
      setFormData({ name: '', email: '', message: '' });
      setSelectedServices([]);
    }, 1500);
  };

  const activeServicesList = [
    "Brand Visual Strategy",
    "Tailwind v4 Frontend",
    "React Interaction Logic",
    "Holistic Consultancy"
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background abstract gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-100/30 dark:bg-rose-900/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-10 select-none">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-700 border border-slate-200 dark:border-gray-600 mb-3">
                <Flame size={12} className="text-pink-500 animate-bounce" />
                <span className="font-mono text-[8px] uppercase tracking-widest text-gray-900 dark:text-white font-bold">
                  Fully Bookable
                </span>
              </div>
              <h2 className="font-display font-medium text-3xl sm:text-5xl text-gray-900 dark:text-white tracking-tight">
                Initiate a New <span className="font-serif italic text-lavender-500 dark:text-purple-400 font-normal">Alignment</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-light leading-relaxed max-w-sm">
                Have an ambitious visual vision or interaction challenge? Get in touch to schedule a private video consultation.
              </p>
            </div>

            {/* Coordinates / Details */}
            <div className="space-y-4 font-sans text-xs md:text-sm text-slate-600">
              <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-lavender-50 text-lavender-500 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest font-mono text-slate-400">Direct Inquiries</span>
                  <a href={`mailto:${PORTFOLIO_OWNER.socials.email}`} className="font-display font-semibold text-gray-900 dark:text-white hover:text-lavender-500 transition-colors">
                    {PORTFOLIO_OWNER.socials.email}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-pink-50 text-pink-500 shrink-0">
                  <Compass size={16} />
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest font-mono text-slate-400">Operating Outpost</span>
                  <span className="font-display font-semibold text-gray-900 dark:text-white">
                    Manila, Philippines (GMT+8)
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-3 pt-2">
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-gray-500 font-bold">
                Online channels //
              </h4>
              <div className="flex gap-2.5">
                <a
                  href={PORTFOLIO_OWNER.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white hover:bg-lavender-50 border border-slate-100 dark:border-gray-700 hover:border-lavender-200 rounded-xl text-slate-500 dark:text-gray-400 hover:text-lavender-500 transition-colors cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href={PORTFOLIO_OWNER.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white hover:bg-lavender-50 border border-slate-100 dark:border-gray-700 hover:border-lavender-200 rounded-xl text-slate-500 dark:text-gray-400 hover:text-lavender-500 transition-colors cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  href={PORTFOLIO_OWNER.socials.dribbble}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white hover:bg-lavender-50 border border-slate-100 dark:border-gray-700 hover:border-lavender-200 rounded-xl text-slate-500 dark:text-gray-400 hover:text-lavender-500 transition-colors cursor-pointer"
                  aria-label="Dribbble Profile"
                >
                  <Dribbble size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-[2.5rem] bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-700 shadow-2xl relative">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Visual Section: Service Selection */}
                <div className="space-y-3 select-none">
                  <label className="block font-display font-semibold text-xs uppercase tracking-wider text-gray-900 dark:text-white">
                    What scopes are you seeking?
                  </label>
                  
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeServicesList.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3.5 py-1.5 rounded-lg border text-[10px] font-mono uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                            isSelected
                              ? 'bg-gray-900 dark:bg-white border-gray-900 dark:border-white text-white dark:text-gray-900 shadow-xs'
                              : 'bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-500 dark:text-gray-400 hover:border-lavender-200 dark:hover:border-purple-600 hover:text-slate-800 dark:hover:text-white'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name Input with Floating Label effect */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full text-xs font-sans px-4 py-4 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 focus:border-gray-800 dark:focus:border-white text-gray-900 dark:text-white outline-none transition-colors"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 pointer-events-none transition-all duration-200 ${
                      focusedField === 'name' || formData.name
                        ? '-top-2.5 text-[8px] bg-white dark:bg-gray-900 px-2 text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase'
                        : 'top-4 text-xs text-slate-400 dark:text-gray-500 font-light'
                    }`}
                  >
                    Your Name/Company
                  </label>
                </div>

                {/* Email Input with Floating Label */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full text-xs font-sans px-4 py-4 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 focus:border-gray-800 dark:focus:border-white text-gray-900 dark:text-white outline-none transition-colors"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 pointer-events-none transition-all duration-200 ${
                      focusedField === 'email' || formData.email
                        ? '-top-2.5 text-[8px] bg-white dark:bg-gray-900 px-2 text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase'
                        : 'top-4 text-xs text-slate-400 dark:text-gray-500 font-light'
                    }`}
                  >
                    Communication Address
                  </label>
                </div>

                {/* Messages Input with Floating Label */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full text-xs font-sans px-4 py-4 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 focus:border-gray-800 dark:focus:border-white text-gray-900 dark:text-white outline-none transition-colors resize-none"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 pointer-events-none transition-all duration-200 ${
                      focusedField === 'message' || formData.message
                        ? '-top-2.5 text-[8px] bg-white dark:bg-gray-900 px-2 text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase'
                        : 'top-4 text-xs text-slate-400 dark:text-gray-500 font-light'
                    }`}
                  >
                    Details of your Vision (Optional)
                  </label>
                </div>

                {/* Submit button with Loading Spinner */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group py-4 px-6 rounded-xl bg-gray-900 dark:bg-white border border-gray-900 dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                      Securing Safe Connection...
                    </>
                  ) : (
                    <>
                      Dispatch Proposal
                      <Send size={12} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-lavender-300" />
                    </>
                  )}
                </button>

              </form>

              {/* Animated Success Receipt Modal */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-[2.5rem] flex flex-col items-center justify-center p-6 text-center z-20 select-none"
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: 'spring', damping: 20 }}
                      className="space-y-4 max-w-md items-center flex flex-col"
                    >
                      <div className="h-12 w-12 rounded-full bg-lavender-50 dark:bg-purple-900/30 flex items-center justify-center text-lavender-500 dark:text-purple-400 mb-2">
                        <CheckCircle size={32} />
                      </div>
                      
                      <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg sm:text-xl uppercase tracking-wider">
                        Proposal Confirmed
                      </h3>
                      
                      <p className="font-sans text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 leading-relaxed font-light">
                        Thank you! Your dispatch signals have compiled successfully. Jezel Salcedo Batingal will look over this brief and return a structured response within 24 business hours.
                      </p>

                      <button
                        onClick={() => setIsSuccess(false)}
                        className="py-2.5 px-6 rounded-lg bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-display font-medium text-[9px] uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer"
                      >
                        Reset Sheet
                        <ArrowRight size={10} />
                      </button>
                    </motion.div>
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

