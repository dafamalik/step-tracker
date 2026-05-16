import { motion } from 'motion/react';
import { Watch, Zap, Target, BarChart3, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "Real-time Tracking",
    description: "Highly accurate movement detection using state-of-the-art sensor fusion algorithms.",
    icon: <Watch className="w-8 h-8" />,
    delay: 0.1
  },
  {
    title: "Smart Analytics",
    description: "Deep insights into your activity patterns with AI-driven habit analysis.",
    icon: <Zap className="w-8 h-8" />,
    delay: 0.2
  },
  {
    title: "Goal Mastery",
    description: "Dynamic achievement system that scales with your growth and performance.",
    icon: <Target className="w-8 h-8" />,
    delay: 0.3
  },
  {
    title: "Daily Movement",
    description: "Holistic view of your daily energy expenditure and active duration.",
    icon: <BarChart3 className="w-8 h-8" />,
    delay: 0.4
  },
  {
    title: "Privacy First",
    description: "End-to-end encryption for all your health data. You own your steps.",
    icon: <ShieldCheck className="w-8 h-8" />,
    delay: 0.5
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary/60 mb-4">Precision Engineered</h2>
            <h3 className="text-5xl md:text-7xl font-display font-medium text-brand-primary leading-tight">
              Features that fuel <br />
              your momentum.
            </h3>
          </div>
          <p className="text-xl text-brand-secondary/60 max-w-sm mb-2 leading-relaxed">
            Every feature is designed to disappear into your life, leaving only the results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-[3.5rem] group transition-all"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-primary/5 flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-brand-lime transition-colors duration-500">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-display font-bold text-brand-primary mb-4">{feature.title}</h4>
              <p className="text-brand-secondary/70 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-brand-primary p-12 rounded-[3.5rem] flex flex-col justify-between group overflow-hidden relative"
          >
             {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/20 blur-[60px] rounded-full translate-x-20 -translate-y-20 group-hover:scale-125 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <h4 className="text-3xl font-display font-bold text-white mb-4">Ready to reach your peak?</h4>
              <p className="text-white/70 leading-relaxed font-light mb-8">
                Join 500k+ active users tracking their way to greatness.
              </p>
            </div>
            
            <button className="relative z-10 w-full py-4 rounded-2xl bg-brand-lime text-brand-primary font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform">
              Join the movement
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
