import { motion } from 'motion/react';

const screens = [
  {
    title: "Insight Hub",
    image: "https://picsum.photos/seed/fitness-1/400/800",
    rotate: -8,
    y: 0
  },
  {
    title: "Daily Flow",
    image: "https://picsum.photos/seed/fitness-2/400/800",
    rotate: 0,
    y: -40
  },
  {
    title: "Performance",
    image: "https://picsum.photos/seed/fitness-3/400/800",
    rotate: 8,
    y: 0
  }
];

export default function MobileScreens() {
  return (
    <section className="py-48 px-6 md:px-12 bg-[#f0f2f3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary/60 mb-6">Immersive Experience</h2>
          <h3 className="text-5xl md:text-8xl font-display font-medium text-brand-primary tracking-tighter leading-none">
            An Interface That <br />
            Moves <span className="text-gradient">With You.</span>
          </h3>
        </div>

        <div className="relative flex justify-center items-center gap-4 md:gap-12 flex-wrap lg:flex-nowrap">
          {screens.map((screen, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              whileInView={{ opacity: 1, y: screen.y, rotate: screen.rotate }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: idx * 0.2 }}
              className="relative w-72 h-[36rem] md:w-80 md:h-[40rem] rounded-[3.5rem] p-4 glass bg-white/20 shadow-2xl group shrink-0"
            >
              <div className="w-full h-full rounded-[2.8rem] overflow-hidden relative">
                <img 
                  src={screen.image} 
                  alt={screen.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-8 right-8">
                  <h4 className="text-white text-2xl font-display font-bold">{screen.title}</h4>
                  <div className="w-12 h-1 bg-brand-vibrant mt-3 rounded-full" />
                </div>
              </div>
              
              {/* Perspective Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                 <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary bg-brand-lime px-4 py-2 rounded-full shadow-lg">
                    View Interactive Demo
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Kinetic Text */}
      <div className="absolute top-1/2 left-0 w-full pointer-events-none opacity-[0.03] select-none -translate-y-1/2">
        <div className="text-[20vw] font-display font-black leading-none whitespace-nowrap flex gap-40 animate-marquee">
          <span>PRECISION</span>
          <span>MOMENTUM</span>
          <span>PRECISION</span>
          <span>MOMENTUM</span>
        </div>
      </div>
    </section>
  );
}
