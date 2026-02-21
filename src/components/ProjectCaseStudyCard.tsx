import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCaseStudyCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCaseStudyCard({ project, index }: ProjectCaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-500/5 transition-all duration-500"
    >
      {/* Image Container - Compact */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-brand-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Live Link Overlay - Hidden on touch devices by default, but accessible via Explore link */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex">
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            Live Demo <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content - Concise */}
      <div className="p-5 sm:p-8 flex flex-col flex-grow">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-brand-600 text-xs sm:text-sm font-medium italic mb-2 sm:mb-3">
            {project.tagline}
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
            {project.description}
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
          {project.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-500 shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Impact Badge */}
        <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-50">
          <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-emerald-700 text-[10px] sm:text-[11px] leading-relaxed font-semibold line-clamp-2">
              {project.impact}
            </p>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6">
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full text-slate-900 font-bold text-xs sm:text-sm group/link"
          >
            <span>Explore Project</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
