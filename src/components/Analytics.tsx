import { motion } from 'motion/react';

export default function Analytics() {
  return (
    <section id="analytics" className="py-32 px-6 md:px-12 relative bg-brand-primary overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-[50%] -left-[20%] w-[100%] h-[100%] bg-brand-vibrant rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-brand-lime rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative z-10">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-6">Editorial Analytics</h2>
          <h3 className="text-6xl md:text-8xl font-display font-medium text-white leading-none tracking-tighter mb-12">
            Precision <br />
            in every <br />
            <span className="text-brand-lime italic">heartbeat.</span>
          </h3>
          
          <div className="space-y-12 max-w-lg">
            <div className="flex gap-8">
              <span className="text-4xl font-display text-brand-lime opacity-40">01</span>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2 underline underline-offset-8 decoration-brand-vibrant/30">Weekly Heatmaps</h4>
                <p className="text-white/60 leading-relaxed font-light">Visualize your activity density across the week. Identify peak performance windows and recovery gaps effortlessly.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <span className="text-4xl font-display text-brand-lime opacity-40">02</span>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2 underline underline-offset-8 decoration-brand-vibrant/30">Performance Velocity</h4>
                <p className="text-white/60 leading-relaxed font-light">Track how your cardiovascular efficiency improves over time with our kinetic velocity indexing system.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-6">
          {/* Floating Analytics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-dark p-8 rounded-[3rem] aspect-square flex flex-col justify-between"
          >
             <span className="text-[10px] uppercase tracking-wider text-white/50">Average Velocity</span>
             <div>
               <span className="text-6xl font-display text-white">4.2</span>
               <span className="text-sm text-brand-lime ml-2">km/h</span>
             </div>
             <div className="h-12 flex items-end gap-1">
               {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((h, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h * 100}%` }}
                    className="flex-1 bg-brand-vibrant/40 rounded-full" 
                  />
               ))}
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="glass p-8 rounded-[3rem] aspect-square flex flex-col items-center justify-center text-center -translate-y-12 bg-white/5"
          >
             <div className="relative w-32 h-32 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="var(--color-brand-lime)" strokeWidth="8" 
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 100 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-2xl font-bold text-white">78%</span>
                </div>
             </div>
             <span className="text-[10px] uppercase tracking-wider text-white/50">Daily Goal</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="col-span-2 glass-dark p-10 rounded-[3.5rem] flex items-center justify-between"
          >
            <div>
              <h5 className="text-white/50 text-xs uppercase tracking-widest mb-2 font-bold">Active Momentum</h5>
              <div className="text-4xl font-display text-white">425 <span className="text-sm opacity-50">kcal burned today</span></div>
            </div>
            <div className="w-16 h-16 rounded-full bg-brand-lime flex items-center justify-center text-brand-primary spin-slow">
               <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
               </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
