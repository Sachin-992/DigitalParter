import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-brand-600 overflow-hidden p-10 md:p-20 text-center"
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {t.hero.ctaPrimary}
            </h2>
            <p className="text-brand-100 text-lg md:text-xl mb-10 leading-relaxed">
              {t.trust.subtitle}
            </p>
            <a
              href="https://wa.me/918610964049?text=Hi! I'm ready to start my project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-brand-600 font-bold text-lg hover:bg-brand-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              {t.pricing.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
