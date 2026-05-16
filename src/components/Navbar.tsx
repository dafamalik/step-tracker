import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Analytics', href: '#analytics' },
  { name: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 md:px-12",
        scrolled ? "py-4" : "py-8"
    )}>
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-8 py-3",
          scrolled ? "glass shadow-xl shadow-brand-primary/5" : "bg-transparent"
        )}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-brand-lime transition-transform group-hover:rotate-12">
            <Activity size={24} />
          </div>
          <span className="text-2xl font-display font-bold text-brand-primary tracking-tighter">
            Step Tracker
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-vibrant transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="btn-primary py-2 px-6 text-sm">
            Download Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        className="md:hidden absolute top-full left-6 right-6 mt-4 overflow-hidden rounded-3xl glass shadow-2xl"
      >
        <div className="flex flex-col gap-4 p-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-display font-medium text-brand-primary"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary w-full mt-4">
            Download Now
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
