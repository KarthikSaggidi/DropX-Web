import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Rocket,
  Database,
  Users,
  CheckCircle2,
  Layers,
  Cpu,
  PlayCircle,
  X
} from "lucide-react";

import {
  stats,
  services,
  valueProps,
  industries,
  portfolio,
  processSteps
} from '../data/siteData.js';

import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';
import { assetPath } from '../utils/assetPath.js';

import '../pages/home.css';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="home-white-wrapper">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-full-image-section">
        <div className="hero-bg-image-wrapper">
          <img
            src={assetPath('hero.jpeg')}
            alt="DropXcorp futuristic digital city background"
          />
          
        </div>

        <div className="container hero-centered-container">
          <div className="hero-content-box animate-fade-up">

            <div className="hero-pill-badge">
              <span>INNOVATE</span>
              <span className="dot">•</span>
              <span>BUILD</span>
              <span className="dot">•</span>
              <span>GROW</span>
            </div>

            <h1 className="hero-main-title">
              Building Digital Solutions That <br />
              <span className="text-neon-cyan">Shape Tomorrow</span>
            </h1>

            <p className="hero-desc">
              DropXcorp Pvt. Ltd. delivers <span className="text-highlight-light">innovative</span> digital solutions that <span className="text-highlight-light">empower</span> businesses, <span className="text-highlight-light">accelerate</span> growth, and create a smarter tomorrow.
            </p>

            <div className="hero-btn-group">
  <Link 
    className="btn-neon-blue" 
    to="/services"
    style={{ width: '230px', height: '52px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}
  >
    Explore Our Services <ArrowRight size={18} />
  </Link>
  <Link 
    className="btn-solid-dark" 
    to="/portfolio"
    style={{ width: '230px', height: '52px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}
  >
    View Our Work <PlayCircle size={18} />
  </Link>
</div>

          </div>
        </div>
      </section>

      {/* ================= STATS ROW BELOW HERO ================= */}
      <section className="stats-below-hero-section">
        <div className="container">
          <div className="stats-clean-grid">
            {stats.map((s) => {
              const Icon = s.icon || Cpu;
              return (
                <div className="stat-clean-card" key={s.label}>
                  <div className="stat-icon-circle">
                    <Icon size={20} />
                  </div>
                  <div className="stat-text-group">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="page-section container relative services-enhanced-section">
        {/* Optional: Subtle background glow for the section */}
        <div className="services-bg-glow"></div>

        <div className="soft-header text-center">
          <div className="section-badge-animated-border">OUR SERVICES</div>
          <h2 className="enhanced-section-title">End-to-End <span className="text-primary-gradient">Digital Solutions</span></h2>
          <p className="max-w-700 mx-auto text-muted">
            We design, build, and deliver high-performance digital products that help modern businesses scale.
          </p>
        </div>

        <div className="service-grid-compact mt-10">
          {services.map((s) => {
            const Icon = s.icon || Layers;
            return (
              <Link
                to={`/services/${s.slug}`}
                className="service-card-compact enhanced-card"
                key={s.slug}
              >
                <div className="service-icon-box-compact">
                  <Icon size={22} aria-hidden="true" strokeWidth={2.5} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="card-link animated-link">
                  <span>Learn more</span>
                  <ArrowRight size={16} aria-hidden="true" className="link-arrow" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* VALUE STRIP */}
        <div className="value-strip mt-12">
          {valueProps.map((v) => {
            const Icon = v.icon || CheckCircle2;
            return (
              <div className="value-card-white interactive-value-card" key={v.title}>
                <div className="value-icon-box">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="value-text-content">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= WHY DROPXCORP & FEATURES ================= */}
      <section className="soft-section-white">
        <div className="container relative z-10">

          <div className="soft-header text-center">
            <div className="section-badge-animated-border">WHY CHOOSE DROPXCORP</div>
            <h2 className="enhanced-section-title">
              Technology Partner for <span className="text-primary-gradient">Modern Businesses</span>
            </h2>
            <p className="max-w-700 mx-auto text-muted">
              We build secure, scalable, and future-ready software solutions using a proven development methodology, helping businesses automate, innovate, and grow with absolute confidence.
            </p>
          </div>

          {/* ================= ENHANCED FEATURE CARDS (STRICT SINGLE ROW) ================= */}
          <div className="feature-grid-inline mt-12">
            <div className="enhanced-feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={24} color="#ffffff" />
              </div>
              <h3>Enterprise Security</h3>
              <p>Secure coding practices, robust encryption, and enterprise-grade data protection.</p>
              <div className="card-hover-border"></div>
            </div>

            <div className="enhanced-feature-card">
              <div className="feature-icon-wrapper">
                <Rocket size={24} color="#ffffff" />
              </div>
              <h3>Fast Delivery</h3>
              <p>Agile development workflows ensuring continuous deployment and project transparency.</p>
              <div className="card-hover-border"></div>
            </div>

            <div className="enhanced-feature-card">
              <div className="feature-icon-wrapper">
                <Database size={24} color="#ffffff" />
              </div>
              <h3>Cloud Ready</h3>
              <p>Highly scalable cloud architecture engineered dynamically to support future growth.</p>
              <div className="card-hover-border"></div>
            </div>

            <div className="enhanced-feature-card">
              <div className="feature-icon-wrapper">
                <Users size={24} color="#ffffff" />
              </div>
              <h3>Dedicated Support</h3>
              <p>Round-the-clock monitoring, system maintenance, and long-term technical support.</p>
              <div className="card-hover-border"></div>
            </div>
          </div>

          {/* ================= ENHANCED PROCESS TIMELINE ================= */}
          <div className="process-timeline-container mt-16">
            {/* The horizontal connecting line */}
            <div className="process-line-track"></div>
            
            {/* The row forcing a single line */}
            <div className="process-steps-row">
              {processSteps.map((step, index) => (
                <div 
                  className="process-step-item animated-step" 
                  key={step.title} 
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="process-step-circle">
                    <span className="step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Animated pulse ring on hover */}
                    <div className="circle-pulse"></div>
                  </div>
                  
                  <div className="process-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= ENHANCED INDUSTRIES SECTION ================= */}
      <section className="container page-section relative z-10">
        <div className="section-title-centered">
          <div className="soft-header text-center mb-0">
            <div className="section-badge-animated-border">
              INDUSTRIES
            </div>
            <h2 className="enhanced-section-title">
              Solutions for <span className="text-primary-gradient">Modern Markets</span>
            </h2>
            <p className="max-w-700 mx-auto text-muted">
              Tailored software ecosystems designed to address specialized industry challenges.
            </p>
          </div>
        </div>

        <div className="industry-grid-enhanced mt-10">
          {industries.map((i) => {
            const Icon = i.icon || Layers;
            return (
              <Link
                className="industry-card-enhanced"
                to={`/industries/${i.slug}`}
                key={i.slug}
              >
                {/* Subtle hover glow layer */}
                <div className="industry-hover-glow"></div>
                
                <div className="industry-icon-wrapper">
                  <Icon size={24} strokeWidth={2.5} />
                </div>
                
                <div className="industry-content">
                  <h3>{i.title}</h3>
                  <p>{i.text}</p>
                </div>
                
                <div className="industry-link-animated">
                  <span>Explore sector</span>
                  <ArrowRight size={16} className="arrow-icon" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="container page-section pt-0">
        <div className="section-title-centered">
          <div className="soft-header text-center">
            <div className="section-badge-animated-border">
              PORTFOLIO
            </div>
            <h2 className="enhanced-section-title">Products & <span className="text-primary-gradient">Case Studies</span></h2>
            <p className="max-w-700 mx-auto text-muted">
              Showcasing live digital products, enterprise transformations, and internal innovations.
            </p>
          </div>
        </div>

        <div className="portfolio-grid mt-8">
          {portfolio.slice(0, 3).map((p) => (
            <div 
              className="project-card-white cursor-pointer" 
              key={p.name}
              onClick={() => openProjectModal(p)}
            >
              <div className="project-card-header">
                <span className="project-category">{p.category}</span>
                <div className="project-icon-action">
                  <ArrowRight size={16} />
                </div>
              </div>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <div className="project-footer">
                <span className="case-link">View Case Study</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPANDED CASE STUDY POPUP MODAL ================= */}
      {selectedProject && (
        <div className="modal-overlay-custom fade-in" onClick={closeProjectModal}>
          <div className="modal-card-custom slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProjectModal}>
              <X size={20} />
            </button>
            <div className="modal-badge">{selectedProject.category}</div>
            <h2 className="modal-title">{selectedProject.name}</h2>
            <p className="modal-subtitle">{selectedProject.text}</p>
            
            <div className="modal-divider"></div>

            <div className="modal-section-details">
              <h4>Comprehensive Project Overview & Impact</h4>
              <p>
                Engineered and delivered by DropXcorp, this solution was meticulously architected using next-generation cloud infrastructure to guarantee high availability, lightning-fast response times, and exceptional UX under heavy peak workloads.
              </p>
              
              <div className="modal-features-list mt-4">
                <div className="modal-feature-item">
                  <CheckCircle2 size={16} className="text-indigo" />
                  <span>Custom scalable cloud infrastructure and multi-region deployment</span>
                </div>
                <div className="modal-feature-item">
                  <CheckCircle2 size={16} className="text-indigo" />
                  <span>Streamlined workflows resulting in 40% higher efficiency</span>
                </div>
                <div className="modal-feature-item">
                  <CheckCircle2 size={16} className="text-indigo" />
                  <span>Advanced enterprise-grade security and encryption protocols</span>
                </div>
              </div>
            </div>

            <div className="modal-actions mt-6">
              <button className="btn-neon-blue" onClick={closeProjectModal}>
                Close Case Study <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= CTA ================= */}
      <CTA />

    </div>
  );
}
