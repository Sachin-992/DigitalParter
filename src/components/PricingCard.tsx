import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export default function PricingCard({ name, price, description, features, isPopular, delay = 0 }: PricingCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`relative p-8 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 group ${
        isPopular 
          ? 'bg-slate-900 text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] scale-105 z-10 border-2 border-brand-500/30' 
          : 'bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-gradient-to-r from-brand-600 to-brand-400 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-brand-500/40">
            {t.pricing.plans.business.popular}
          </span>
        </div>
      )}
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-2xl font-black tracking-tight ${isPopular ? 'text-white' : 'text-slate-900'}`}>{name}</h3>
          {isPopular && <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />}
        </div>
        <p className={`text-sm leading-relaxed ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-5xl font-black tracking-tighter">{price}</span>
        {price !== 'Custom' && (
          <span className={`text-xs font-bold uppercase tracking-widest ${isPopular ? 'text-slate-500' : 'text-slate-400'}`}>
            / {t.process.title.split(' ')[2] || 'project'}
          </span>
        )}
      </div>

      <div className={`h-px w-full mb-8 ${isPopular ? 'bg-slate-800' : 'bg-slate-100'}`} />

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start text-sm group/item">
            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 transition-colors ${
              isPopular ? 'bg-brand-500/20 text-brand-400' : 'bg-brand-50 text-brand-600'
            }`}>
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className={`transition-colors ${isPopular ? 'text-slate-300 group-hover/item:text-white' : 'text-slate-600 group-hover/item:text-slate-900'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/918610964049?text=Hi! I'm interested in the ${name} plan for my business.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest text-center transition-all duration-300 ${
          isPopular 
            ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98]' 
            : 'bg-slate-900 text-white hover:bg-brand-600 shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-[0.98]'
        }`}
      >
        {t.pricing.cta}
      </a>
    </motion.div>
  );
}
