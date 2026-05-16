import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Analytics from '../components/Analytics';
import MobileScreens from '../components/MobileScreens';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-surface selection:bg-brand-vibrant/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Analytics />
        <MobileScreens />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
