import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Marathon Runner",
    text: "Step Tracker changed how I view daily recovery. The analytics aren't just data points; they're actionable insights that actually improve my performance.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Yoga Instructor",
    text: "I love the minimal design. It feels premium and calm, unlike other fitness apps that are cluttered with ads and notifications. It's beautiful.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "James Wilson",
    role: "Full-stack Developer",
    text: "The precision of the kinetic tracking is unmatched. I've tested several wearables, and Step Tracker's algorithm is consistently more accurate.",
    avatar: "https://i.pravatar.cc/150?u=james"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 relative overflow-hidden bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary/60 mb-6">User Perspectives</h2>
          <h3 className="text-5xl md:text-7xl font-display font-medium text-brand-primary tracking-tighter">
            Voices of <span className="text-gradient">Precision.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="glass p-12 rounded-[3.5rem] flex flex-col justify-between"
            >
              <div>
                <div className="text-brand-vibrant mb-8">
                  <Quote size={40} fill="currentColor" stroke="none" className="opacity-20" />
                </div>
                <p className="text-xl text-brand-secondary/80 leading-relaxed font-light mb-12 italic">
                  "{item.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full border-2 border-brand-vibrant/20 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-brand-primary font-display">{item.name}</h4>
                  <p className="text-xs text-brand-secondary/60 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
