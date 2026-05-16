import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
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
          <h1 className="text-4xl md:text-6xl font-display mb-8">Privacy Policy</h1>
          <p className="text-brand-secondary/60 mb-12 italic text-sm">Effective Date: May 16, 2026</p>
          
          <div className="space-y-12 prose prose-lg prose-slate max-w-none">
            <section>
              <h2 className="text-2xl font-display mb-4">1. Data Collection</h2>
              <p>We collect information that you directly provide to us, including your profile information when you register for an account. This may include your name, email address, and physical characteristics such as height and weight to provide accurate calorie tracking.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">2. Step & Activity Data Usage</h2>
              <p>Our primary function is tracking your physical activity. We collect step counts, distance traveled, and active minutes. This data is processed locally on your device and synced with our secure servers to provide you with historical insights and goal progress tracking.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">3. Device Permissions</h2>
              <p>Step Tracker requests access to your device's motion sensors and health data (via Apple Health or Google Fit) to accurately record your movement. These permissions are optional but necessary for full functionality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">4. Analytics Usage</h2>
              <p>We use anonymized analytics to understand how users interact with Step Tracker. This helps us prioritize features and fix performance issues. Your personal identity is never attached to this analytics data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">5. Data Protection</h2>
              <p>We implement industry-standard encryption and security protocols to protect your personal information. Your health data is treated with the highest level of sensitivity and is never sold to third-party advertisers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">6. Contact Information</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@steptracker.ai</p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
