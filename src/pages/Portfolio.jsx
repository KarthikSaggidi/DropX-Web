import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X, PlayCircle, ExternalLink } from 'lucide-react';
import { portfolio } from '../data/siteData.js';

import CTA from '../components/CTA.jsx';

import '../pages/portfolio.css';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="portfolio-page-wrapper">

      {/* ================= HERO SECTION ================= */}
      <section className="portfolio-hero-section relative">
        <div className="portfolio-hero-bg-glow"></div>
        <div className="container relative z-10">
          
          <div className="section-title-centered flex flex-col items-center text-center pt-12 pb-4">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                PORTFOLIO • CASE STUDIES
              </div>
              <h1 className="hero-title-large mb-4">
                Products, platforms, and <br />
                digital systems by <span className="text-primary-gradient">DropXcorp.</span>
              </h1>
              <div className="max-w-700 mx-auto text-muted mt-6">
                <p className="text-lg">
                  Explore our curated showcase of enterprise digital transformations, high-performance web systems, and innovative client solutions engineered for scale.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PORTFOLIO GRID SECTION ================= */}
      <section className="container page-section pt-0">
        
        <div className="section-title-centered flex flex-col items-center text-center">
          <div className="soft-header mb-0">
          
            <h2 className="enhanced-section-title">
              Built with purpose and <span className="text-primary-gradient">precision.</span>
            </h2>
            <div className="max-w-700 mx-auto text-muted mt-4">
              <p className="mb-3">
                Discover how we turn complex technical challenges into seamless, high-impact digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio-grid-enhanced mt-12">
          {portfolio.map((p, index) => (
            <div
              className="project-card-enhanced hover-lift cursor-pointer"
              key={p.name || index}
              onClick={() => openProjectModal(p)}
            >
              <div className="project-card-header">
                <span className="project-category-badge">{p.category}</span>
                <span className="project-icon-action">
                  <ArrowRight size={18} />
                </span>
              </div>
              
              <div className="project-card-body">
                <h3 className="project-title">{p.name}</h3>
                <p className="project-desc">{p.text}</p>
              </div>
              
              <div className="project-card-footer">
                <span className="case-link-btn text-primary">
                  View Full Case Study <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CASE STUDY POPUP MODAL ================= */}
      {selectedProject && (
        <div className="modal-overlay-custom fade-in" onClick={closeProjectModal}>
          <div className="modal-card-custom slide-up" onClick={(e) => e.stopPropagation()}>
            
            <button className="modal-close-btn" onClick={closeProjectModal}>
              <X size={20} />
            </button>
            
            <div className="modal-header-area">
              <div className="modal-badge">{selectedProject.category}</div>
              <h2 className="modal-title">{selectedProject.name}</h2>
              <p className="modal-subtitle">{selectedProject.text}</p>
            </div>
            
            <div className="modal-divider"></div>

            <div className="modal-section-details">
              <h4>Comprehensive Project Overview & Impact</h4>
              <p>
                Engineered and delivered by DropXcorp, this solution was meticulously architected using next-generation cloud infrastructure to guarantee high availability, lightning-fast response times, and exceptional UX under heavy peak workloads.
              </p>

              <h4 className="mt-6">Key Technical Stack & Architecture</h4>
              <p>
                Built on a microservices-based framework utilizing containerized deployments, automated CI/CD pipelines, and rigorous automated testing suites to maintain pristine code quality and zero-downtime releases.
              </p>
              
              <div className="modal-features-list mt-4">
                <div className="modal-feature-item">
                  <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>Custom scalable cloud infrastructure and multi-region failover deployment.</span>
                </div>
                <div className="modal-feature-item">
                  <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>Streamlined operational workflows resulting in over 40% higher efficiency.</span>
                </div>
                <div className="modal-feature-item">
                  <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>Advanced enterprise-grade security, RBAC, and end-to-end encryption protocols.</span>
                </div>
                <div className="modal-feature-item">
                  <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>Real-time telemetry, automated performance monitoring, and analytics dashboard.</span>
                </div>
              </div>

              <h4 className="mt-6">Client Success & Long-Term Value</h4>
              <p>
                The successful deployment empowered the client to scale operations seamlessly, capture wider market share, and significantly reduce operational overhead through intelligent automation.
              </p>
            </div>

            <div className="modal-actions mt-8">
              <button className="btn btn-primary w-full justify-center" onClick={closeProjectModal}>
                Close Case Study
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