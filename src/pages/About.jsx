import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Cpu,
  CheckCircle2
} from 'lucide-react';

import CTA from '../components/CTA.jsx';

import '../pages/about.css';

export default function About() {
  return (
    <div className="premium-about-wrapper">
      
      {/* ================= ULTRA-MODERN ENHANCED HERO ================= */}
      <section className="hero-ultra relative">
        {/* Animated Background Orbs */}
        <div className="ambient-mesh">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>

        {/* Subtle Engineering Grid Overlay */}
        <div className="hero-grid-overlay"></div>

        <div className="container relative z-10 hero-ultra-content">
          

          <h1 className="hero-ultra-title animate-fade-up delay-1">
            Engineering the <br />
            <span className="text-gradient-fluid">Digital Future.</span>
          </h1>

          <p className="hero-ultra-subtitle animate-fade-up delay-2">
            We don't just build software. We craft intelligent, scalable, and beautifully designed digital ecosystems for startups, enterprises, and visionaries worldwide.
          </p>

          <div className="hero-cta-group animate-fade-up delay-3 mt-8">
            <Link to="/contact" className="btn-primary-glow">Start Your Project</Link>
            <Link to="/services" className="btn-glass">Discover More</Link>
          </div>
        </div>
      </section>

      {/* ================= BENTO GRID (ABOUT & MISSION) ================= */}
      <section id="company" className="bento-section page-section">
        <div className="container">
          
          {/* Enhanced Header */}
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                THE COMPANY
              </div>
              <h2 className="enhanced-section-title">
                Design. Build. <span className="text-primary-gradient">Scale.</span>
              </h2>
              <p className="max-w-700 mx-auto text-muted mt-4">
                A convergence of top-tier engineering and premium design, dedicated to solving complex business challenges.
              </p>
            </div>
          </div>

          <div className="bento-grid mt-12">
            
            {/* Bento Box 1: Intro (Large) */}
            <div className="bento-card col-span-8">
              <div className="bento-content">
                <span className="bento-tag">WHO WE ARE</span>
                <h3 className="bento-title">Your elite technology partner.</h3>
                <p className="bento-desc text-lg">
                  DropXcorp is an advanced software engineering agency. We bridge the gap between high-end design and robust backend infrastructure. By leveraging modern tech stacks, we empower businesses to automate, scale, and dominate their industries.
                </p>
              </div>
              <div className="bento-bg-pattern"></div>
            </div>

            {/* Bento Box 2: Mission (Small, Colorful) */}
            <div className="bento-card col-span-4 bg-gradient-primary">
              <div className="bento-content text-white relative z-10">
                <div className="bento-icon-white"><Target size={28} /></div>
                <h3 className="bento-title text-white">Our Mission</h3>
                <p className="bento-desc text-pure-white">
                  To architect secure, scalable, and intelligent software that simplifies the complex and accelerates global digital transformation effortlessly.
                </p>
              </div>
            </div>

            {/* Bento Box 3: Vision (Small, Dark) */}
            <div className="bento-card col-span-4 bg-dark">
              <div className="bento-content text-white relative z-10">
                <div className="bento-icon-dark"><Eye size={28} /></div>
                <h3 className="bento-title text-white">Our Vision</h3>
                <p className="bento-desc text-pure-white">
                  To be the gold standard in software engineering—recognized globally for uncompromised quality, clear transparency, and groundbreaking innovation.
                </p>
              </div>
            </div>

            {/* Bento Box 4: Capabilities (Large, Grid inside) */}
            <div className="bento-card col-span-8">
              <div className="bento-content">
                <span className="bento-tag">CORE EXPERTISE</span>
                <div className="expertise-grid">
                  <div className="expertise-item">
                    <Code2 size={24} className="text-primary" />
                    <span>Custom Software</span>
                  </div>
                  <div className="expertise-item">
                    <Smartphone size={24} className="text-primary" />
                    <span>Mobile Apps</span>
                  </div>
                  <div className="expertise-item">
                    <Database size={24} className="text-primary" />
                    <span>Enterprise ERP</span>
                  </div>
                  <div className="expertise-item">
                    <Cloud size={24} className="text-primary" />
                    <span>Cloud Architecture</span>
                  </div>
                  <div className="expertise-item">
                    <ShieldCheck size={24} className="text-primary" />
                    <span>Cyber Security</span>
                  </div>
                  <div className="expertise-item">
                    <Cpu size={24} className="text-primary" />
                    <span>AI Integration</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PREMIUM STATS (GLASSMORPHISM) ================= */}
      <section className="premium-stats-section">
        <div className="container">
          <div className="stats-glass-container">
            <div className="stat-glass-item">
              <div className="stat-value">50<span className="text-primary">+</span></div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-glass-item">
              <div className="stat-value">20<span className="text-primary">+</span></div>
              <div className="stat-label">Global Clients</div>
            </div>
            <div className="stat-glass-item">
              <div className="stat-value">99<span className="text-primary">%</span></div>
              <div className="stat-label">Client Retention</div>
            </div>
            <div className="stat-glass-item">
              <div className="stat-value">24<span className="text-primary">/</span>7</div>
              <div className="stat-label">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="page-section bg-white">
        <div className="container">
          
          {/* Enhanced Header */}
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                THE MINDS BEHIND IT
              </div>
              <h2 className="enhanced-section-title">
                Driven by <span className="text-primary-gradient">Innovation.</span>
              </h2>
              <p className="max-w-700 mx-auto text-muted mt-4">
                Our leadership team combines deep technical expertise with visionary business strategies to ensure your project's success.
              </p>
            </div>
          </div>

          <div className="leadership-minimal-grid mt-12">
            
            {/* Founder */}
            <div className="leader-minimal-card">
              <div className="leader-img-box">
                <img src="/images/founder.jpg" alt="Sourab Singh" />
                <div className="leader-social-overlay">
                  <span>CTO</span>
                </div>
              </div>
              <div className="leader-text">
                <h3>Sourab Singh</h3>
                <p className="leader-title">Founder & Chief Technology Officer</p>
                <p className="leader-bio">
                  Architecting the future. Sourab leads our engineering teams with an uncompromising focus on scalable systems, code quality, and cutting-edge tech integration. With a profound background in full-stack development and cloud computing, he ensures every product is built to enterprise standards.
                </p>
                <div className="leader-highlights">
                  <span><CheckCircle2 size={16} /> Cloud Architecture & DevOps</span>
                  <span><CheckCircle2 size={16} /> Scalable System Design</span>
                  <span><CheckCircle2 size={16} /> Advanced API Integration</span>
                </div>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="leader-minimal-card">
              <div className="leader-img-box">
                <img src="/images/co-founder.jpg" alt="Saggidi Karthik" />
                <div className="leader-social-overlay">
                  <span>CEO</span>
                </div>
              </div>
              <div className="leader-text">
                <h3>Saggidi Karthik</h3>
                <p className="leader-title">Co-Founder & Chief Executive Officer</p>
                <p className="leader-bio">
                  Driving global growth. Karthik spearheads strategic partnerships, client relations, and business operations. He is dedicated to ensuring that our technology solutions align perfectly with our clients' long-term business goals, maximizing ROI and market impact.
                </p>
                <div className="leader-highlights">
                  <span><CheckCircle2 size={16} /> Strategic Business Growth</span>
                  <span><CheckCircle2 size={16} /> Client Relationship Management</span>
                  <span><CheckCircle2 size={16} /> Product Market Strategy</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COMPACT PORTFOLIO HIGHLIGHTS ================= */}
      <section className="page-section bg-off-white">
        <div className="container">
          
          {/* Enhanced Header */}
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                PORTFOLIO HIGHLIGHTS
              </div>
              <h2 className="enhanced-section-title">
                Work That <span className="text-primary-gradient">Speaks.</span>
              </h2>
              <p className="max-w-700 mx-auto text-muted mt-4">
                A brief look at the enterprise-grade platforms and digital experiences we've engineered.
              </p>
            </div>
          </div>

          <div className="portfolio-compact-grid mt-12">
            
            <div className="portfolio-compact-card">
              <div className="portfolio-img-box">
                <img src="/images/projects/hospital-erp.jpg" alt="Hospital ERP" />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">Healthcare</span>
                <h3 className="portfolio-title">Hospital ERP Ecosystem</h3>
                <p className="portfolio-desc">
                  A comprehensive, secure hospital management system streamlining patient records, digital appointments, complex billing cycles, and administrative modules all in one centralized dashboard.
                </p>
              </div>
            </div>

            <div className="portfolio-compact-card">
              <div className="portfolio-img-box">
                <img src="/images/projects/society.jpg" alt="Society App" />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">Real Estate</span>
                <h3 className="portfolio-title">Smart Society Platform</h3>
                <p className="portfolio-desc">
                  An intelligent residential management application built to handle visitor tracking, automated maintenance ticketing, direct resident communication, and community billing effortlessly.
                </p>
              </div>
            </div>

            <div className="portfolio-compact-card">
              <div className="portfolio-img-box">
                <img src="/images/projects/salon.jpg" alt="Salon POS" />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">Retail</span>
                <h3 className="portfolio-title">Cloud POS & Booking</h3>
                <p className="portfolio-desc">
                  A robust point-of-sale and booking software designed specifically for salons. Features include real-time calendar syncing, inventory management, and automated customer loyalty programs.
                </p>
              </div>
            </div>

            <div className="portfolio-compact-card">
              <div className="portfolio-img-box">
                <img src="/images/projects/website.jpg" alt="Web Apps" />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">Corporate</span>
                <h3 className="portfolio-title">Next-Gen Web Apps</h3>
                <p className="portfolio-desc">
                  High-performance, beautifully crafted corporate web applications tailored to amplify brand identity, maximize user engagement, and drive high-converting business leads.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ENDLESS CLIENT MARQUEE ================= */}
      <section className="marquee-section border-t border-b border-gray-100 bg-white">
        <div className="marquee-container">
          <div className="marquee-track">
            <img src="/images/clients/client-1.png" alt="Client" />
            <img src="/images/clients/client-2.png" alt="Client" />
            <img src="/images/clients/client-3.png" alt="Client" />
            <img src="/images/clients/client-4.png" alt="Client" />
            <img src="/images/clients/client-5.png" alt="Client" />
            <img src="/images/clients/client-6.png" alt="Client" />
            {/* Duplicates for infinite loop */}
            <img src="/images/clients/client-1.png" alt="Client" />
            <img src="/images/clients/client-2.png" alt="Client" />
            <img src="/images/clients/client-3.png" alt="Client" />
            <img src="/images/clients/client-4.png" alt="Client" />
            <img src="/images/clients/client-5.png" alt="Client" />
            <img src="/images/clients/client-6.png" alt="Client" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}