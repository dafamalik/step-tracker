import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-brand-surface">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary font-medium mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-[3rem] p-12 md:p-16"
        >
          <h1 className="text-4xl md:text-6xl font-display mb-8">Terms & Conditions</h1>
          <p className="text-brand-secondary/60 mb-12 italic text-sm">Last Updated: May 16, 2026</p>
          
          <div className="space-y-12 prose prose-lg prose-slate max-w-none">
            <section>
              <h2 className="text-2xl font-display mb-4">1. User Responsibilities</h2>
              <p>By using Step Tracker, you agree to provide accurate information and use the application in compliance with all applicable laws. You are responsible for maintaining the confidentiality of your account credentials.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">2. Health Disclaimer</h2>
              <p>Step Tracker is a tool for tracking activity and is not a medical device. Consult with a healthcare professional before starting any new exercise routine. We are not responsible for any injuries sustained while using the application.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">3. Accuracy Disclaimer</h2>
              <p>While we strive for precision using advanced sensor algorithms, data recorded by Step Tracker may have slight variations based on device placement, hardware limitations, and environmental factors.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">4. Intellectual Property</h2>
              <p>All content, designs, and algorithms within Step Tracker are the exclusive property of Step Tracker Inc. Unauthorized reproduction or redistribution is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">5. Service Limitations</h2>
              <p>We reserve the right to modify or discontinue features of the application at any time. We will provide reasonable notice for any changes that significantly impact user data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">6. Contact</h2>
              <p>For support or legal inquiries, please reach out to hello@steptracker.ai</p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
