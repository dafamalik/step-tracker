import { motion } from 'motion/react';
import { ArrowRight, Play, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,var(--color-brand-soft),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-lime/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 border border-brand-primary/10">
              Kinetic Precision 2026
            </span>
            <h1 className="text-7xl md:text-8.5xl font-display leading-[0.9] tracking-tighter text-brand-primary mb-8">
              Move <span className="text-gradient">Smarter</span> <br /> 
              Every Day.
            </h1>
            <p className="text-xl text-brand-secondary/80 max-w-lg mb-10 leading-relaxed font-light">
              Experience the next generation of daily activity tracking. 
              Precision-engineered for those who refuse to stand still.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button className="btn-primary group flex items-center gap-3">
                Start Tracking
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary">
                   <Play size={16} fill="currentColor" />
                </div>
                See Live Demo
              </button>
            </div>

            {/* Floating Stats Card Desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="hidden lg:flex mt-16 glass-dark p-6 rounded-[2.5rem] w-fit gap-12"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider text-brand-secondary/60 block mb-1">Today's Peak</span>
                <span className="text-3xl font-display font-bold text-brand-primary">12,847 <span className="text-xs font-normal">steps</span></span>
              </div>
              <div className="w-px h-12 bg-brand-primary/10" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-brand-secondary/60 block mb-1">Target Reach</span>
                <span className="text-3xl font-display font-bold text-brand-vibrant">92<span className="text-xs font-normal">%</span></span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Animated Progress Ring behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-primary" strokeDasharray="5,10" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-brand-vibrant" strokeDasharray="2,5" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: -5, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
             <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,101,113,0.3)] border-[8px] border-white/50 glass aspect-[9/16]">
               <img 
                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                 alt="Step Tracker App Mockup" 
                 className="w-full h-full object-cover grayscale opacity-20"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 rounded-3xl bg-brand-lime flex items-center justify-center text-brand-primary mb-8 shadow-2xl animate-pulse">
                    <Activity size={48} />
                  </div>
                  <div className="text-5xl font-display font-bold text-brand-primary mb-2">12,847</div>
                  <div className="text-xs uppercase tracking-widest text-brand-primary/60 font-bold">Steps Today</div>
                  <div className="mt-12 h-1 w-full bg-brand-primary/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-brand-vibrant shadow-[0_0_20px_var(--color-brand-vibrant)]" 
                    />
                  </div>
               </div>
             </div>

             {/* Floating UI Elements */}
             <motion.div
               animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-12 -right-12 glass p-6 rounded-3xl shadow-xl hidden md:block"
             >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center text-brand-primary">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary">Peak Performance</h4>
                    <p className="text-xs text-brand-secondary">Calorie burn +12%</p>
                  </div>
                </div>
             </motion.div>

             <motion.div
               animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-12 -left-12 glass p-6 rounded-[2rem] shadow-xl hidden md:block"
             >
               <div className="space-y-3">
                 <div className="h-2 w-32 bg-brand-primary/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ delay: 1.5, duration: 2 }}
                       className="h-full bg-brand-vibrant" 
                    />
                 </div>
                 <div className="h-2 w-24 bg-brand-primary/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "45%" }}
                      transition={{ delay: 1.7, duration: 2 }}
                      className="h-full bg-brand-lime" 
                    />
                 </div>
               </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
