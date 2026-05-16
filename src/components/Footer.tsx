import { Link } from 'react-router-dom';
import { Activity, Instagram, Twitter, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-medium text-brand-primary tracking-tighter leading-none mb-12">
              Move smarter. <br />
              <span className="text-gradient">Track every step.</span>
            </h2>
            <div className="flex flex-wrap gap-4">
               <button className="px-8 py-4 rounded-2xl bg-brand-primary text-white font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                  <span className="text-xs italic opacity-60 font-light">Download on</span>
                  App Store
                  <ArrowUpRight size={16} />
               </button>
               <button className="px-8 py-4 rounded-2xl border-2 border-brand-primary/10 text-brand-primary font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                  <span className="text-xs italic opacity-60 font-light">Get it on</span>
                  Google Play
                  <ArrowUpRight size={16} />
               </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-brand-primary font-display font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-brand-secondary/60 hover:text-brand-primary transition-colors">Features</a></li>
                <li><a href="#analytics" className="text-brand-secondary/60 hover:text-brand-primary transition-colors">Analytics</a></li>
                <li><a href="#testimonials" className="text-brand-secondary/60 hover:text-brand-primary transition-colors">Testimonials</a></li>
                <li><Link to="/legal" className="text-brand-secondary/60 hover:text-brand-primary transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-primary font-display font-bold uppercase tracking-widest text-xs mb-8">Legal</h4>
              <ul className="space-y-4">
                <li><Link to="/privacy" className="text-brand-secondary/60 hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-brand-secondary/60 hover:text-brand-primary transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/legal" className="text-brand-secondary/60 hover:text-brand-primary transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-brand-lime">
              <Activity size={18} />
            </div>
            <span className="text-xl font-display font-bold text-brand-primary tracking-tighter">
              Step Tracker
            </span>
            <span className="text-xs text-brand-secondary/40 ml-4 font-mono">© 2026 PRECISION INC.</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
