import { Routes, Route, Link } from 'react-router-dom';
import { 
  Stethoscope, 
  ShoppingBag, 
  Utensils, 
  Scissors, 
  Camera, 
  Play, 
  Globe, 
  Smartphone, 
  User, 
  Zap, 
  ShieldCheck, 
  Clock, 
  SmartphoneIcon, 
  HeartHandshake,
  Layout,
  Store,
  Phone,
  Check,
  MessageCircle,
  ArrowRight,
  Home as HomeIcon,
  AlertCircle
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ServiceCard from './components/ServiceCard';
import ProjectCaseStudyCard from './components/ProjectCaseStudyCard';
import { projects } from './data/projects';
import PricingCard from './components/PricingCard';
import TestimonialCard from './components/TestimonialCard';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { motion } from 'motion/react';

function Home() {
  return (
    <>
      <Hero />

      {/* Who This Is For */}
      <Section 
        id="who-it-is-for"
        title="Who We Help"
        subtitle="We specialize in digital solutions tailored for small businesses and creators who need a professional presence without the high agency costs."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              name: 'Clinics', 
              icon: Stethoscope, 
              image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
              description: 'Professional presence for healthcare.',
              points: ['Patient Booking', 'Service Catalog', 'Clinic Location']
            },
            { 
              name: 'Retail Shops', 
              icon: Store, 
              image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
              description: 'Expand your local shop reach.',
              points: ['Product Display', 'WhatsApp Sales', 'Local Visibility']
            },
            { 
              name: 'Medical Stores', 
              icon: ShoppingBag, 
              image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop',
              description: 'Digital catalog for pharmacies.',
              points: ['Medicine List', 'Order Requests', 'Digital Presence']
            },
            { 
              name: 'Restaurants', 
              icon: Utensils, 
              image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
              description: 'Digital dining experience.',
              points: ['Digital Menu', 'Table Booking', 'Customer Leads']
            },
            { 
              name: 'Salons & Spas', 
              icon: Scissors, 
              image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
              description: 'Bookings made easy for beauty.',
              points: ['Appointment Sync', 'Service Menu', 'Client Reviews']
            },
            { 
              name: 'Influencers', 
              icon: Camera, 
              image: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=800&auto=format&fit=crop',
              description: 'Showcase your personal brand.',
              points: ['Brand Media Kit', 'Work Portfolio', 'Social Links']
            },
            { 
              name: 'YouTubers', 
              icon: Play, 
              image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=800&auto=format&fit=crop',
              description: 'Central hub for your content.',
              points: ['Video Showcase', 'Merch Store', 'Fan Engagement']
            },
          ].map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{item.name}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <ul className="space-y-2">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center text-xs font-medium text-slate-600">
                      <Check className="w-3 h-3 text-brand-500 mr-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section 
        id="services"
        title="Our Services"
        subtitle="Everything you need to establish and grow your digital presence. We provide end-to-end solutions from design to deployment."
        className="bg-slate-50/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Business Websites"
            description="Professional, fast-loading websites for local shops, clinics, and service providers."
            icon={Globe}
            features={[
              "Mobile Responsive Design",
              "SEO Optimized Structure",
              "Contact Form Integration",
              "Google Maps Setup",
              "Fast 3-Day Delivery"
            ]}
            delay={0.1}
          />
          <ServiceCard 
            title="Mobile Apps"
            description="Custom Android and iOS apps to engage your customers and streamline operations."
            icon={Smartphone}
            features={[
              "Cross-Platform (iOS & Android)",
              "User-Friendly Interface",
              "Push Notifications",
              "Offline Functionality",
              "App Store Submission"
            ]}
            delay={0.2}
          />
          <ServiceCard 
            title="Creator Portfolios"
            description="Stunning personal websites for Instagram influencers and YouTube creators."
            icon={User}
            features={[
              "Social Media Integration",
              "Video/Gallery Showcase",
              "Brand Collaboration Form",
              "Media Kit Download",
              "Personal Branding"
            ]}
            delay={0.3}
          />
          <ServiceCard 
            title="E-commerce Starter"
            description="Simple online stores to help you start selling your products directly to customers."
            icon={ShoppingBag}
            features={[
              "Product Catalog Management",
              "Secure Payment Gateway",
              "Order Tracking System",
              "Inventory Alerts",
              "WhatsApp Ordering"
            ]}
            delay={0.4}
          />
        </div>
      </Section>

      {/* How We Work */}
      <Section 
        title="Our Simple Process"
        subtitle="From initial idea to a live digital product in 4 easy steps."
      >
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We discuss your business goals and requirements over a quick WhatsApp call.',
                icon: Phone
              },
              {
                step: '02',
                title: 'Design & Plan',
                description: 'We create a custom design and project roadmap tailored to your brand.',
                icon: Layout
              },
              {
                step: '03',
                title: 'Development',
                description: 'Our team builds your high-performance website or app with precision.',
                icon: Zap
              },
              {
                step: '04',
                title: 'Launch & Grow',
                description: 'We go live and provide ongoing support to help your business thrive.',
                icon: Globe
              }
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold mb-6 shadow-lg shadow-brand-600/20">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section 
        title="Why Local Businesses Trust Us"
        subtitle="We are not just a service provider; we are your digital growth partner."
        className="bg-white relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-50)_0%,_transparent_70%)] opacity-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {[
            {
              title: 'Affordable Pricing',
              description: 'High-quality development at a fraction of the cost of traditional agencies. We believe premium tech should be accessible.',
              icon: Zap,
              className: 'md:col-span-3 lg:col-span-2 bg-brand-50/50 border-brand-100',
              iconBg: 'bg-brand-100',
              iconColor: 'text-brand-600'
            },
            {
              title: 'Fast 3-Day Delivery',
              description: 'We value your time. Get your basic website live in as little as 72 hours without compromising on quality.',
              icon: Clock,
              className: 'md:col-span-3 lg:col-span-2 bg-slate-50 border-slate-100',
              iconBg: 'bg-slate-200/50',
              iconColor: 'text-slate-700'
            },
            {
              title: 'Mobile Optimized',
              description: 'Every site we build looks and works perfectly on smartphones. Mobile-first is our standard, not an option.',
              icon: SmartphoneIcon,
              className: 'md:col-span-3 lg:col-span-2 bg-accent-50/50 border-accent-100',
              iconBg: 'bg-accent-100',
              iconColor: 'text-accent-600'
            },
            {
              title: 'Custom Designs',
              description: 'No generic templates. We build unique designs that reflect your brand identity and resonate with your local audience.',
              icon: Layout,
              className: 'md:col-span-3 lg:col-span-3 bg-slate-50 border-slate-100',
              iconBg: 'bg-slate-200/50',
              iconColor: 'text-slate-700'
            },
            {
              title: 'Ongoing Support',
              description: 'We are always just a WhatsApp message away. From minor updates to technical help, we are your long-term partners.',
              icon: HeartHandshake,
              className: 'md:col-span-6 lg:col-span-3 bg-brand-50/50 border-brand-100',
              iconBg: 'bg-brand-100',
              iconColor: 'text-brand-600'
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[2rem] border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group ${item.className}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Portfolio / Case Studies */}
      <Section 
        id="portfolio"
        title="Our Products"
        subtitle="A showcase of the high-performance digital products we have developed."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCaseStudyCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[3rem] bg-slate-900 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-500 rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Want to build a product like this for your business?
            </h3>
            <p className="text-slate-400 mb-10 text-lg">
              Whether you're a startup or an established business, we help you build scalable digital products that drive real revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918610964049?text=Hi! I saw your portfolio and I want to build a product for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-600/20 transition-all group"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Pricing */}
      <Section 
        id="pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your business needs. No hidden costs, ever."
      >
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            100% Satisfaction Guaranteed
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            name="Starter"
            price="₹4,999"
            description="Perfect for local shops and personal brands looking to get online fast."
            features={[
              "Single Page Modern Website",
              "Mobile Responsive Design",
              "WhatsApp Direct Integration",
              "Google Maps Business Setup",
              "Fast 3-Day Delivery",
              "Basic SEO Optimization",
              "1 Month Free Support"
            ]}
            delay={0.1}
          />
          <PricingCard 
            name="Business"
            price="₹9,999"
            description="Ideal for clinics, salons, and growing businesses needing more depth."
            isPopular
            features={[
              "Multi-page Website (up to 5)",
              "Premium Custom UI Design",
              "Dynamic Service Listings",
              "Custom Contact Forms",
              "Advanced SEO Strategy",
              "3 Months Priority Support",
              "Free Domain (1 Year)",
              "Hosting Setup Assistance"
            ]}
            delay={0.2}
          />
          <PricingCard 
            name="Premium"
            price="Custom"
            description="For complex needs like e-commerce, custom apps, or large-scale projects."
            features={[
              "Full E-commerce / Mobile App",
              "Advanced Custom Functionality",
              "Secure Payment Integration",
              "Dedicated Admin Dashboard",
              "Full Digital Growth Package",
              "1 Year Dedicated Support",
              "Priority Feature Updates",
              "Scalable Infrastructure"
            ]}
            delay={0.3}
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section 
        title="What Our Clients Say"
        subtitle="Don't just take our word for it. Here's what our partners have to say about working with us."
        className="bg-slate-50/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            content="DigitalPartner built my clinic's website in just 3 days. It's beautiful and my patients love the WhatsApp booking feature!"
            author="Dr. Sameer Khan"
            role="Owner, City Dental Clinic"
            avatar="https://picsum.photos/seed/user1/100/100"
            delay={0.1}
          />
          <TestimonialCard 
            content="I was worried about the cost, but their Starter plan was perfect for my small boutique. Professional service at a great price."
            author="Anjali Sharma"
            role="Founder, Ethnic Wear"
            avatar="https://picsum.photos/seed/user2/100/100"
            delay={0.2}
          />
          <TestimonialCard 
            content="As a YouTuber, I needed a site to show my work to brands. They delivered exactly what I wanted. Highly recommended!"
            author="Rahul Vlogs"
            role="Content Creator"
            avatar="https://picsum.photos/seed/user3/100/100"
            delay={0.3}
          />
        </div>
      </Section>

      {/* About the Founder */}
      <Section 
        id="about"
        title="About Me"
        subtitle="The journey from a small town to building digital solutions for the world."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute -inset-4 bg-brand-100 rounded-[3rem] rotate-3 opacity-50" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop" 
                alt="Founder - Software Developer & Entrepreneur" 
                loading="lazy"
                className="w-full h-auto rounded-[2rem] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/40">
                <p className="text-slate-900 font-bold text-base">Software Developer & Entrepreneur</p>
                <p className="text-brand-600 text-xs font-semibold uppercase tracking-wider"> .NET Developer</p>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Building Digital Trust <br />
                <span className="text-brand-600">One Project at a Time</span>
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                I'm a <strong>.NET Software Developer</strong> and <strong>Entrepreneur</strong> from Rayakottai, dedicated to empowering local businesses with high-quality digital tools. My journey from <strong>Government Boys Higher Secondary School</strong> to <strong>SSN College of Engineering</strong> instilled a deep passion for problem-solving.
              </p>
              <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                <p>
                  Despite my background in <strong>Mechanical Engineering</strong>, I found my true calling in software. Today, I bridge the digital divide for shops, clinics, and creators by combining engineering discipline with technical expertise.
                </p>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic border-l-4 border-brand-500 pl-4">
                "I believe technology should be accessible and impactful. Whether building a simple website or a complex app, I bring the same dedication and precision to every project."
              </p>
            </motion.div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-900 flex items-center">
                <div className="w-8 h-1 bg-brand-500 mr-3 rounded-full" />
                Educational Foundation
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-brand-200 transition-all hover:shadow-md group">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-600 transition-colors">
                    <Store className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Govt Boys Higher Secondary School</h5>
                    <p className="text-slate-500 text-xs">Rayakottai</p>
                    <p className="text-slate-400 text-[10px] mt-1 uppercase font-bold tracking-tighter">Schooling</p>
                  </div>
                </div>

                <div className="flex items-start p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-brand-200 transition-all hover:shadow-md group">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent-600 transition-colors">
                    <Globe className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">SSN College of Engineering</h5>
                    <p className="text-slate-500 text-xs">Chennai</p>
                    <p className="text-slate-400 text-[10px] mt-1 uppercase font-bold tracking-tighter">B.E.Mechanical Engineering</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center p-6 bg-slate-900 rounded-2xl text-white shadow-xl shadow-slate-900/10"
            >
              <ShieldCheck className="w-10 h-10 mr-4 shrink-0 text-brand-400" />
              <div>
                <h4 className="font-bold">Verified Expertise</h4>
                <p className="text-slate-400 text-sm">Committed to delivering secure, scalable, and high-performance software solutions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}

function NotFound() {
  return (
    <Section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md"
      >
        <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="w-12 h-12 text-brand-600" />
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Page Not Found</h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-600/20 transition-all group"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </motion.div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
