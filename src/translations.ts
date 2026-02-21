export type Language = 'en' | 'ta';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      pricing: 'Pricing',
      portfolio: 'Portfolio',
      contact: 'Contact'
    },
    hero: {
      badge: 'Based in Rayakottai, Tamil Nadu',
      title: 'Building Digital Products for Local Businesses',
      subtitle: 'We help local shops, clinics, and creators in our community grow with professional websites and mobile apps.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'View Our Work'
    },
    whoWeHelp: {
      title: 'Who We Help',
      subtitle: 'We specialize in digitizing local businesses in our community.',
      categories: {
        clinics: {
          name: 'Clinics',
          desc: 'Professional presence for healthcare.',
          p1: 'Patient Booking',
          p2: 'Service Catalog',
          p3: 'Clinic Location'
        },
        retail: {
          name: 'Retail Shops',
          desc: 'Expand your local shop reach.',
          p1: 'Product Display',
          p2: 'WhatsApp Sales',
          p3: 'Local Visibility'
        },
        medical: {
          name: 'Medical Stores',
          desc: 'Digital catalog for pharmacies.',
          p1: 'Medicine List',
          p2: 'Order Requests',
          p3: 'Digital Presence'
        },
        restaurants: {
          name: 'Restaurants',
          desc: 'Digital dining experience.',
          p1: 'Digital Menu',
          p2: 'Table Booking',
          p3: 'Customer Leads'
        },
        salons: {
          name: 'Salons & Spas',
          desc: 'Bookings made easy for beauty.',
          p1: 'Appointment Sync',
          p2: 'Service Menu',
          p3: 'Client Reviews'
        },
        influencers: {
          name: 'Influencers',
          desc: 'Showcase your personal brand.',
          p1: 'Brand Media Kit',
          p2: 'Work Portfolio',
          p3: 'Social Links'
        },
        youtubers: {
          name: 'YouTubers',
          desc: 'Central hub for your content.',
          p1: 'Video Showcase',
          p2: 'Merch Store',
          p3: 'Fan Engagement'
        }
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Everything you need to take your business online and reach more customers.',
      items: {
        websites: {
          title: 'Business Websites',
          desc: 'Professional, fast-loading websites for local shops, clinics, and service providers.',
          f1: 'Mobile Responsive Design',
          f2: 'SEO Optimized Structure',
          f3: 'Contact Form Integration',
          f4: 'Google Maps Setup',
          f5: 'Fast 3-Day Delivery'
        },
        apps: {
          title: 'Mobile Apps',
          desc: 'Custom Android and iOS apps to engage your customers and streamline operations.',
          f1: 'Cross-Platform (iOS & Android)',
          f2: 'User-Friendly Interface',
          f3: 'Push Notifications',
          f4: 'Offline Functionality',
          f5: 'App Store Submission'
        },
        portfolios: {
          title: 'Creator Portfolios',
          desc: 'Stunning personal websites for Instagram influencers and YouTube creators.',
          f1: 'Social Media Integration',
          f2: 'Video/Gallery Showcase',
          f3: 'Brand Collaboration Form',
          f4: 'Media Kit Download',
          f5: 'Personal Branding'
        },
        ecommerce: {
          title: 'E-commerce Starter',
          desc: 'Simple online stores to help you start selling your products directly to customers.',
          f1: 'Product Catalog Management',
          f2: 'Secure Payment Gateway',
          f3: 'Order Tracking System',
          f4: 'Inventory Alerts',
          f5: 'WhatsApp Ordering'
        }
      }
    },
    process: {
      title: 'Our Simple Process',
      subtitle: 'From initial idea to a live digital product in 4 easy steps.',
      steps: [
        { title: 'Discovery', desc: 'We discuss your business needs and goals over a call or coffee.' },
        { title: 'Design', desc: 'We create a custom design that matches your brand and local audience.' },
        { title: 'Development', desc: 'We build your product using modern, fast, and secure technologies.' },
        { title: 'Launch', desc: 'We set everything up and get your business live for the world to see.' }
      ]
    },
    trust: {
      title: 'Why Local Businesses Trust Us',
      subtitle: 'We are not just a service provider; we are your digital growth partner.',
      items: {
        pricing: { title: 'Affordable Pricing', desc: 'High-quality development at a fraction of the cost of traditional agencies.' },
        delivery: { title: 'Fast 3-Day Delivery', desc: 'We value your time. Get your basic website live in as little as 72 hours.' },
        mobile: { title: 'Mobile Optimized', desc: 'Every site we build looks and works perfectly on smartphones.' },
        custom: { title: 'Custom Designs', desc: 'No generic templates. We build unique designs that reflect your brand.' },
        support: { title: 'Ongoing Support', desc: 'We are always just a WhatsApp message away for any help.' }
      }
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that fits your business needs. No hidden costs, ever.',
      guarantee: '100% Satisfaction Guaranteed',
      plans: {
        starter: {
          name: 'Starter',
          desc: 'Perfect for local shops and personal brands looking to get online fast.',
          f1: 'Single Page Modern Website',
          f2: 'Mobile Responsive Design',
          f3: 'WhatsApp Direct Integration',
          f4: 'Google Maps Business Setup',
          f5: 'Fast 3-Day Delivery',
          f6: 'Basic SEO Optimization',
          f7: '1 Month Free Support'
        },
        business: {
          name: 'Business',
          desc: 'Ideal for clinics, salons, and growing businesses needing more depth.',
          popular: 'Most Popular',
          f1: 'Multi-page Website (up to 5)',
          f2: 'Premium Custom UI Design',
          f3: 'Dynamic Service Listings',
          f4: 'Custom Contact Forms',
          f5: 'Advanced SEO Strategy',
          f6: '3 Months Priority Support',
          f7: 'Free Domain (1 Year)',
          f8: 'Hosting Setup Assistance'
        },
        premium: {
          name: 'Premium',
          desc: 'For complex needs like e-commerce, custom apps, or large-scale projects.',
          f1: 'Full E-commerce / Mobile App',
          f2: 'Advanced Custom Functionality',
          f3: 'Secure Payment Integration',
          f4: 'Dedicated Admin Dashboard',
          f5: 'Full Digital Growth Package',
          f6: '1 Year Dedicated Support',
          f7: 'Priority Feature Updates',
          f8: 'Scalable Infrastructure'
        }
      },
      cta: 'Get Started'
    },
    footer: {
      about: 'Empowering local businesses in Tamil Nadu with world-class digital products. Built with passion in Rayakottai.',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      whatsapp: 'Chat on WhatsApp',
      responseTime: 'Typical response time: < 2 hours',
      rights: 'All rights reserved.'
    },
    about: {
      title: 'About Me',
      subtitle: 'The journey from a small town to building digital solutions for the world.',
      heading: 'Building Digital Trust',
      subheading: 'One Project at a Time',
      p1: "I'm a .NET Software Developer and Entrepreneur from Rayakottai, dedicated to empowering local businesses with high-quality digital tools. My journey from Government Boys Higher Secondary School to SSN College of Engineering instilled a deep passion for problem-solving.",
      p2: "Despite my background in Mechanical Engineering, I found my true calling in software. Today, I bridge the digital divide for shops, clinics, and creators by combining engineering discipline with technical expertise.",
      quote: "I believe technology should be accessible and impactful. Whether building a simple website or a complex app, I bring the same dedication and precision to every project.",
      education: {
        title: 'Educational Foundation',
        school: 'Govt Boys Higher Secondary School',
        schoolLoc: 'Rayakottai',
        schoolType: 'Schooling',
        college: 'SSN College of Engineering',
        collegeLoc: 'Chennai',
        collegeType: 'B.E. Mechanical Engineering'
      },
      expertise: {
        title: 'Verified Expertise',
        desc: 'Committed to delivering secure, scalable, and high-performance software solutions.'
      }
    }
  },
  ta: {
    nav: {
      services: 'சேவைகள்',
      process: 'செயல்முறை',
      pricing: 'கட்டணம்',
      portfolio: 'படைப்புகள்',
      contact: 'தொடர்பு'
    },
    hero: {
      badge: 'இராயக்கோட்டை, தமிழ்நாடு',
      title: 'உள்ளூர் வணிகங்களுக்கான டிஜிட்டல் தயாரிப்புகள்',
      subtitle: 'நமது பகுதியில் உள்ள கடைகள், கிளினிக்குகள் மற்றும் படைப்பாளர்களுக்கு தொழில்முறை இணையதளங்கள் மற்றும் செயலிகள் மூலம் வளர்ச்சி அடைய உதவுகிறோம்.',
      ctaPrimary: 'தொடங்குங்கள்',
      ctaSecondary: 'எங்கள் வேலைகளைப் பாருங்கள்'
    },
    whoWeHelp: {
      title: 'யாருக்கு உதவுகிறோம்?',
      subtitle: 'நமது சமூகத்தில் உள்ள உள்ளூர் வணிகங்களை டிஜிட்டல் மயமாக்குவதில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம்.',
      categories: {
        clinics: {
          name: 'கிளினிக்குகள்',
          desc: 'மருத்துவ சேவைக்கான தொழில்முறை இணையதளம்.',
          p1: 'நோயாளி முன்பதிவு',
          p2: 'சேவை பட்டியல்',
          p3: 'கிளினிக் இருப்பிடம்'
        },
        retail: {
          name: 'சில்லறை விற்பனை கடைகள்',
          desc: 'உங்கள் கடையின் விற்பனையை அதிகரிக்கவும்.',
          p1: 'தயாரிப்பு காட்சி',
          p2: 'வாட்ஸ்அப் விற்பனை',
          p3: 'உள்ளூர் விளம்பரம்'
        },
        medical: {
          name: 'மருந்தகங்கள்',
          desc: 'மருந்தகங்களுக்கான டிஜிட்டல் பட்டியல்.',
          p1: 'மருந்து பட்டியல்',
          p2: 'ஆர்டர் கோரிக்கைகள்',
          p3: 'டிஜிட்டல் இருப்பு'
        },
        restaurants: {
          name: 'உணவகங்கள்',
          desc: 'டிஜிட்டல் உணவு அனுபவம்.',
          p1: 'டிஜிட்டல் மெனு',
          p2: 'மேஜை முன்பதிவு',
          p3: 'வாடிக்கையாளர் தொடர்பு'
        },
        salons: {
          name: 'சலூன்கள் & ஸ்பாக்கள்',
          desc: 'அழகு கலை சேவைகளுக்கான முன்பதிவு.',
          p1: 'நேர முன்பதிவு',
          p2: 'சேவை மெனு',
          p3: 'வாடிக்கையாளர் கருத்துக்கள்'
        },
        influencers: {
          name: 'இன்ஃப்ளூயன்ஸர்கள்',
          desc: 'உங்கள் தனிப்பட்ட பிராண்டை வெளிப்படுத்துங்கள்.',
          p1: 'மீடியா கிட்',
          p2: 'வேலை போர்ட்ஃபோலியோ',
          p3: 'சமூக வலைதள இணைப்புகள்'
        },
        youtubers: {
          name: 'யூடியூபர்கள்',
          desc: 'உங்கள் வீடியோக்களுக்கான ஒரு மையம்.',
          p1: 'வீடியோ காட்சி',
          p2: 'பொருட்கள் விற்பனை',
          p3: 'ரசிகர்கள் தொடர்பு'
        }
      }
    },
    services: {
      title: 'எங்கள் சேவைகள்',
      subtitle: 'உங்கள் வணிகத்தை ஆன்லைனில் கொண்டு செல்ல தேவையான அனைத்தும்.',
      items: {
        websites: {
          title: 'வணிக இணையதளங்கள்',
          desc: 'கடைகள் மற்றும் கிளினிக்குகளுக்கான வேகமான மற்றும் தொழில்முறை இணையதளங்கள்.',
          f1: 'மொபைல் போன் வசதி',
          f2: 'கூகுள் தேடல் வசதி',
          f3: 'தொடர்பு படிவம்',
          f4: 'கூகுள் மேப்ஸ் அமைப்பு',
          f5: '3 நாட்களில் டெலிவரி'
        },
        apps: {
          title: 'மொபைல் செயலிகள்',
          desc: 'உங்கள் வாடிக்கையாளர்களை ஈர்க்க ஆண்ட்ராய்டு மற்றும் ஐஓஎஸ் செயலிகள்.',
          f1: 'ஆண்ட்ராய்டு & ஐஓஎஸ்',
          f2: 'எளிதான பயன்பாடு',
          f3: 'அறிவிப்பு வசதி',
          f4: 'ஆஃப்லைன் பயன்பாடு',
          f5: 'ஆப் ஸ்டோர் பதிவேற்றம்'
        },
        portfolios: {
          title: 'படைப்பாளர் போர்ட்ஃபோலியோ',
          desc: 'இன்ஸ்டாகிராம் மற்றும் யூடியூப் படைப்பாளர்களுக்கான இணையதளங்கள்.',
          f1: 'சமூக வலைதள இணைப்பு',
          f2: 'வீடியோ/கேலரி காட்சி',
          f3: 'ஒப்பந்த படிவம்',
          f4: 'மீடியா கிட் டவுன்லோட்',
          f5: 'தனிப்பட்ட பிராண்டிங்'
        },
        ecommerce: {
          title: 'ஆன்லைன் ஸ்டோர்',
          desc: 'உங்கள் பொருட்களை நேரடியாக ஆன்லைனில் விற்க எளிய ஸ்டோர்கள்.',
          f1: 'தயாரிப்பு மேலாண்மை',
          f2: 'பாதுகாப்பான பணம் செலுத்துதல்',
          f3: 'ஆர்டர் டிராக்கிங்',
          f4: 'ஸ்டாக் அறிவிப்புகள்',
          f5: 'வாட்ஸ்அப் ஆர்டர்'
        }
      }
    },
    process: {
      title: 'எங்கள் எளிய செயல்முறை',
      subtitle: 'உங்கள் யோசனையை 4 எளிய படிகளில் டிஜிட்டல் தயாரிப்பாக மாற்றுகிறோம்.',
      steps: [
        { title: 'கலந்தாலோசனை', desc: 'உங்கள் வணிகத் தேவைகளை போன் அல்லது நேரில் பேசி முடிவு செய்கிறோம்.' },
        { title: 'வடிவமைப்பு', desc: 'உங்கள் பிராண்டிற்கு ஏற்ற தனித்துவமான டிசைனை உருவாக்குகிறோம்.' },
        { title: 'உருவாக்கம்', desc: 'நவீன மற்றும் பாதுகாப்பான தொழில்நுட்பங்களைப் பயன்படுத்தி உருவாக்குகிறோம்.' },
        { title: 'வெளியீடு', desc: 'அனைத்தையும் தயார் செய்து உங்கள் வணிகத்தை ஆன்லைனில் கொண்டு வருகிறோம்.' }
      ]
    },
    trust: {
      title: 'உள்ளூர் வணிகங்கள் ஏன் எங்களை நம்புகின்றன?',
      subtitle: 'நாங்கள் வெறும் சேவை வழங்குநர் மட்டுமல்ல; உங்கள் வணிக வளர்ச்சியின் பங்குதாரர்.',
      items: {
        pricing: { title: 'குறைந்த கட்டணம்', desc: 'மற்ற நிறுவனங்களை விட மிகக் குறைந்த விலையில் சிறந்த தரம்.' },
        delivery: { title: '3 நாட்களில் டெலிவரி', desc: 'உங்கள் நேரத்தை மதிக்கிறோம். 72 மணிநேரத்தில் இணையதளம் தயார்.' },
        mobile: { title: 'மொபைல் வசதி', desc: 'அனைத்து இணையதளங்களும் மொபைல் போன்களில் சிறப்பாக செயல்படும்.' },
        custom: { title: 'தனித்துவமான டிசைன்', desc: 'ஒவ்வொரு வணிகத்திற்கும் ஏற்றவாறு புதிய டிசைன்கள்.' },
        support: { title: 'தொடர்ச்சியான ஆதரவு', desc: 'எந்த உதவிக்கும் வாட்ஸ்அப் மூலம் எங்களை அணுகலாம்.' }
      }
    },
    pricing: {
      title: 'எளிமையான மற்றும் வெளிப்படையான கட்டணம்',
      subtitle: 'உங்கள் வணிகத் தேவைக்கேற்ப திட்டத்தைத் தேர்ந்தெடுக்கவும். மறைமுகக் கட்டணங்கள் இல்லை.',
      guarantee: '100% திருப்தி உறுதி',
      plans: {
        starter: {
          name: 'தொடக்கத் திட்டம்',
          desc: 'சிறிய கடைகள் மற்றும் தனிநபர்களுக்கு ஏற்றது.',
          f1: 'ஒற்றை பக்க இணையதளம்',
          f2: 'மொபைல் போன் வசதி',
          f3: 'வாட்ஸ்அப் இணைப்பு',
          f4: 'கூகுள் மேப்ஸ் அமைப்பு',
          f5: '3 நாட்களில் டெலிவரி',
          f6: 'அடிப்படை எஸ்சிஓ (SEO)',
          f7: '1 மாத இலவச ஆதரவு'
        },
        business: {
          name: 'வணிகத் திட்டம்',
          desc: 'வளர்ந்து வரும் வணிகங்கள் மற்றும் கிளினிக்குகளுக்கு ஏற்றது.',
          popular: 'மிகவும் விருப்பமானது',
          f1: '5 பக்கங்கள் வரை இணையதளம்',
          f2: 'சிறந்த டிசைன் (Premium UI)',
          f3: 'சேவை பட்டியல்கள்',
          f4: 'தொடர்பு படிவங்கள்',
          f5: 'மேம்பட்ட எஸ்சிஓ (SEO)',
          f6: '3 மாத முன்னுரிமை ஆதரவு',
          f7: 'இலவச டொமைன் (1 வருடம்)',
          f8: 'ஹோஸ்டிங் உதவி'
        },
        premium: {
          name: 'பிரீமியம் திட்டம்',
          desc: 'ஆன்லைன் ஸ்டோர் மற்றும் பெரிய திட்டங்களுக்கு ஏற்றது.',
          f1: 'முழு ஆன்லைன் ஸ்டோர் / ஆப்',
          f2: 'மேம்பட்ட வசதிகள்',
          f3: 'பணம் செலுத்தும் வசதி',
          f4: 'நிர்வாகி டேஷ்போர்டு',
          f5: 'முழு டிஜிட்டல் வளர்ச்சி',
          f6: '1 வருடம் நேரடி ஆதரவு',
          f7: 'புதிய வசதிகள் முன்னுரிமை',
          f8: 'பெரிய அளவிலான கட்டமைப்பு'
        }
      },
      cta: 'தொடங்குங்கள்'
    },
    footer: {
      about: 'தமிழ்நாட்டில் உள்ள உள்ளூர் வணிகங்களுக்கு உலகத்தரம் வாய்ந்த டிஜிட்டல் தயாரிப்புகளை வழங்குகிறோம். இராயக்கோட்டையில் அன்புடன் உருவாக்கப்பட்டது.',
      quickLinks: 'விரைவு இணைப்புகள்',
      contact: 'தொடர்பு கொள்ள',
      whatsapp: 'வாட்ஸ்அப்பில் பேச',
      responseTime: 'பதில் அளிக்கும் நேரம்: < 2 மணிநேரம்',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
    },
    about: {
      title: 'என்னைப் பற்றி',
      subtitle: 'ஒரு சிறிய கிராமத்திலிருந்து உலகிற்கான டிஜிட்டல் தீர்வுகளை உருவாக்குவது வரையிலான பயணம்.',
      heading: 'டிஜிட்டல் நம்பிக்கையை உருவாக்குதல்',
      subheading: 'ஒவ்வொரு திட்டத்திலும்',
      p1: "நான் இராயக்கோட்டையைச் சேர்ந்த .NET மென்பொருள் உருவாக்குநர் மற்றும் தொழில்முனைவோர். உள்ளூர் வணிகங்களுக்கு உயர்தர டிஜிட்டல் கருவிகள் மூலம் அதிகாரம் அளிக்க அர்ப்பணிப்புடன் செயல்படுகிறேன். அரசு ஆண்கள் மேல்நிலைப் பள்ளியிலிருந்து எஸ்எஸ்என் பொறியியல் கல்லூரி வரையிலான எனது பயணம் சிக்கல்களைத் தீர்ப்பதில் ஆழ்ந்த ஆர்வத்தை ஏற்படுத்தியது.",
      p2: "மெக்கானிக்கல் இன்ஜினியரிங் பின்னணி இருந்தபோதிலும், மென்பொருள் துறையில் எனது உண்மையான ஆர்வத்தைக் கண்டறிந்தேன். இன்று, பொறியியல் ஒழுக்கத்தையும் தொழில்நுட்ப நிபுணத்துவத்தையும் இணைப்பதன் மூலம் கடைகள், கிளினிக்குகள் மற்றும் படைப்பாளர்களுக்கு டிஜிட்டல் சேவைகளை வழங்குகிறேன்.",
      quote: "தொழில்நுட்பம் எளிதில் அணுகக்கூடியதாகவும் தாக்கத்தை ஏற்படுத்துவதாகவும் இருக்க வேண்டும் என்று நான் நம்புகிறேன். ஒரு எளிய இணையதளம் அல்லது சிக்கலான செயலி எதுவாக இருந்தாலும், ஒவ்வொரு திட்டத்திலும் அதே அர்ப்பணிப்பையும் துல்லியத்தையும் கொண்டு வருகிறேன்.",
      education: {
        title: 'கல்வி அடித்தளம்',
        school: 'அரசு ஆண்கள் மேல்நிலைப் பள்ளி',
        schoolLoc: 'இராயக்கோட்டை',
        schoolType: 'பள்ளிப்படிப்பு',
        college: 'எஸ்எஸ்என் பொறியியல் கல்லூரி',
        collegeLoc: 'சென்னை',
        collegeType: 'பி.இ. மெக்கானிக்கல் இன்ஜினியரிங்'
      },
      expertise: {
        title: 'சரிபார்க்கப்பட்ட நிபுணத்துவம்',
        desc: 'பாதுகாப்பான, அளவிடக்கூடிய மற்றும் உயர்தர மென்பொருள் தீர்வுகளை வழங்க உறுதிபூண்டுள்ளோம்.'
      }
    }
  }
};
