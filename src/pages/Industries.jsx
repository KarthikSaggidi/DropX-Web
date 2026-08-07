import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./industries.css";

import {
  ArrowRight,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Database,
  BarChart3,
  Sparkles,
  Cloud,
  Users,
  Cpu,
  Layers,
  Lock,
  Zap,
  LineChart,
  Search,
  Bell,
  Menu
} from "lucide-react";

import { industries } from "../data/siteData";
import CTA from "../components/CTA";

export default function IndustryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Safety check to ensure industries array exists
  const safeIndustries = industries || [];
  const industry = safeIndustries.find((item) => item.slug === slug);

  // Fallback if the URL doesn't match an industry
  if (!industry) {
    return (
      <section className="page-section" style={{ padding: "150px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Industry Not Found</h2>
          <p style={{ marginBottom: "30px", color: "#475569" }}>We couldn't find the industry solution you're looking for.</p>
          <button onClick={() => navigate(-1)} className="ind-btn ind-btn-primary">
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="industry-detail-wrapper">
      
      {/* ================= ULTRA-PREMIUM HERO SECTION ================= */}
      <section className="ind-hero-section relative">
        <div className="ind-hero-bg-glow"></div>
        <div className="ind-hero-bg-grid"></div>
        
        <div className="container relative z-10">
          
          <div className="ind-hero-grid single-hero-animation">
            
            {/* Left Content */}
            <div className="ind-hero-content">
              <div className="ind-badge">
                <Sparkles size={16} className="ind-badge-icon" />
                <span>{industry.title} Solutions</span>
              </div>
              
              <h1 className="ind-hero-title">
                Next-Generation Software for <br />
                <span className="text-primary-gradient">{industry.title}</span>
              </h1>
              
              <p className="ind-hero-subtitle">
                {industry.text} We build enterprise-grade, secure, and scalable digital solutions tailored specifically to overcome the unique challenges of your sector.
              </p>

              <div className="ind-hero-actions">
                <Link to="/contact" className="ind-btn ind-btn-primary ind-btn-lg">
                  Discuss Your Project <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="ind-btn ind-btn-outline ind-btn-lg">
                  View Case Studies
                </Link>
              </div>

              <div className="ind-hero-features">
                <span><CheckCircle2 size={18} className="text-primary" /> Custom Architecture</span>
                <span><CheckCircle2 size={18} className="text-primary" /> Cloud Deployment</span>
                <span><CheckCircle2 size={18} className="text-primary" /> 24/7 Support</span>
              </div>
            </div>

            {/* Right Content: Static Composite UI */}
            <div className="ind-hero-visual">
              <div className="hero-composite-wrapper">
                <div className="composite-main-card glass-panel">
                  <div className="composite-header">
                    <div className="mac-dots"><span></span><span></span><span></span></div>
                    <div className="composite-title">Enterprise Dashboard</div>
                    <Menu size={16} className="text-muted" />
                  </div>
                  <div className="composite-body">
                    <div className="comp-chart-area">
                      <div className="comp-chart-bar h-60"></div>
                      <div className="comp-chart-bar h-80"></div>
                      <div className="comp-chart-bar h-40"></div>
                      <div className="comp-chart-bar h-100 bg-primary-grad"></div>
                      <div className="comp-chart-bar h-70"></div>
                      <div className="comp-chart-bar h-90"></div>
                    </div>
                    <div className="comp-stats-row">
                      <div className="comp-stat-box">
                        <span>Active Users</span>
                        <strong>14,205</strong>
                      </div>
                      <div className="comp-stat-box">
                        <span>System Health</span>
                        <strong className="text-success">Optimal</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= QUICK HIGHLIGHTS ================= */}
      <section className="ind-stats-bar">
        <div className="container">
          <div className="ind-stats-grid">
            <div className="ind-stat-item hover-lift">
              <Cpu size={32} className="text-primary" />
              <div>
                <h4>AI-Powered</h4>
                <p>Intelligent Automation</p>
              </div>
            </div>
            <div className="ind-stat-item hover-lift">
              <Cloud size={32} className="text-primary" />
              <div>
                <h4>Cloud Native</h4>
                <p>Scalable Infrastructure</p>
              </div>
            </div>
            <div className="ind-stat-item hover-lift">
              <Lock size={32} className="text-primary" />
              <div>
                <h4>Enterprise Security</h4>
                <p>ISO/SOC2 Standards</p>
              </div>
            </div>
            <div className="ind-stat-item hover-lift">
              <BarChart3 size={32} className="text-primary" />
              <div>
                <h4>Advanced Analytics</h4>
                <p>Real-time Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE BENEFITS ================= */}
      <section className="ind-benefits-section page-section">
        <div className="container">
          
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                BUSINESS VALUE
              </div>
              <h2 className="enhanced-section-title">
                Transforming the {industry.title} <span className="text-primary-gradient">Sector.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  Our custom solutions are engineered to streamline operations, reduce overhead, and drive unprecedented growth for {industry.title.toLowerCase()} businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="ind-bento-grid mt-12">
            <div className="ind-bento-card col-span-2 hover-lift">
              <div className="ind-bento-icon"><Zap size={28} /></div>
              <h3>Operational Efficiency</h3>
              <p>Automate repetitive tasks, streamline complex workflows, and eliminate manual errors with intelligent software designed for your specific operational needs.</p>
            </div>
            
            <div className="ind-bento-card col-span-1 bg-dark text-white hover-lift">
              <div className="ind-bento-icon text-white"><ShieldCheck size={28} /></div>
              <h3 className="text-white">Bulletproof Security</h3>
              <p className="text-pure-white">Role-based access, end-to-end encryption, and automated threat monitoring.</p>
            </div>

            <div className="ind-bento-card col-span-1 bg-primary text-white hover-lift">
              <div className="ind-bento-icon text-white"><Layers size={28} /></div>
              <h3 className="text-white">Seamless Integration</h3>
              <p className="text-pure-white">Easily connect with your existing tools, third-party APIs, and legacy systems.</p>
            </div>

            <div className="ind-bento-card col-span-2 hover-lift">
              <div className="ind-bento-icon"><Database size={28} /></div>
              <h3>Centralized Data Management</h3>
              <p>Unify your organization's data into a single, highly secure, and accessible source of truth. Make informed decisions instantly with real-time dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="ind-features-section page-section bg-soft">
        <div className="container">
          
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                CAPABILITIES
              </div>
              <h2 className="enhanced-section-title">
                Purpose-Built for <span className="text-primary-gradient">{industry.title}.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  We don't believe in one-size-fits-all. We build modular, feature-rich platforms that address your exact requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="ind-features-list mt-12">
            
            {/* Feature 1: ERP Dashboard */}
            <div className="ind-feature-row">
              <div className="ind-feature-text">
                <h3>Custom {industry.title} ERP Systems</h3>
                <p>Manage your entire organization from a single pane of glass. Our custom ERPs track resources, manage personnel, handle billing, and optimize supply chains specific to your industry's workflows.</p>
                <ul className="ind-feature-bullets">
                  <li><CheckCircle2 size={18} className="text-primary"/> Centralized Resource Management</li>
                  <li><CheckCircle2 size={18} className="text-primary"/> Automated Financial Reporting</li>
                  <li><CheckCircle2 size={18} className="text-primary"/> Real-time Inventory & Asset Tracking</li>
                </ul>
              </div>
              <div className="ind-feature-visual">
                
                {/* Fully Designed Faux ERP Dashboard */}
                <div className="faux-erp-app shadow-glow">
                  <div className="faux-sidebar">
                    <div className="faux-logo"></div>
                    <div className="faux-nav-item active"></div>
                    <div className="faux-nav-item"></div>
                    <div className="faux-nav-item"></div>
                    <div className="faux-nav-item mt-auto"></div>
                  </div>
                  <div className="faux-main">
                    <div className="faux-header">
                      <Search size={14} className="text-muted"/>
                      <div className="faux-header-right">
                        <Bell size={14} className="text-muted"/>
                        <div className="faux-avatar"></div>
                      </div>
                    </div>
                    <div className="faux-content">
                      <div className="faux-metrics-row">
                        <div className="faux-metric-card"><LineChart size={16} color="#2563eb"/><div className="f-line w-16"></div></div>
                        <div className="faux-metric-card"><Users size={16} color="#16a34a"/><div className="f-line w-20"></div></div>
                        <div className="faux-metric-card"><Database size={16} color="#8b5cf6"/><div className="f-line w-12"></div></div>
                      </div>
                      <div className="faux-content-split">
                        <div className="faux-chart-panel">
                          <div className="f-title"></div>
                          <div className="faux-graph-lines">
                            <div className="fg-line" style={{height: '40%'}}></div>
                            <div className="fg-line" style={{height: '70%'}}></div>
                            <div className="fg-line" style={{height: '50%'}}></div>
                            <div className="fg-line" style={{height: '90%'}}></div>
                            <div className="fg-line" style={{height: '60%'}}></div>
                          </div>
                        </div>
                        <div className="faux-list-panel">
                           <div className="f-title"></div>
                           <div className="f-list-item"><div className="f-circle"></div><div className="f-line w-full"></div></div>
                           <div className="f-list-item"><div className="f-circle"></div><div className="f-line w-full"></div></div>
                           <div className="f-list-item"><div className="f-circle"></div><div className="f-line w-full"></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Feature 2: Mobile App */}
            <div className="ind-feature-row reverse mt-16">
              <div className="ind-feature-text">
                <h3>Client & Portal Applications</h3>
                <p>Provide your customers, partners, or employees with secure, branded portals. Enhance user engagement with beautifully designed interfaces and powerful self-service tools.</p>
                <ul className="ind-feature-bullets">
                  <li><CheckCircle2 size={18} className="text-primary"/> Native iOS & Android Apps</li>
                  <li><CheckCircle2 size={18} className="text-primary"/> Self-Service Web Dashboards</li>
                  <li><CheckCircle2 size={18} className="text-primary"/> Secure Authentication (MFA)</li>
                </ul>
              </div>
              <div className="ind-feature-visual">
                
                {/* Fully Designed Faux Mobile App */}
                <div className="faux-mobile-app shadow-glow">
                  <div className="faux-mobile-notch"></div>
                  <div className="faux-mobile-header">
                    <div className="f-avatar-large"></div>
                    <div className="f-greeting">
                      <div className="f-line w-12 mb-1"></div>
                      <div className="f-line w-24"></div>
                    </div>
                  </div>
                  <div className="faux-mobile-body">
                    <div className="faux-mobile-card bg-primary-gradient">
                      <div className="f-line-white w-20 mb-4"></div>
                      <div className="f-line-white w-full h-8"></div>
                    </div>
                    <div className="faux-section-title"></div>
                    <div className="faux-mobile-list">
                      <div className="fm-item"><div className="fm-icon"></div><div className="fm-text-stack"><div className="f-line w-24"></div><div className="f-line w-16"></div></div></div>
                      <div className="fm-item"><div className="fm-icon"></div><div className="fm-text-stack"><div className="f-line w-24"></div><div className="f-line w-16"></div></div></div>
                      <div className="fm-item"><div className="fm-icon"></div><div className="fm-text-stack"><div className="f-line w-24"></div><div className="f-line w-16"></div></div></div>
                    </div>
                  </div>
                  <div className="faux-mobile-tabbar">
                    <div className="fm-tab active"></div>
                    <div className="fm-tab"></div>
                    <div className="fm-tab"></div>
                    <div className="fm-tab"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONNECTED TIMELINE PROCESS ================= */}
      <section className="ind-timeline-section page-section">
        <div className="container">
          
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                HOW WE WORK
              </div>
              <h2 className="enhanced-section-title">
                Our Delivery <span className="text-primary-gradient">Methodology.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  A transparent, connected process ensuring your software is delivered on time, securely, and exactly to your specifications.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-grid mt-12">
            {[
              { num: "01", title: "Discovery & Planning", desc: "We analyze your business processes and define a precise technical roadmap." },
              { num: "02", title: "UI/UX Architecture", desc: "Designing intuitive, accessible interfaces tailored for your specific user base." },
              { num: "03", title: "Agile Development", desc: "Building secure, scalable systems using modern frameworks and cloud infrastructure." },
              { num: "04", title: "Testing & QA", desc: "Rigorous security, performance, and automated testing for enterprise reliability." },
              { num: "05", title: "Deployment", desc: "Seamless migration and zero-downtime deployment to your production environment." },
              { num: "06", title: "Ongoing Support", desc: "24/7 monitoring, regular updates, and continuous optimization of your platform." }
            ].map((step, idx) => (
              <div className="timeline-item hover-lift" key={idx}>
                {idx !== 5 && <div className="timeline-connector"></div>}
                <div className="timeline-icon-box">{step.num}</div>
                <div className="timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}