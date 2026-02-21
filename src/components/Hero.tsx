import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-8 md:pt-48 md:pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-accent-200/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6 border border-brand-100">
              🚀 Affordable Digital Solutions for Local Heroes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Get Your Business Online <br />
            <span className="text-brand-600">Without Breaking the Bank</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We build premium websites and mobile apps for shops, clinics, salons, and creators. 
            Fast delivery, custom designs, and mobile-first approach—starting at unbeatable prices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/918610964049?text=Hi! I want to discuss a project for my business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started on WhatsApp
            </a>
            <a
              href="#portfolio"
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              "3-Day Delivery",
              "100% Mobile Optimized",
              "Free Domain & Hosting*",
              "WhatsApp Support"
            ].map((item) => (
              <div key={item} className="flex items-center text-slate-500 font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mr-2" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
