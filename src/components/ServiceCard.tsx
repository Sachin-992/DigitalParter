import { LucideIcon, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  delay?: number;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  features,
  delay = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all group relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full translate-x-16 -translate-y-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-8 h-8 text-brand-600 group-hover:text-white transition-colors" />
        </div>
        
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{title}</h3>
        </div>
        
        <p className="text-slate-600 leading-relaxed mb-8">{description}</p>
        
        <ul className="space-y-3 mb-10 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-500">
              <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center mr-3 shrink-0">
                <Check className="w-3 h-3 text-brand-600" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        
        <a 
          href={`https://wa.me/918610964049?text=Hi! I'm interested in your ${title} service.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-brand-600 font-bold text-sm group/link"
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
