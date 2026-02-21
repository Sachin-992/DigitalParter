import { MessageCircle, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-bold font-display tracking-tight text-brand-500 mb-6 block">
              Digital<span className="text-white">Partner</span>
            </a>
            <p className="text-sm leading-relaxed mb-8">
              {t.footer.about}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/grow.with.sachin9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{t.nav.services}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{t.services.items.websites.title}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{t.services.items.apps.title}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{t.services.items.portfolios.title}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{t.services.items.ecommerce.title}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{t.footer.quickLinks}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#who-it-is-for" className="hover:text-brand-400 transition-colors">{t.whoWeHelp.title}</a></li>
              <li><a href="#portfolio" className="hover:text-brand-400 transition-colors">{t.nav.portfolio}</a></li>
              <li><a href="#pricing" className="hover:text-brand-400 transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{t.footer.contact}</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-500 shrink-0" />
                <span className="leading-relaxed">Echampatti Village, Next stop to Rayakottai, Tamil Nadu 635116</span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-brand-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+918610964049" className="hover:text-brand-400 transition-colors font-medium">+91 86109 64049</a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-brand-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:sachinswork9@gmail.com" className="hover:text-brand-400 transition-colors font-medium">sachinswork9@gmail.com</a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/918610964049?text=Hi Sachin! I'm interested in building a digital product for my business. Can we discuss?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold text-xs hover:bg-brand-500 transition-all shadow-lg shadow-brand-600/20 group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  {t.footer.whatsapp}
                </a>
                <p className="text-[10px] text-slate-500 mt-2 ml-1 italic">{t.footer.responseTime}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-xs">
          <p>© {new Date().getFullYear()} DigitalPartner Solutions. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
