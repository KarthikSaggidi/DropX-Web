import {
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  FileText,
  Globe2,
  HeartHandshake,
  Headphones,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Target,
  Trophy,
  UsersRound,
  CloudUpload,
  Building2,
  Hospital,
  Utensils,
  GraduationCap,
  Factory,
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Clock3,
  Bot,
  Building,
  Truck,
  Landmark
} from 'lucide-react';

export const company = {
  name: 'DropXcorp Pvt. Ltd.',
  tagline: 'INNOVATE • BUILD • DELIVER',
  email: 'dropxcorp2026@gmail.com',
  phone: '+91 7997005050',
  address: 'India • Remote-first technology studio',
  heroBadge: 'TECHNOLOGY THAT DELIVERS',
  heroTitleLine1: 'We Build',
  heroTitleHighlight: 'Digital Solutions',
  heroTitleLine2: 'That Drive Your Business Forward',
  heroText: 'DropXcorp transforms ideas into powerful, scalable and secure digital products that create value and accelerate growth.',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services/web-design', children: [
    { label: 'Web Design', path: '/services/web-design' },
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Custom Software', path: '/services/custom-software' },
    { label: 'App Development', path: '/services/app-development' },
    { label: 'Cloud Management', path: '/services/cloud-management' },
    { label: 'Database Development', path: '/services/database-development' },
    { label: 'SaaS Development', path: '/services/saas-development' },
    { label: 'Content Management', path: '/services/content-management' },
  ]},
  { label: 'Industries', path: '/industries/healthcare', children: [
    { label: 'Healthcare', path: '/industries/healthcare' },
    { label: 'Manufacturing', path: '/industries/manufacturing' },
    { label: 'Restaurants', path: '/industries/restaurants' },
    { label: 'Education', path: '/industries/education' },
    { label: 'Retail', path: '/industries/retail' },
    { label: 'Real Estate', path: '/industries/real-estate' },
    { label: 'Logistics', path: '/industries/logistics' },
    { label: 'Finance', path: '/industries/finance' },
  ]},
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
];

export const stats = [
  { value: '50+', label: 'Projects Delivered', icon: BriefcaseBusiness },
  { value: '30+', label: 'Happy Clients', icon: UsersRound },
  { value: '10+', label: 'Technologies', icon: Code2 },
  { value: '100%', label: 'Client Satisfaction', icon: Trophy },
];

export const services = [
  { slug: 'web-design', title: 'Web Design', icon: LayoutDashboard, short: 'Modern, responsive designs that create a strong digital presence.', details: 'Brand-focused landing pages, responsive layouts, UI systems and conversion-focused website design for modern businesses.' },
  { slug: 'web-development', title: 'Web Development', icon: Code2, short: 'High-performance websites built with clean code and latest technologies.', details: 'Fast, SEO-ready, scalable websites and portals with clean frontend/backend architecture.' },
  { slug: 'custom-software', title: 'Custom Software Development', icon: Cpu, short: 'Tailored software solutions designed to solve unique business challenges.', details: 'ERP, CRM, workflow tools, automation systems and custom dashboards built around your actual operations.' },
  { slug: 'app-development', title: 'Application Development', icon: Smartphone, short: 'Robust, scalable and secure applications for web and mobile.', details: 'Web apps, admin panels, customer portals, mobile-first apps and internal business tools.' },
  { slug: 'cloud-management', title: 'Cloud Management', icon: CloudUpload, short: 'Secure, scalable and cost-effective cloud solutions to power your business.', details: 'Server setup, monitoring, deployment, backups, uptime, CI/CD and cloud optimization.' },
  { slug: 'database-development', title: 'Database Development', icon: Database, short: 'Optimized, secure and reliable database design and development.', details: 'Schema design, indexing, reporting data models, migrations, backups and performance tuning.' },
  { slug: 'saas-development', title: 'SaaS Development', icon: Globe2, short: 'Build and launch scalable SaaS platforms that users love.', details: 'Multi-tenant SaaS platforms, subscription flows, roles, dashboards and deployment pipelines.' },
  { slug: 'content-management', title: 'Enterprise Content Management', icon: FileText, short: 'Organize, manage and secure enterprise content efficiently.', details: 'Document workflows, approval systems, file management, access control and searchable repositories.' },
  { slug: 'ai-solutions' ,title: 'AI Solutions & Automation', icon: Bot, short: 'AI-powered automation, chatbots and intelligent business solutions.', details: 'Custom AI chatbots, AI agents, workflow automation, customer support automation, lead generation, document processing, AI integrations and business intelligence solutions.'},
  { slug: 'ui-ux-design', title: 'UI/UX Design', icon: MonitorSmartphone, short: 'Beautiful and user-friendly digital experiences designed for engagement.', details: 'Wireframing, prototyping, user research, design systems, mobile app interfaces and modern user experiences that improve conversions.' },
  { slug: 'erp-solutions', title: 'ERP Solutions', icon: Building2, short: 'Custom ERP systems to streamline and automate business operations.', details: 'Hospital ERP, School ERP, Inventory Management, HRMS, CRM, Accounting Systems and industry-specific ERP solutions.' },
  { slug: 'digital-transformation', title: 'Digital Transformation', icon: Layers3, short: 'Modernize business operations with technology-driven transformation.', details: 'Process digitization, workflow automation, ERP modernization, cloud migration and technology consulting for business growth.' },
];

export const valueProps = [
  { title: 'Secure & Reliable', text: 'Security, performance and quality are in our DNA.', icon: ShieldCheck },
  { title: 'Focused on Results', text: 'We deliver solutions that drive growth and efficiency.', icon: Target },
  { title: 'Client-Centric Approach', text: 'We listen, understand and deliver exactly what you need.', icon: UsersRound },
  { title: 'Support & Maintenance', text: 'We provide ongoing support to ensure your success.', icon: Headphones },
];

export const industries = [
  { 
    slug: 'healthcare', 
    title: 'Healthcare & Hospitals', 
    icon: Hospital, 
    text: 'Enterprise-grade Hospital ERP, OPD management, pharmacy, lab integration, secure billing, and intelligent patient workflow solutions.' 
  },
  { 
    slug: 'manufacturing', 
    title: 'Manufacturing & Industrial', 
    icon: Factory, 
    text: 'End-to-end production tracking, payroll management, smart inventory, lot control, automated attendance, and scalable workflow automation.' 
  },
  { 
    slug: 'restaurants', 
    title: 'Restaurants & Hospitality', 
    icon: Utensils, 
    text: 'Smart table management, digital waiter pads, contactless QR ordering, integrated POS, and GST-ready financial reporting systems.' 
  },
  { 
    slug: 'education', 
    title: 'Education & EdTech', 
    icon: GraduationCap, 
    text: 'Next-generation digital classrooms, comprehensive school ERPs, immersive learning platforms, and automated student operations.' 
  },
  { 
    slug: 'retail', 
    title: 'Retail & E-Commerce', 
    icon: ShoppingCart, 
    text: 'Omnichannel POS, intelligent inventory routing, customer loyalty accounts, digital catalogs, and advanced real-time sales analytics.' 
  },
  { 
    slug: 'real-estate', 
    title: 'Real Estate & Property', 
    icon: Building, 
    text: 'Smart society management platforms, property listing portals, tenant CRM, automated maintenance ticketing, and secure billing.' 
  },
  { 
    slug: 'logistics', 
    title: 'Logistics & Supply Chain', 
    icon: Truck, 
    text: 'Real-time fleet tracking, robust warehouse management systems (WMS), automated dispatch, route optimization, and delivery analytics.' 
  },
  { 
    slug: 'finance', 
    title: 'Finance & FinTech', 
    icon: Landmark, 
    text: 'Secure payment gateways, automated corporate accounting, custom wallet solutions, risk assessment dashboards, and data compliance.' 
  }
];

export const portfolio = [
  { name: 'DropX ERP', category: 'Manufacturing ERP', text: 'Factory-focused ERP with lots, production, payroll, attendance, inventory and reports.' },
  { name: 'DropX MediCore', category: 'Hospital ERP', text: 'Hospital management suite for OPD, pharmacy, lab, billing, reports and settings.' },
  { name: 'DropX Restro', category: 'Restaurant Hub', text: 'Modern restaurant operating system with table states, QR ordering and billing.' },
  { name: 'DropX Control', category: 'Deployment Platform', text: 'Centralized release, installation, monitoring and client server management platform.' },
  { name: 'Biometric Attendance', category: 'IoT + ERP', text: 'ESP32-based attendance ecosystem with LAN sync, employee punches and ERP integration.' },
  { name: 'Enterprise Websites', category: 'Web Solutions', text: 'Premium business websites with responsive UI and lead-generation structure.' },
];

export const jobs = [
  { role: 'Full Stack Developer', type: 'Remote / Hybrid', text: 'React, Node.js, APIs, databases and clean product thinking.' },
  { role: 'UI/UX Designer', type: 'Remote / Hybrid', text: 'Modern web layouts, design systems, responsive product screens and branding.' },
  { role: 'Implementation Executive', type: 'On-site / Remote', text: 'Client onboarding, software setup, training and support documentation.' },
];

export const processSteps = [
  {
    title: "Discover",
    text: "Understand business goals and requirements."
  },
  {
    title: "Design",
    text: "Create UI/UX and technical architecture."
  },
  {
    title: "Develop",
    text: "Build scalable software using modern technologies."
  },
  {
    title: "Testing",
    text: "Perform quality assurance and security testing."
  },
  {
    title: "Deploy",
    text: "Launch securely on cloud infrastructure."
  },
  {
    title: "Support",
    text: "Provide maintenance and continuous improvements."
  }
];

export const contactCards = [
  { title: 'Visit Us', value: company.address, icon: MapPin },
  { title: 'Email Us', value: company.email, icon: Mail },
  { title: 'Call Us', value: company.phone, icon: Phone },
  { title: 'Working Hours', value: 'Mon - Sat • 10:00 AM - 7:00 PM', icon: Clock3 },
];

export const checks = [
  'Separate editable pages for every main website section',
  'Responsive desktop, tablet and mobile layout',
  'Service and industry detail pages generated from one data file',
  'DropXcorp blue-white enterprise visual style',
  'Clean cards, CTA sections, dropdown menus and contact form UI',
];

/* =========================================================
   PRICING SECTION
========================================================= */

export const pricingPlans = {

  /* ======================================================
     WEB DESIGN
  ====================================================== */
  "web-design": [
    {
      id: "starter",
      title: "Landing Page",
      subtitle: "Perfect for quick launches",
      price: "₹14,999",
      period: "One Time",
      button: "Get Started",
      color: "blue",
      included: ["Single Page Design", "Mobile Responsive", "Basic SEO", "Contact Form", "Figma Handoff"],
      excluded: ["Multiple Pages", "CMS Integration", "Complex Animations"]
    },
    {
      id: "business",
      title: "Business Site",
      subtitle: "Professional brand presence",
      price: "₹29,999",
      period: "One Time",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Up to 5 Pages", "Premium Layouts", "Responsive Design", "Social Integrations", "Interactive Elements"],
      excluded: ["E-commerce Setup", "Custom Branding"]
    },
    {
      id: "professional",
      title: "Corporate",
      subtitle: "For established brands",
      price: "₹59,999",
      period: "One Time",
      button: "Start Project",
      color: "cyan",
      included: ["Up to 15 Pages", "Custom Branding", "Advanced Animations", "Blog Design", "Accessibility Checks"],
      excluded: ["Dedicated Developer"]
    },
    {
      id: "enterprise",
      title: "Enterprise",
      subtitle: "Fully tailored design systems",
      price: "Custom Quote",
      period: "",
      button: "Contact Sales",
      color: "green",
      included: ["Unlimited Pages", "Complete Design System", "User Testing", "Multiple Concepts", "Priority Revisions"],
      excluded: []
    }
  ],

  /* ======================================================
     WEB DEVELOPMENT
  ====================================================== */
  "web-development": [
    {
      id: "starter",
      title: "Starter",
      subtitle: "Perfect for startups & small businesses",
      price: "₹24,999",
      period: "One Time",
      button: "Get Started",
      color: "blue",
      included: ["Up to 5 Pages", "Responsive Design", "Contact Form", "Basic SEO", "Google Maps", "WhatsApp Integration", "SSL Certificate", "1 Business Email", "30 Days Support"],
      excluded: ["Admin Dashboard", "Payment Gateway", "Blog CMS", "Custom Integrations"]
    },
    {
      id: "business",
      title: "Business",
      subtitle: "Best for growing companies",
      price: "₹59,999",
      period: "One Time",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Up to 15 Pages", "Premium UI Design", "Admin Dashboard", "Blog CMS", "Payment Gateway", "Advanced SEO", "Analytics", "WhatsApp & Chat", "90 Days Support"],
      excluded: ["ERP Integration", "CRM Integration"]
    },
    {
      id: "professional",
      title: "Professional",
      subtitle: "For businesses scaling online",
      price: "₹99,999",
      period: "One Time",
      button: "Start Project",
      color: "cyan",
      included: ["Unlimited Pages", "Custom Dashboard", "CRM Integration", "API Integration", "Performance Optimization", "Security Hardening", "Cloud Deployment", "6 Months Support"],
      excluded: ["Dedicated Team"]
    },
    {
      id: "enterprise",
      title: "Enterprise",
      subtitle: "Fully customized solution",
      price: "Custom Quote",
      period: "",
      button: "Contact Sales",
      color: "green",
      included: ["Unlimited Everything", "Dedicated Team", "ERP + CRM", "Custom APIs", "Cloud Infrastructure", "DevOps", "Priority Support", "1 Year Maintenance"],
      excluded: []
    }
  ],

  /* ======================================================
     CUSTOM SOFTWARE
  ====================================================== */
  "custom-software": [
    {
      id: "starter",
      title: "Internal Tools",
      subtitle: "Basic automation & tracking",
      price: "₹89,999",
      period: "Starting From",
      button: "Get Started",
      color: "blue",
      included: ["Simple Workflows", "Admin Panel", "Role Management", "Basic Reporting", "1 Month Support"],
      excluded: ["Third-party APIs", "Mobile App"]
    },
    {
      id: "business",
      title: "Business Logic",
      subtitle: "Core operational software",
      price: "₹1,99,999",
      period: "Starting From",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Complex Workflows", "3rd Party Integrations", "Advanced Reporting", "Custom CRM features", "Cloud Setup", "3 Months Support"],
      excluded: ["Enterprise Scaling", "Legacy Migration"]
    },
    {
      id: "professional",
      title: "Enterprise Suite",
      subtitle: "Full-scale custom platforms",
      price: "₹4,99,999",
      period: "Starting From",
      button: "Start Project",
      color: "cyan",
      included: ["Multi-tenant Architecture", "Legacy System Migration", "High Security Standards", "Analytics Dashboard", "Dedicated AM", "6 Months Support"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Dedicated Team",
      subtitle: "Ongoing software engineering",
      price: "Custom Quote",
      period: "Monthly",
      button: "Contact Sales",
      color: "green",
      included: ["Dedicated Developers", "Agile Sprints", "Full DevOps", "Architecture Strategy", "24/7 Monitoring", "SLA Support"],
      excluded: []
    }
  ],

  /* ======================================================
     APP DEVELOPMENT
  ====================================================== */
  "app-development": [
    {
      id: "starter",
      title: "Basic App",
      subtitle: "Simple Android application",
      price: "₹59,999",
      period: "One Time",
      button: "Get Started",
      color: "blue",
      included: ["Android App", "5 Screens", "Firebase", "Push Notifications", "Play Store Support", "30 Days Support"],
      excluded: ["iOS", "Admin Panel", "API Integration"]
    },
    {
      id: "business",
      title: "Business App",
      subtitle: "Android + Backend",
      price: "₹1,49,999",
      period: "One Time",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Android App", "Admin Panel", "Backend API", "Authentication", "Database", "Analytics", "90 Days Support"],
      excluded: ["iOS App"]
    },
    {
      id: "professional",
      title: "Professional",
      subtitle: "Cross Platform",
      price: "₹2,49,999",
      period: "One Time",
      button: "Start Project",
      color: "cyan",
      included: ["Android + iOS", "Admin Dashboard", "Cloud Backend", "Payment Gateway", "Push Notifications", "Analytics", "6 Months Support"],
      excluded: ["Dedicated Team"]
    },
    {
      id: "enterprise",
      title: "Enterprise",
      subtitle: "Large Scale Applications",
      price: "Custom Quote",
      period: "",
      button: "Contact Sales",
      color: "green",
      included: ["Unlimited Features", "Dedicated Team", "Architecture Planning", "Cloud Infrastructure", "Microservices", "Priority Support", "1 Year Maintenance"],
      excluded: []
    }
  ],

  /* ======================================================
     CLOUD MANAGEMENT
  ====================================================== */
  "cloud-management": [
    {
      id: "starter",
      title: "Startup Cloud",
      subtitle: "Basic hosting & setup",
      price: "₹15,000",
      period: "Per Month",
      button: "Get Started",
      color: "blue",
      included: ["VPS Setup", "SSL Installation", "Weekly Backups", "Basic Uptime Monitoring", "Email Support"],
      excluded: ["Auto-scaling", "CI/CD Pipelines", "24/7 Support"]
    },
    {
      id: "business",
      title: "Managed Cloud",
      subtitle: "For growing web apps",
      price: "₹35,000",
      period: "Per Month",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["AWS / GCP / Azure Setup", "Daily Backups", "Database Optimization", "Load Balancing Basics", "Security Patching", "Standard Support"],
      excluded: ["Complex Kubernetes", "Dedicated On-Call"]
    },
    {
      id: "professional",
      title: "Pro DevOps",
      subtitle: "High-traffic infrastructure",
      price: "₹75,000",
      period: "Per Month",
      button: "Start Project",
      color: "cyan",
      included: ["Auto-scaling Setup", "CI/CD Pipelines", "Docker & Kubernetes", "Advanced Monitoring", "Disaster Recovery", "Priority Support"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Enterprise Ops",
      subtitle: "Custom SLAs & Architecture",
      price: "Custom Quote",
      period: "Per Month",
      button: "Contact Sales",
      color: "green",
      included: ["Dedicated Cloud Architect", "Custom SLA", "24/7 On-Call Support", "Multi-Cloud Strategy", "Compliance Auditing (SOC2/HIPAA)"],
      excluded: []
    }
  ],

  /* ======================================================
     DATABASE DEVELOPMENT
  ====================================================== */
  "database-development": [
    {
      id: "starter",
      title: "Basic Setup",
      subtitle: "Small scale data needs",
      price: "₹49,999",
      period: "One Time",
      button: "Get Started",
      color: "blue",
      included: ["Relational Schema Design", "Basic Indexing", "Initial Setup", "Backup Scripts"],
      excluded: ["Data Migration", "Performance Tuning"]
    },
    {
      id: "business",
      title: "Optimized Data",
      subtitle: "For active applications",
      price: "₹99,999",
      period: "One Time",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Advanced Schema Design", "Query Optimization", "Data Migration (Up to 10GB)", "Automated Backups", "Stored Procedures"],
      excluded: ["Clustering", "Big Data Setup"]
    },
    {
      id: "professional",
      title: "Data Warehouse",
      subtitle: "Complex reporting & scale",
      price: "₹1,99,999",
      period: "One Time",
      button: "Start Project",
      color: "cyan",
      included: ["Data Warehousing", "Replication & Clustering", "ETL Pipelines", "High-Availability Setup", "Performance Auditing"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Enterprise DB",
      subtitle: "Mission-critical data",
      price: "Custom Quote",
      period: "",
      button: "Contact Sales",
      color: "green",
      included: ["Distributed Databases", "Real-time Analytics Setup", "NoSQL & SQL Hybrids", "24/7 DB Monitoring", "Security Auditing"],
      excluded: []
    }
  ],

  /* ======================================================
     SAAS DEVELOPMENT
  ====================================================== */
  "saas-development": [
    {
      id: "starter",
      title: "MVP Build",
      subtitle: "Validate your SaaS idea",
      price: "₹2,99,999",
      period: "Starting From",
      button: "Get Started",
      color: "blue",
      included: ["Single Tenant", "Basic Auth", "Stripe Integration", "Core Feature set", "Dashboard", "30 Days Support"],
      excluded: ["Multi-tenancy", "Complex Reporting"]
    },
    {
      id: "business",
      title: "Pro SaaS",
      subtitle: "Ready for public launch",
      price: "₹5,99,999",
      period: "Starting From",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Multi-tenant Architecture", "Role-based Access", "Subscription Plans", "API Access for Users", "Email Automations", "90 Days Support"],
      excluded: ["Custom AI Features"]
    },
    {
      id: "professional",
      title: "Scale SaaS",
      subtitle: "Handling large user bases",
      price: "₹9,99,999",
      period: "Starting From",
      button: "Start Project",
      color: "cyan",
      included: ["Microservices Ready", "Advanced Analytics", "White-labeling Options", "Webhook Integrations", "High Availability", "6 Months Support"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Enterprise SaaS",
      subtitle: "Industry-leading platforms",
      price: "Custom Quote",
      period: "",
      button: "Contact Sales",
      color: "green",
      included: ["Dedicated Engineering Team", "Custom Compliance (HIPAA, GDPR)", "Enterprise SSO", "Custom Architecture", "SLA Support"],
      excluded: []
    }
  ],

  /* ======================================================
     CONTENT MANAGEMENT
  ====================================================== */
  "content-management": [
    {
      id: "starter",
      title: "Basic CMS",
      subtitle: "Simple content control",
      price: "₹49,999",
      period: "One Time",
      button: "Get Started",
      color: "blue",
      included: ["WordPress / Strapi Setup", "Standard Theme/Template", "Basic SEO Plugin", "User Roles", "Contact Forms"],
      excluded: ["Custom Plugin Dev", "Data Migration"]
    },
    {
      id: "business",
      title: "Custom CMS",
      subtitle: "Tailored to your workflow",
      price: "₹99,999",
      period: "One Time",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Headless CMS Setup", "Custom Post Types", "API Integration", "Content Migration", "Custom Dashboard", "Security Setup"],
      excluded: ["Enterprise Workflows"]
    },
    {
      id: "professional",
      title: "Enterprise ECM",
      subtitle: "Document & File Mastery",
      price: "₹2,49,999",
      period: "One Time",
      button: "Start Project",
      color: "cyan",
      included: ["Document Versioning", "Approval Workflows", "Secure Repositories", "Advanced Search (Elastic)", "Third-party Integrations"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Global CMS",
      subtitle: "Multi-region scale",
      price: "Custom Quote",
      period: "",
      button: "Contact Sales",
      color: "green",
      included: ["Multi-language / Localization", "Global CDN Setup", "Custom Middleware", "Compliance Auditing", "Dedicated Support"],
      excluded: []
    }
  ],

  /* ======================================================
     AI SOLUTIONS
  ====================================================== */
  "ai-solutions": [
    {
      id: "starter",
      title: "Smart Chatbot",
      subtitle: "Customer support automation",
      price: "₹79,999",
      period: "One Time",
      button: "Get Started",
      color: "blue",
      included: ["Custom AI Chatbot", "Website Integration", "Standard Prompt Tuning", "Basic Lead Capture", "1 Month Support"],
      excluded: ["Complex API Actions", "Voice AI"]
    },
    {
      id: "business",
      title: "Workflow AI",
      subtitle: "Automate internal tasks",
      price: "₹1,49,999",
      period: "One Time",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Custom AI Agents", "Document Processing (OCR)", "CRM Integrations", "Advanced Prompt Engineering", "Analytics Dashboard"],
      excluded: ["On-premise LLMs"]
    },
    {
      id: "professional",
      title: "AI Integration",
      subtitle: "Embed AI into your product",
      price: "₹3,49,999",
      period: "One Time",
      button: "Start Project",
      color: "cyan",
      included: ["LLM API Integration", "RAG Setup (Your Data)", "Contextual Memory", "High Security Architecture", "Performance Optimization"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Custom AI",
      subtitle: "Full-scale intelligence",
      price: "Custom Quote",
      period: "",
      button: "Contact Sales",
      color: "green",
      included: ["Fine-tuned Models", "On-premise Deployment", "Enterprise Security", "Data Pipeline Automation", "Dedicated ML Engineers"],
      excluded: []
    }
  ],

  /* ======================================================
     UI / UX DESIGN
  ====================================================== */
  "ui-ux-design": [
    {
      id: "starter",
      title: "Starter",
      subtitle: "Landing Pages",
      price: "₹14,999",
      period: "Per Project",
      button: "Get Started",
      color: "blue",
      included: ["Landing Page UI", "Responsive Design", "Figma File", "Prototype"],
      excluded: ["Multiple Screens", "Design System"]
    },
    {
      id: "business",
      title: "Business",
      subtitle: "Website UI",
      price: "₹34,999",
      period: "Per Project",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["10+ Screens", "Responsive UI", "Design System", "Prototype", "Developer Handoff"],
      excluded: ["User Research"]
    },
    {
      id: "professional",
      title: "Professional",
      subtitle: "Complete Product Design",
      price: "₹74,999",
      period: "Per Project",
      button: "Start Project",
      color: "cyan",
      included: ["Unlimited Screens", "UX Research", "Wireframes", "Interactive Prototype", "Design System"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Enterprise",
      subtitle: "Complete Product Experience",
      price: "Custom Quote",
      period: "",
      button: "Contact Sales",
      color: "green",
      included: ["Dedicated Designer", "Research", "Testing", "Brand Design", "Support"],
      excluded: []
    }
  ],

  /* ======================================================
     ERP SOLUTIONS
  ====================================================== */
  "erp-solutions": [
    {
      id: "starter",
      title: "Small Business",
      subtitle: "Basic ERP",
      price: "₹2,49,999",
      period: "Starting From",
      button: "Get Started",
      color: "blue",
      included: ["Inventory", "Billing", "Reports", "Dashboard", "User Management"],
      excluded: ["HRMS", "CRM", "Payroll"]
    },
    {
      id: "business",
      title: "Professional ERP",
      subtitle: "Most Popular",
      price: "₹4,99,999",
      period: "Starting From",
      button: "Start Project",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Inventory", "CRM", "HRMS", "Payroll", "Accounting", "Reports"],
      excluded: ["Custom Modules API"]
    },
    {
      id: "professional",
      title: "Enterprise ERP",
      subtitle: "Large Organizations",
      price: "₹9,99,999",
      period: "Starting From",
      button: "Contact Sales",
      color: "cyan",
      included: ["Custom Modules", "API", "Cloud", "Analytics", "Workflow Automation", "Training"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Custom ERP",
      subtitle: "Fully Customized",
      price: "Custom Quote",
      period: "",
      button: "Request Proposal",
      color: "green",
      included: ["Everything Included", "Dedicated Team", "Cloud Infrastructure", "Priority Support", "1 Year AMC"],
      excluded: []
    }
  ],

  /* ======================================================
     DIGITAL TRANSFORMATION
  ====================================================== */
  "digital-transformation": [
    {
      id: "starter",
      title: "Audit & Strategy",
      subtitle: "Technology roadmap",
      price: "₹99,999",
      period: "One Time",
      button: "Get Started",
      color: "blue",
      included: ["Current Systems Audit", "Workflow Analysis", "Technology Roadmap", "Budget Estimation", "Security Review"],
      excluded: ["Implementation", "Custom Dev"]
    },
    {
      id: "business",
      title: "Process Digitization",
      subtitle: "Modernize core workflows",
      price: "₹2,99,999",
      period: "Starting From",
      button: "Get Started",
      badge: "MOST POPULAR",
      popular: true,
      color: "orange",
      included: ["Paper to Digital Migration", "Basic Cloud Setup", "Workflow Automation Setup", "Team Training", "3 Months Consulting"],
      excluded: ["Legacy System Rewrite"]
    },
    {
      id: "professional",
      title: "Full Overhaul",
      subtitle: "Complete tech modernization",
      price: "₹6,99,999",
      period: "Starting From",
      button: "Start Project",
      color: "cyan",
      included: ["Legacy System Migration", "Cloud Architecture Setup", "Custom Inter-tool APIs", "Change Management", "6 Months Support"],
      excluded: []
    },
    {
      id: "enterprise",
      title: "Enterprise Partner",
      subtitle: "Long-term tech evolution",
      price: "Custom Quote",
      period: "Retainer",
      button: "Contact Sales",
      color: "green",
      included: ["Virtual CTO Services", "Dedicated Engineering Pod", "Continuous Modernization", "Board-level Strategy", "24/7 Priority Support"],
      excluded: []
    }
  ]
};