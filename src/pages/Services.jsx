import React from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/services.css";

import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Database,
  MonitorSmartphone,
  Cloud,
  ShieldCheck,
  Palette,
  Award,
  Rocket,
  Users,
  Shield,
  Monitor,
  Server,
  GitBranch,
  LayoutDashboard,
  BrainCircuit,
  Lock,
  KeyRound,
  Gauge,
  BadgeCheck,
  Activity,
  FileText,
  Building,
  GraduationCap,
  ShoppingBag,
  Stethoscope
} from "lucide-react";

import {
  services,
  processSteps,
  pricingPlans,
} from "../data/siteData";

import CTA from "../components/CTA";
import PricingSection from "../components/PricingSection";

/* =========================================================
   SERVICE DETAIL PAGE
========================================================= */

export function ServiceDetail() {
  const { slug } = useParams();

  // Added safety fallbacks to prevent crashes if the service isn't found
  const service =
    services?.find((item) => item.slug === slug) ||
    services?.[0] ||
    {};

  // Default icon if service icon is missing
  const Icon = service?.icon || Globe;

  // Billing Toggle
  const [billingType, setBillingType] = React.useState("one-time");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="service-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-pill">DROPXCORP SERVICES</span>
            <h1>{service.title || "Service Details"}</h1>
            <p>{service.details || "Learn more about our professional services."}</p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                View Portfolio
              </Link>
            </div>

            <div className="hero-points">
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                Modern UI/UX
              </div>
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                Secure Architecture
              </div>
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                Scalable Solution
              </div>
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                Lifetime Guidance
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-card">
              <Icon size={80} aria-hidden="true" />
              <h3>{service.title || "Service"}</h3>
              <p>
                Enterprise-grade digital solutions engineered for startups and
                growing businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="page-section overview-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                OUR DEVELOPMENT PROCESS
              </div>
              <h2 className="enhanced-section-title">
                From Vision to <span className="text-primary-gradient">Digital Success.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  We transform your ideas into secure, scalable, and high-performance digital solutions through a proven development process focused on innovation, quality, and long-term business growth.
                </p>
                
              </div>
            </div>
          </div>

          <div className="overview-grid">
            <div className="overview-card">
              <CheckCircle2 size={22} />
              <h3>Requirement Analysis</h3>
              <p>Understanding your business goals and planning the right solution.</p>
            </div>

            <div className="overview-card">
              <CheckCircle2 size={22} />
              <h3>UI / UX Design</h3>
              <p>Creating intuitive, engaging and user-friendly experiences.</p>
            </div>

            <div className="overview-card">
              <CheckCircle2 size={22} />
              <h3>Development</h3>
              <p>Building secure, scalable front-end and back-end applications.</p>
            </div>

            <div className="overview-card">
              <CheckCircle2 size={22} />
              <h3>Quality Testing</h3>
              <p>Performance, security and functionality testing before release.</p>
            </div>

            <div className="overview-card">
              <CheckCircle2 size={22} />
              <h3>Deployment</h3>
              <p>Cloud deployment, optimization and production configuration.</p>
            </div>

            <div className="overview-card">
              <CheckCircle2 size={22} />
              <h3>Support</h3>
              <p>Continuous monitoring, maintenance and future enhancements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE FEATURES ================= */}
      <section className="page-section feature-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                OUR EXPERTISE
              </div>
              <h2 className="enhanced-section-title">
                Why Businesses Choose <span className="text-primary-gradient">DropXcorp.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  Delivering secure, scalable and future-ready digital solutions that empower businesses to innovate, automate and grow.
                </p>
              </div>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Globe size={30} />
              </div>
              <h3>Website Development</h3>
              <p>
                High-performance corporate websites, business portals and custom web
                applications designed for growth.
              </p>
              <span className="feature-link">Learn More →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Database size={30} />
              </div>
              <h3>ERP & CRM Solutions</h3>
              <p>
                Streamline operations with intelligent ERP, CRM and business
                management software.
              </p>
              <span className="feature-link">Learn More →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Smartphone size={30} />
              </div>
              <h3>Mobile Applications</h3>
              <p>
                Native and cross-platform Android & iOS applications built for
                exceptional user experience.
              </p>
              <span className="feature-link">Learn More →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MonitorSmartphone size={30} />
              </div>
              <h3>Admin Dashboards</h3>
              <p>
                Powerful dashboards with analytics, reporting and workflow automation
                for your business.
              </p>
              <span className="feature-link">Learn More →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Cloud size={30} />
              </div>
              <h3>Cloud & DevOps</h3>
              <p>
                Secure cloud deployment, CI/CD pipelines and scalable infrastructure
                for modern applications.
              </p>
              <span className="feature-link">Learn More →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={30} />
              </div>
              <h3>Security & Support</h3>
              <p>
                Enterprise-grade protection, continuous monitoring and dedicated
                technical support.
              </p>
              <span className="feature-link">Learn More →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="pricing-section">
        <div className="container">
          {billingType === "one-time" && (
            <PricingSection
              plans={pricingPlans[service.slug] || []}
              title="One-Time Development"
              subtitle="Pay once. Own forever."
            />
          )}

          {billingType === "monthly" && (
            <PricingSection
              title="Maintenance Plans"
              subtitle="Perfect for cloud applications."
              plans={[
                {
                  title: "Basic",
                  subtitle: "Maintenance",
                  price: "₹4,999",
                  period: "/month",
                  color: "blue",
                  included: [
                    "Hosting Support",
                    "Bug Fixes",
                    "Security Updates",
                    "Monthly Backup",
                  ],
                  excluded: [],
                  button: "Subscribe",
                },
                {
                  title: "Business",
                  subtitle: "Recommended",
                  price: "₹9,999",
                  period: "/month",
                  popular: true,
                  color: "orange",
                  included: [
                    "Priority Support",
                    "Cloud Monitoring",
                    "Performance Optimization",
                    "Monthly Reports",
                    "Unlimited Bug Fixes",
                  ],
                  excluded: [],
                  button: "Subscribe",
                },
                {
                  title: "Enterprise",
                  subtitle: "Dedicated Team",
                  price: "Custom",
                  period: "",
                  color: "green",
                  included: [
                    "Dedicated Developer",
                    "24×7 Support",
                    "Cloud Management",
                    "Continuous Deployment",
                  ],
                  excluded: [],
                  button: "Contact Us",
                },
              ]}
            />
          )}

          {billingType === "enterprise" && (
            <div className="enterprise-card">
              <span>ENTERPRISE SOLUTIONS</span>
              <h2>
                Need Something
                <br />
                Completely Custom?
              </h2>
              <p>
                We design enterprise-grade ERP, AI solutions, cloud infrastructure,
                automation, CRM, hospital ERP, school ERP, inventory systems, HRMS
                and more.
              </p>
              <ul>
                <li>✔ Dedicated Development Team</li>
                <li>✔ NDA Available</li>
                <li>✔ Agile Delivery</li>
                <li>✔ Enterprise Security</li>
                <li>✔ Long-Term Support</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Request Proposal
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="why-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                WHY CHOOSE DROPXCORP
              </div>
              <h2 className="enhanced-section-title">
                Building Reliable Digital Solutions That Help Businesses <span className="text-primary-gradient">Grow.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  We combine innovation, modern technologies and business expertise
                  to build scalable software that delivers measurable business growth.
                </p>
              </div>
            </div>
          </div>

          <div className="why-features">
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>Enterprise Security</h3>
              <p>Built using secure coding standards.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Scalable Architecture</h3>
              <p>Designed to grow with your business.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">💻</div>
              <h3>Modern Technologies</h3>
              <p>React, Next.js, Flutter & Cloud.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">👨‍💼</div>
              <h3>Dedicated Team</h3>
              <p>Experienced developers & designers.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">📈</div>
              <h3>Transparent Communication</h3>
              <p>Regular updates throughout development.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>Long-Term Support</h3>
              <p>Maintenance & future enhancements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUSTOM QUOTE ================= */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-card">
            <div className="quote-content">
              <span className="quote-tag">CUSTOM SOFTWARE SOLUTIONS</span>
              <h2>
                Let's Build Software
                <br />
                That Grows Your Business
              </h2>
              <p>
                Whether you're a startup, enterprise, or growing business, DropXcorp
                designs secure, scalable and high-performance software tailored
                specifically to your business needs.
              </p>
              <div className="quote-features">
                <div className="quote-feature">✔ Free Consultation</div>
                <div className="quote-feature">✔ Dedicated Project Manager</div>
                <div className="quote-feature">✔ Transparent Pricing</div>
                <div className="quote-feature">✔ Lifetime Technical Guidance</div>
              </div>
              <div className="quote-actions">
                <Link to="/contact" className="btn btn-primary">
                  Request Free Quote
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="quote-side">
              <div className="quote-stat">
                <h3>100+</h3>
                <span>Projects Delivered</span>
              </div>
              <div className="quote-stat">
                <h3>98%</h3>
                <span>Client Satisfaction</span>
              </div>
              <div className="quote-stat">
                <h3>24×7</h3>
                <span>Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY STACK ================= */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                TECHNOLOGY ECOSYSTEM
              </div>
              <h2 className="enhanced-section-title">
                Built with Industry-Leading <span className="text-primary-gradient">Technologies.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  We leverage trusted frameworks, cloud platforms and modern development tools to build secure, scalable and high-performance software solutions for startups, SMEs and enterprises.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-top">
                <div className="tech-icon">
                  <Monitor size={28} />
                </div>
                <span className="tech-badge">Frontend</span>
              </div>
              <h3>Frontend Engineering</h3>
              <p>
                We create responsive, visually engaging and high-performance user
                interfaces that provide seamless digital experiences across every
                device.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>Vue</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="tech-info">✔ Fast Loading • Responsive • SEO Friendly</div>
            </div>

            <div className="tech-card">
              <div className="tech-top">
                <div className="tech-icon">
                  <Server size={28} />
                </div>
                <span className="tech-badge">Backend</span>
              </div>
              <h3>Backend Engineering</h3>
              <p>
                Secure APIs, authentication systems and scalable business logic that
                ensure reliability, performance and enterprise-grade security.
              </p>
              <div className="tech-tags">
                <span>Node.js</span>
                <span>Express</span>
                <span>Java</span>
                <span>Python</span>
                <span>.NET</span>
              </div>
              <div className="tech-info">✔ Secure APIs • High Performance • Scalable</div>
            </div>

            <div className="tech-card">
              <div className="tech-top">
                <div className="tech-icon">
                  <Database size={28} />
                </div>
                <span className="tech-badge">Database</span>
              </div>
              <h3>Database Solutions</h3>
              <p>
                Efficient database architectures designed for speed, security and
                reliable data management across enterprise applications.
              </p>
              <div className="tech-tags">
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>Redis</span>
              </div>
              <div className="tech-info">✔ Secure Storage • Optimized Queries • Backup Ready</div>
            </div>

            <div className="tech-card">
              <div className="tech-top">
                <div className="tech-icon">
                  <Cloud size={28} />
                </div>
                <span className="tech-badge">Cloud</span>
              </div>
              <h3>Cloud Infrastructure</h3>
              <p>
                Deploy scalable applications with automated infrastructure,
                monitoring, high availability and enterprise-grade cloud security.
              </p>
              <div className="tech-tags">
                <span>AWS</span>
                <span>Azure</span>
                <span>Google Cloud</span>
                <span>Docker</span>
              </div>
              <div className="tech-info">✔ Cloud Native • Secure • Highly Available</div>
            </div>

            <div className="tech-card">
              <div className="tech-top">
                <div className="tech-icon">
                  <Smartphone size={28} />
                </div>
                <span className="tech-badge">Mobile</span>
              </div>
              <h3>Mobile Development</h3>
              <p>
                Build feature-rich Android and iOS applications with modern UI,
                smooth performance and native-like user experience.
              </p>
              <div className="tech-tags">
                <span>Flutter</span>
                <span>React Native</span>
                <span>Android</span>
                <span>iOS</span>
              </div>
              <div className="tech-info">✔ Cross Platform • High Performance • Native Experience</div>
            </div>

            <div className="tech-card">
              <div className="tech-top">
                <div className="tech-icon">
                  <GitBranch size={28} />
                </div>
                <span className="tech-badge">DevOps</span>
              </div>
              <h3>DevOps & Automation</h3>
              <p>
                Modern development workflows with CI/CD pipelines, automation and
                version control that accelerate software delivery.
              </p>
              <div className="tech-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>CI/CD</span>
                <span>Linux</span>
              </div>
              <div className="tech-info">✔ Continuous Delivery • Automation • Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <section className="process-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                OUR DEVELOPMENT PROCESS
              </div>
              <h2 className="enhanced-section-title">
                How We Transform Your Ideas into <span className="text-primary-gradient">Reality.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  Our proven development methodology ensures transparency, quality, timely delivery and long-term business success.
                </p>
              </div>
            </div>
          </div>

          <div className="horizontal-timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-step" key={step.title}>
                <div className="timeline-circle">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {index !== processSteps.length - 1 && <div className="timeline-line"></div>}
                <div className="timeline-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE DROPXCORP ================= */}
      <section className="why-section">
        <div className="container">
          <div className="why-banner">
            <div className="why-left">
              <span className="why-tag">★ WHY CHOOSE DROPXCORP</span>
              <h2>
                Building Future-Ready Software
                <span> for Modern Businesses.</span>
              </h2>
              <p>
                We design and develop secure, scalable and innovative digital
                solutions that help businesses automate operations, improve customer
                experience and accelerate long-term growth.
              </p>
              <div className="feature-pills">
                <span>✓ Enterprise Security</span>
                <span>✓ Scalable Architecture</span>
                <span>✓ Cloud Ready</span>
                <span>✓ AI Powered</span>
                <span>✓ Fast Delivery</span>
                <span>✓ 24×7 Support</span>
              </div>
            </div>

            <div className="why-right">
              <div className="stat-card">
                <h3>50+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-card">
                <h3>20+</h3>
                <p>Clients</p>
              </div>
              <div className="stat-card">
                <h3>99%</h3>
                <p>Satisfaction</p>
              </div>
              <div className="stat-card">
                <h3>24×7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="core-services-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                OUR EXPERTISE
              </div>
              <h2 className="enhanced-section-title">
                Complete Digital <span className="text-primary-gradient">Solutions.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  Building scalable software, intelligent platforms and digital experiences for modern businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="services-marquee">
            <div className="services-track">
              {[
                { icon: <Globe size={34} />, title: "Website Development", desc: "Modern business websites" },
                { icon: <LayoutDashboard size={34} />, title: "ERP Solutions", desc: "Business automation" },
                { icon: <Database size={34} />, title: "CRM Software", desc: "Customer management" },
                { icon: <Smartphone size={34} />, title: "Mobile Apps", desc: "Android & iOS" },
                { icon: <Cloud size={34} />, title: "Cloud Solutions", desc: "AWS • Azure • GCP" },
                { icon: <BrainCircuit size={34} />, title: "AI Integration", desc: "AI-powered automation" },
                { icon: <Palette size={34} />, title: "UI / UX Design", desc: "Premium interfaces" },
                { icon: <ShieldCheck size={34} />, title: "Cyber Security", desc: "Enterprise security" },
                // Duplicate for seamless scrolling
                { icon: <Globe size={34} />, title: "Website Development", desc: "Modern business websites" },
                { icon: <LayoutDashboard size={34} />, title: "ERP Solutions", desc: "Business automation" },
                { icon: <Database size={34} />, title: "CRM Software", desc: "Customer management" },
                { icon: <Smartphone size={34} />, title: "Mobile Apps", desc: "Android & iOS" },
                { icon: <Cloud size={34} />, title: "Cloud Solutions", desc: "AWS • Azure • GCP" },
                { icon: <BrainCircuit size={34} />, title: "AI Integration", desc: "AI-powered automation" },
                { icon: <Palette size={34} />, title: "UI / UX Design", desc: "Premium interfaces" },
                { icon: <ShieldCheck size={34} />, title: "Cyber Security", desc: "Enterprise security" },
              ].map((service, index) => (
                <div className="service-slide" key={index}>
                  <div className={`service-icon icon-${index % 8}`}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECURITY & QUALITY ================= */}
      <section className="security-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                SECURITY & QUALITY
              </div>
              <h2 className="enhanced-section-title">
                Enterprise Security <span className="text-primary-gradient">Standards.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  Every solution is engineered with security, reliability, performance and maintainability at its core.
                </p>
              </div>
            </div>
          </div>

          <div className="security-grid">
            <div className="security-card">
              <div className="security-header">
                <div className="security-icon">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3>Secure Development</h3>
                  <p>Security First</p>
                </div>
              </div>
              <ul>
                <li><Lock size={16} /> OWASP Secure Coding</li>
                <li><KeyRound size={16} /> SSL & Authentication</li>
                <li><ShieldCheck size={16} /> Role Based Access</li>
              </ul>
            </div>

            <div className="security-card">
              <div className="security-header">
                <div className="security-icon">
                  <Database size={28} />
                </div>
                <div>
                  <h3>Infrastructure</h3>
                  <p>Reliable Systems</p>
                </div>
              </div>
              <ul>
                <li><Database size={16} /> Automated Backups</li>
                <li><Activity size={16} /> 24×7 Monitoring</li>
                <li><Gauge size={16} /> Performance Optimization</li>
              </ul>
            </div>

            <div className="security-card">
              <div className="security-header">
                <div className="security-icon">
                  <BadgeCheck size={28} />
                </div>
                <div>
                  <h3>Quality Assurance</h3>
                  <p>Tested Before Delivery</p>
                </div>
              </div>
              <ul>
                <li><BadgeCheck size={16} /> Functional Testing</li>
                <li><BadgeCheck size={16} /> Security Testing</li>
                <li><BadgeCheck size={16} /> Integration Testing</li>
              </ul>
            </div>

            <div className="security-card">
              <div className="security-header">
                <div className="security-icon">
                  <FileText size={28} />
                </div>
                <div>
                  <h3>Project Delivery</h3>
                  <p>Complete Documentation</p>
                </div>
              </div>
              <ul>
                <li><FileText size={16} /> Deployment Guide</li>
                <li><FileText size={16} /> Technical Documentation</li>
                <li><FileText size={16} /> Knowledge Transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="enhanced-section-title">
                Frequently Asked <span className="text-primary-gradient">Questions.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  Find answers to the most common questions about our SaaS development, web development, mobile applications, ERP, CRM and custom software services.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>What is SaaS application development?</summary>
              <p>
                SaaS (Software as a Service) application development is the process of building cloud-based software that users can access through a web browser without installing it locally. DropXcorp develops secure, scalable and subscription-ready SaaS platforms for businesses of all sizes.
              </p>
            </details>
            <details className="faq-item">
              <summary>Why should I choose DropXcorp for SaaS development?</summary>
              <p>
                We specialize in custom SaaS platforms, ERP systems, CRM software, business automation, cloud applications, mobile apps and enterprise web solutions using modern technologies such as React, Next.js, Node.js, Flutter, PostgreSQL and AWS.
              </p>
            </details>
            <details className="faq-item">
              <summary>How long does a custom software development project take?</summary>
              <p>
                Development timelines depend on project complexity. Business websites usually take 2–4 weeks, while SaaS products, ERP systems and enterprise applications generally require 2–6 months with agile milestone-based delivery.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do you develop custom ERP and CRM software?</summary>
              <p>
                Yes. We build customized ERP, CRM, Hospital ERP, School ERP, HRMS, Inventory Management, POS Systems, Salon ERP, Manufacturing ERP and other enterprise business solutions tailored to your workflow.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do you build responsive business websites?</summary>
              <p>
                Yes. We design and develop responsive corporate websites, portfolio websites, eCommerce websites and custom web applications optimized for SEO, speed and mobile devices.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can you modernize an existing website or software?</summary>
              <p>
                Absolutely. We redesign outdated websites and legacy applications by improving user experience, performance, security, scalability and cloud readiness without disrupting your business.
              </p>
            </details>
            <details className="faq-item">
              <summary>Which technologies do you use for software development?</summary>
              <p>
                Our team works with React, Next.js, Node.js, TypeScript, Flutter, React Native, Express.js, MongoDB, PostgreSQL, MySQL, Docker, AWS, Azure, Firebase and modern DevOps tools.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do you provide API integration services?</summary>
              <p>
                Yes. We integrate payment gateways, WhatsApp APIs, SMS services, email systems, ERP software, CRM platforms, cloud storage, third-party APIs and custom enterprise integrations.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do you provide cloud hosting and deployment?</summary>
              <p>
                Yes. We deploy applications on AWS, Microsoft Azure, DigitalOcean and other cloud platforms with SSL, automated backups, CI/CD pipelines, monitoring and security best practices.
              </p>
            </details>
            <details className="faq-item">
              <summary>Will I receive the complete source code?</summary>
              <p>
                Yes. Once the project is completed and payment obligations are fulfilled, you receive complete ownership of the source code, documentation and deployment files.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do you provide maintenance and support after project delivery?</summary>
              <p>
                Yes. We offer ongoing maintenance, security updates, cloud monitoring, bug fixes, performance optimization, feature enhancements and Annual Maintenance Contracts (AMC).
              </p>
            </details>
            <details className="faq-item">
              <summary>How do I start a software development project with DropXcorp?</summary>
              <p>
                Simply contact our team with your business requirements. We will discuss your goals, prepare a detailed proposal, estimate the timeline and begin development using an agile project management process.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}


/* =========================================================
   SERVICES INDEX PAGE
========================================================= */

export default function Services() {

  const serviceOfferings = [
    {
      title: "Web Development",
      description: "Modern, responsive and SEO-friendly websites built with the latest technologies.",
      icon: Globe,
      link: "/services/web-development",
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform Android & iOS applications for startups and enterprises.",
      icon: Smartphone,
      link: "/services/mobile-development",
    },
    {
      title: "UI / UX Design",
      description: "Beautiful user interfaces with exceptional user experience and accessibility.",
      icon: Palette,
      link: "/services/ui-ux-design",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud deployment, migration and infrastructure management.",
      icon: Cloud,
      link: "/services/cloud-solutions",
    },
    {
      title: "Cyber Security",
      description: "Enterprise-grade security, vulnerability assessment and secure architecture.",
      icon: Shield,
      link: "/services/cyber-security",
    },
    {
      title: "ERP Solutions",
      description: "Custom ERP systems for hospitals, schools, salons, retail and enterprises.",
      icon: Database,
      link: "/services/erp-solutions",
    },
  ];

  const industries = [
    { name: "Healthcare", icon: Stethoscope },
    { name: "Education", icon: GraduationCap },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Corporate", icon: Building },
  ];

  return (
    <>
      {/* ========================= HERO ========================= */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content-wrapper text-center">
            <span className="hero-badge">OUR PROFESSIONAL SERVICES</span>
            <h1>
              Transforming Ideas Into <br /> Powerful Digital Solutions
            </h1>
            <p className="hero-subtitle">
              DropXcorp helps startups, SMEs and enterprises build innovative
              software solutions, scalable applications, modern websites and
              enterprise platforms that drive measurable business growth.
            </p>
            <div className="hero-buttons justify-center">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project <ArrowRight size={18} aria-hidden="true" style={{ marginLeft: 8 }} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= STATISTICS BANNER ========================= */}
      <section className="stats-section bg-light-blue">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h2>100+</h2>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-card">
              <h2>50+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h2>15+</h2>
              <p>Industries Served</p>
            </div>
            <div className="stat-card">
              <h2>24/7</h2>
              <p>Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= SERVICES GRID ========================= */}
      <section className="services-grid-section page-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                WHAT WE DO
              </div>
              <h2 className="enhanced-section-title">
                Complete Digital <br /> Technology <span className="text-primary-gradient">Services.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  From concept to deployment, our experts deliver scalable software tailored to your business.
                </p>
              </div>
            </div>
          </div>

          <div className="services-grid">
            {serviceOfferings.map((service) => {
              const Icon = service.icon;
              return (
                <div className="service-card hover-lift" key={service.title}>
                  <div className="service-icon mb-4">
                    <Icon size={38} aria-hidden="true" color="var(--primary-color, #2563eb)" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="service-link mt-4 flex items-center">
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" style={{ marginLeft: 6 }} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= INDUSTRIES WE SERVE ========================= */}
      <section className="industries-section page-section bg-gray-50">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                INDUSTRIES
              </div>
              <h2 className="enhanced-section-title">
                Tailored Solutions for Every <span className="text-primary-gradient">Sector.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  We build specialized software that addresses the unique challenges of your industry.
                </p>
              </div>
            </div>
          </div>
          
          <div className="industries-grid">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div className="industry-card" key={idx}>
                  <Icon size={32} />
                  <h4>{ind.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= PROCESS ========================= */}
      <section className="process-overview page-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                OUR PROCESS
              </div>
              <h2 className="enhanced-section-title">
                How We Build <br /> Successful <span className="text-primary-gradient">Products.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  A transparent and collaborative workflow from idea to launch.
                </p>
              </div>
            </div>
          </div>

          <div className="process-grid">
            {processSteps?.map((step, index) => (
              <div key={step?.title ?? index} className="process-card">
                <div className="step-header">
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHY CHOOSE US ========================= */}
      <section className="why-choose-section page-section">
        <div className="container">
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                WHY DROPXCORP
              </div>
              <h2 className="enhanced-section-title">
                Why Businesses <br /> Choose <span className="text-primary-gradient">DropXcorp.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  We combine innovation, technical expertise and business understanding to build software that delivers measurable results.
                </p>
              </div>
            </div>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <Award size={42} aria-hidden="true" />
              <h3>Experienced Team</h3>
              <p>
                Skilled developers, designers and cloud engineers delivering
                high-quality digital products.
              </p>
            </div>
            <div className="why-card">
              <Rocket size={42} aria-hidden="true" />
              <h3>Fast Delivery</h3>
              <p>
                Agile development process with rapid iterations and on-time
                project delivery.
              </p>
            </div>
            <div className="why-card">
              <Shield size={42} aria-hidden="true" />
              <h3>Secure Solutions</h3>
              <p>
                Enterprise-grade security, encrypted communication and industry
                best practices.
              </p>
            </div>
            <div className="why-card">
              <Users size={42} aria-hidden="true" />
              <h3>Dedicated Support</h3>
              <p>
                Long-term maintenance, updates and technical assistance even
                after project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}