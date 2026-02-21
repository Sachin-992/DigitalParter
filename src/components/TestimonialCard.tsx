import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  delay?: number;
}

export default function TestimonialCard({ content, author, role, avatar, delay = 0 }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm relative overflow-hidden"
    >
      <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-50 opacity-10" />
      <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">"{content}"</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 mr-4 shrink-0">
          <motion.img
            style={{ y }}
            src={avatar}
            alt={author}
            loading="lazy"
            className="w-full h-full rounded-full object-cover border-2 border-brand-100 shadow-sm scale-125"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{author}</h4>
          <p className="text-slate-500 text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
