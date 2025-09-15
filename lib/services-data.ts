import {
  BarChart3,
  Bot,
  Briefcase,
  Cloud,
  Code,
  Cpu,
  Database,
  PaintRoller as GameController2,
  Globe,
  MessageSquare,
  Monitor,
  Palette,
  PenTool,
  Server,
  Shield,
  ShoppingCart,
  Smartphone,
  Target,
  Users,
  Workflow,
  Zap
} from "lucide-react";

export interface ServiceFeature {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  text: string;
}

// Service
export interface ServiceProject {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface ServiceReview {
  name: string;
  company: string;
  rating: number;
  comment: string;
  image: string;
  project: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  category: string;
  technologies: string[];
  features: ServiceFeature[];
  projects: ServiceProject[];
  reviews: ServiceReview[];
  ctaText?: string;
  detailedDescription: string;
  keyBenefits: string[];
}

export const servicesData: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Custom web applications, e-commerce platforms, and responsive websites built with modern technologies.",
    detailedDescription:
      "We create powerful, scalable web applications using cutting-edge technologies. From simple landing pages to complex enterprise applications, our development team delivers solutions that drive business growth.",
    icon: Code,
    category: "Development",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
    ],
    keyBenefits: [
      "Fast loading times and optimal performance",
      "SEO-optimized for better search rankings",
      "Scalable architecture for future growth",
      "Cross-browser compatibility",
      "Mobile-first responsive design",
    ],
    features: [
      { icon: Globe, text: "Responsive Design" },
      { icon: Smartphone, text: "Mobile-First" },
      { icon: Database, text: "Database Integration" },
      { icon: Zap, text: "Performance Optimized" },
      { icon: Shield, text: "Security Focused" },
      { icon: Cloud, text: "Cloud Deployment" },
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "Full-featured online store with payment integration, inventory management, and admin dashboard.",
        image: "/modern-ecommerce-website.png",
        technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
        link: "#",
      },
      {
        title: "SaaS Analytics Dashboard",
        description:
          "Real-time analytics platform with data visualization and reporting capabilities.",
        image: "/saas-analytics-dashboard.png",
        technologies: ["React", "D3.js", "Node.js", "MongoDB"],
        link: "#",
      },
      {
        title: "Corporate Website",
        description:
          "Professional corporate website with CMS integration and multi-language support.",
        image: "/professional-corporate-website.png",
        technologies: ["Next.js", "Sanity CMS", "TypeScript"],
        link: "#",
      },
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        rating: 5,
        comment:
          "Exceptional web development service. Our new platform increased conversions by 40%.",
        image: "/professional-woman-ceo.png",
        project: "E-commerce Platform",
      },
      {
        name: "Michael Chen",
        company: "DataFlow Solutions",
        rating: 5,
        comment:
          "The analytics dashboard they built transformed how we visualize our data.",
        image: "/tech-executive-man-cto.jpg",
        project: "SaaS Analytics Dashboard",
      },
    ],
    ctaText: "Start Your Web Project",
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    detailedDescription:
      "We develop high-performance mobile applications that engage users and drive business results. Our expertise spans native iOS/Android development and cross-platform solutions using React Native and Flutter.",
    icon: Smartphone,
    category: "Development",
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Redux",
      "TypeScript",
    ],
    keyBenefits: [
      "Native performance and user experience",
      "Cross-platform compatibility",
      "Offline functionality support",
      "Push notifications and real-time updates",
      "App store optimization and deployment",
    ],
    features: [
      { icon: Smartphone, text: "Cross-Platform" },
      { icon: Zap, text: "High Performance" },
      { icon: Users, text: "User-Centric Design" },
      { icon: Database, text: "Offline Support" },
      { icon: MessageSquare, text: "Push Notifications" },
      { icon: Shield, text: "Secure Authentication" },
    ],
    projects: [
      {
        title: "Fitness Tracking App",
        description:
          "Comprehensive fitness app with workout tracking, nutrition planning, and social features.",
        image: "/fitness-app-mockup.png",
        technologies: ["React Native", "Firebase", "Redux", "Stripe"],
        link: "#",
      },
      {
        title: "Food Delivery Platform",
        description:
          "Multi-vendor food delivery app with real-time tracking and payment integration.",
        image: "/food-delivery-app.png",
        technologies: ["Flutter", "Node.js", "PostgreSQL", "Google Maps"],
        link: "#",
      },
    ],
    reviews: [
      {
        name: "David Rodriguez",
        company: "FitLife Studios",
        rating: 5,
        comment:
          "Our fitness app has over 50k downloads thanks to their excellent development work.",
        image: "/professional-man.png",
        project: "Fitness Tracking App",
      },
    ],
    ctaText: "Build Your Mobile App",
  },
  {
    slug: "fivem-development",
    title: "FiveM Server Development",
    description:
      "Custom FiveM servers, scripts, and modifications for Grand Theft Auto V multiplayer experiences.",
    detailedDescription:
      "We specialize in creating immersive FiveM roleplay servers with custom scripts, unique gameplay mechanics, and optimized performance. From police systems to economy management, we build comprehensive gaming experiences.",
    icon: GameController2,
    category: "Development",
    technologies: [
      "Lua",
      "JavaScript",
      "MySQL",
      "FiveM Framework",
      "ESX",
      "QBCore",
      "VRP",
    ],
    keyBenefits: [
      "Custom roleplay scripts and systems",
      "Optimized server performance",
      "Anti-cheat and security measures",
      "Database integration and management",
      "24/7 server monitoring and support",
    ],
    features: [
      { icon: GameController2, text: "Custom Scripts" },
      { icon: Users, text: "Roleplay Systems" },
      { icon: Database, text: "Player Data Management" },
      { icon: Shield, text: "Anti-Cheat Protection" },
      { icon: Server, text: "Server Optimization" },
      { icon: Monitor, text: "Admin Tools" },
    ],
    projects: [
      {
        title: "LifeRP Server",
        description:
          "Comprehensive roleplay server with jobs, housing, vehicle systems, and economy management.",
        image: "/fivem-liferp-server.png",
        technologies: ["ESX Framework", "MySQL", "Lua", "JavaScript"],
        link: "#",
      },
      {
        title: "Police & EMS System",
        description:
          "Advanced emergency services system with dispatch, evidence collection, and medical procedures.",
        image: "/fivem-police-system.png",
        technologies: ["QBCore", "Lua", "MySQL", "Discord Integration"],
        link: "#",
      },
    ],
    reviews: [
      {
        name: "Alex Thompson",
        company: "CityRP Community",
        rating: 5,
        comment:
          "Best FiveM development team! Our server population grew from 50 to 500+ players.",
        image: "/gaming-community-leader.png",
        project: "LifeRP Server",
      },
    ],
    ctaText: "Launch Your FiveM Server",
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    description:
      "Complete online stores with payment processing, inventory management, and customer analytics.",
    detailedDescription:
      "We build powerful e-commerce platforms that convert visitors into customers. Our solutions include everything from product catalogs to advanced analytics, ensuring your online business thrives in the competitive digital marketplace.",
    icon: ShoppingCart,
    category: "Development",
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Next.js",
      "Stripe",
      "PayPal",
      "Square",
    ],
    keyBenefits: [
      "Secure payment processing",
      "Inventory management systems",
      "SEO-optimized product pages",
      "Mobile-responsive design",
      "Analytics and reporting tools",
    ],
    features: [
      { icon: ShoppingCart, text: "Shopping Cart" },
      { icon: Database, text: "Inventory Management" },
      { icon: Shield, text: "Secure Payments" },
      { icon: BarChart3, text: "Sales Analytics" },
      { icon: Smartphone, text: "Mobile Commerce" },
      { icon: Users, text: "Customer Accounts" },
    ],
    projects: [
      {
        title: "Fashion Boutique Store",
        description:
          "Luxury fashion e-commerce with advanced filtering, wishlist, and personalized recommendations.",
        image: "/fashion-ecommerce-store.png",
        technologies: ["Next.js", "Stripe", "Sanity CMS", "Tailwind CSS"],
        link: "#",
      },
      {
        title: "Electronics Marketplace",
        description:
          "Multi-vendor electronics marketplace with comparison tools and review system.",
        image: "/electronics-marketplace.png",
        technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
        link: "#",
      },
    ],
    reviews: [
      {
        name: "Emma Wilson",
        company: "Boutique Fashion Co.",
        rating: 5,
        comment:
          "Our online sales increased by 300% after launching the new e-commerce platform.",
        image: "/fashion-business-owner.png",
        project: "Fashion Boutique Store",
      },
    ],
    ctaText: "Build Your Online Store",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Brand identity, UI/UX design, marketing materials, and visual content that captivates your audience.",
    detailedDescription:
      "Our creative team transforms ideas into compelling visual experiences. From brand identity to digital marketing materials, we create designs that communicate your message effectively and leave lasting impressions.",
    icon: Palette,
    category: "Design",
    technologies: [
      "Figma",
      "Adobe Creative Suite",
      "Sketch",
      "Canva",
      "Photoshop",
      "Illustrator",
      "InDesign",
    ],
    keyBenefits: [
      "Professional brand identity development",
      "User-centered design approach",
      "Print and digital design expertise",
      "Consistent visual language",
      "Fast turnaround times",
    ],
    features: [
      { icon: PenTool, text: "Brand Identity" },
      { icon: Palette, text: "UI/UX Design" },
      { icon: Globe, text: "Web Graphics" },
      { icon: Smartphone, text: "Mobile Design" },
      { icon: Briefcase, text: "Marketing Materials" },
      { icon: Target, text: "Logo Design" },
    ],
    projects: [
      {
        title: "Tech Startup Branding",
        description:
          "Complete brand identity including logo, color palette, typography, and brand guidelines.",
        image: "/modern-brand-identity.png",
        technologies: ["Adobe Illustrator", "Figma", "Photoshop"],
        link: "#",
      },
      {
        title: "Mobile App UI Design",
        description:
          "Modern mobile app interface with intuitive navigation and engaging user experience.",
        image: "/mobile-app-ui-design.png",
        technologies: ["Figma", "Principle", "Adobe XD"],
        link: "#",
      },
      {
        title: "Marketing Campaign Design",
        description:
          "Comprehensive marketing materials including brochures, social media graphics, and web banners.",
        image: "/marketing-campaign-design.png",
        technologies: ["Adobe Creative Suite", "Canva Pro"],
        link: "#",
      },
    ],
    reviews: [
      {
        name: "Jennifer Martinez",
        company: "Creative Solutions Ltd.",
        rating: 5,
        comment:
          "The brand identity they created perfectly captures our company's vision and values.",
        image: "/creative-director-woman.png",
        project: "Tech Startup Branding",
      },
      {
        name: "Robert Kim",
        company: "InnovateTech",
        rating: 5,
        comment:
          "Outstanding UI design work. Our app's user engagement improved significantly.",
        image: "/product-manager-man.png",
        project: "Mobile App UI Design",
      },
    ],
    ctaText: "Start Your Design Project",
  },
  // {
  //   slug: "erp-solutions",
  //   title: "ERP Solutions",
  //   description:
  //     "Comprehensive enterprise resource planning systems to streamline your business operations.",
  //   detailedDescription:
  //     "We implement and customize ERP solutions that integrate all aspects of your business operations. From inventory management to financial reporting, our ERP systems provide real-time insights and streamlined workflows.",
  //   icon: Settings,
  //   category: "Business Solutions",
  //   technologies: [
  //     "SAP",
  //     "Oracle",
  //     "Microsoft Dynamics",
  //     "Odoo",
  //     "NetSuite",
  //     "Custom Solutions",
  //   ],
  //   keyBenefits: [
  //     "Integrated business processes",
  //     "Real-time data and reporting",
  //     "Improved operational efficiency",
  //     "Scalable system architecture",
  //     "Comprehensive training and support",
  //   ],
  //   features: [
  //     { icon: BarChart3, text: "Business Intelligence" },
  //     { icon: Database, text: "Data Management" },
  //     { icon: Workflow, text: "Process Automation" },
  //     { icon: Settings, text: "System Integration" },
  //     { icon: Users, text: "User Management" },
  //     { icon: TrendingUp, text: "Performance Analytics" },
  //   ],
  //   projects: [
  //     {
  //       title: "Manufacturing ERP System",
  //       description:
  //         "Complete ERP implementation for manufacturing company with inventory, production, and quality control modules.",
  //       image: "/manufacturing-erp-system.png",
  //       technologies: ["SAP", "SQL Server", "Power BI"],
  //       link: "#",
  //     },
  //     {
  //       title: "Retail Chain Management",
  //       description:
  //         "Multi-location retail management system with POS integration and inventory synchronization.",
  //       image: "/retail-erp-system.png",
  //       technologies: ["Microsoft Dynamics", "Azure", "Power Apps"],
  //       link: "#",
  //     },
  //     {
  //       title: "Healthcare Management System",
  //       description:
  //         "Comprehensive healthcare ERP with patient management, billing, and compliance tracking.",
  //       image: "/healthcare-erp-system.png",
  //       technologies: ["Custom Solution", "PostgreSQL", "React"],
  //       link: "#",
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Thomas Anderson",
  //       company: "Manufacturing Pro Inc.",
  //       rating: 5,
  //       comment:
  //         "The ERP system reduced our operational costs by 25% and improved efficiency dramatically.",
  //       image: "/professional-man-operations-director.jpg",
  //       project: "Manufacturing ERP System",
  //     },
  //     {
  //       name: "Lisa Chen",
  //       company: "HealthCare Plus",
  //       rating: 5,
  //       comment:
  //         "Excellent ERP implementation. Patient management is now seamless and efficient.",
  //       image: "/healthcare-manager-woman.png",
  //       project: "Healthcare Management System",
  //     },
  //   ],
  //   ctaText: "Optimize Your Operations",
  // },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Intelligent automation solutions using n8n, Make, Zapier, and custom AI implementations.",
    detailedDescription:
      "We harness the power of AI and automation to streamline your business processes. From chatbots to complex workflow automation, our solutions reduce manual work and increase productivity across your organization.",
    icon: Bot,
    category: "AI & Automation",
    technologies: [
      "n8n",
      "Make",
      "Zapier",
      "OpenAI",
      "Python",
      "TensorFlow",
      "Langchain",
    ],
    keyBenefits: [
      "Reduced manual workload",
      "24/7 automated processes",
      "Improved accuracy and consistency",
      "Cost-effective scaling",
      "Custom AI model development",
    ],
    features: [
      { icon: Bot, text: "AI Chatbots" },
      { icon: Workflow, text: "Process Automation" },
      { icon: Zap, text: "API Integrations" },
      { icon: BarChart3, text: "Data Analytics" },
      { icon: MessageSquare, text: "Natural Language Processing" },
      { icon: Cpu, text: "Machine Learning" },
    ],
    projects: [
      {
        title: "Customer Service Chatbot",
        description:
          "AI-powered chatbot handling 80% of customer inquiries with natural language understanding.",
        image: "/ai-chatbot-interface.png",
        technologies: ["OpenAI", "Langchain", "React", "Node.js"],
        link: "#",
      },
      {
        title: "Document Processing Automation",
        description:
          "Automated document classification and data extraction system using machine learning.",
        image: "/document-automation-system.png",
        technologies: ["Python", "TensorFlow", "OCR", "n8n"],
        link: "#",
      },
      {
        title: "Sales Pipeline Automation",
        description:
          "Complete sales process automation with lead scoring and follow-up sequences.",
        image: "/sales-automation-dashboard.png",
        technologies: ["Make", "Zapier", "CRM Integration", "AI Analytics"],
        link: "#",
      },
    ],
    reviews: [
      {
        name: "Mark Johnson",
        company: "TechFlow Enterprises",
        rating: 5,
        comment:
          "The AI automation saved us 40 hours per week and improved customer satisfaction.",
        image: "/it-director-man.jpg",
        project: "Customer Service Chatbot",
      },
      {
        name: "Amanda Foster",
        company: "DocuFlow Solutions",
        rating: 5,
        comment:
          "Document processing time reduced from hours to minutes. Incredible efficiency gain.",
        image: "/marketing-manager-woman.jpg",
        project: "Document Processing Automation",
      },
    ],
    ctaText: "Automate Your Processes",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return servicesData;
}

// Services for overview/homepage display
export const servicesOverview = servicesData.map((service) => ({
  title: service.title,
  description: service.description,
  icon: service.icon,
  href: `/services/${service.slug}`,
  technologies: service.technologies.slice(0, 4), // Show only first 4 technologies
  features: service.features.slice(0, 4), // Show only first 4 features
}));
