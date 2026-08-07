import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  X, 
  Loader2, 
  MapPin, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { contactCards } from '../data/siteData.js';
import CTA from '../components/CTA.jsx';

import '../pages/contact.css';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyQIdZ0O_r6lz5LMu3BEjcg6-G9p4ADVItrpoNnba45atWDcoG1suReFZhBuoX26rty/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            projectType: formData.project,
            message: formData.message,
          }),
        }
      );

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      alert('Failed to submit. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="contact-page-wrapper">

      {/* ================= HERO SECTION (DARK BACKGROUND) ================= */}
      <section className="contact-hero-section relative">
        <div className="contact-hero-bg-glow"></div>
        <div className="container relative z-10">
          
          <div className="section-title-centered flex flex-col items-center text-center pt-12 pb-4">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                GET IN TOUCH • LET'S BUILD
              </div>
              <h1 className="hero-title-large mb-4">
                Let’s build your next <br />
                <span className="text-primary-gradient">digital solution.</span>
              </h1>
              <div className="max-w-700 mx-auto text-muted mt-6">
                <p className="text-lg">
                  Tell us what you want to build. We will help you plan the best product and technology path to scale your business.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT MAIN SECTION ================= */}
      <section className="container page-section pt-0">
        <div className="contact-main-grid mt-8">

          {/* LEFT: INFO BENTO BOX */}
          <div className="contact-info-panel">
            
            <div className="contact-info-header mb-8">
              <h2 className="enhanced-section-title text-left">
                Get in Touch with <br/><span className="text-primary-gradient">Our Experts.</span>
              </h2>
              <p className="text-muted mt-4">
                Have questions or ready to launch a project? Reach out to us through any of these platforms. We respond within 24 hours.
              </p>
            </div>

            <div className="contact-bento-grid">
              
              {/* Dynamic Cards from Data */}
              {contactCards?.map((c, index) => {
                const Icon = c.icon || MessageSquare;
                return (
                  <div key={index} className="contact-bento-card hover-lift">
                    <div className="bento-icon-wrapper bg-primary-light">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="bento-content">
                      <h3>{c.title}</h3>
                      <p>{c.value}</p>
                    </div>
                  </div>
                );
              })}

              {/* Static HQ Card to complete the bento look */}
              <div className="contact-bento-card bento-wide hover-lift">
                <div className="bento-icon-wrapper bg-emerald-light">
                  <MapPin size={24} className="text-emerald" />
                </div>
                <div className="bento-content">
                  <h3>Global Headquarters</h3>
                  <p>Tech Park Avenue, Hyderabad, Telangana, India - 500081</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: PREMIUM FORM */}
          <div className="contact-form-panel slide-up">
            <div className="contact-form-card shadow-premium">
              <div className="form-card-header">
                <h3>Send a Message</h3>
                <p>Fill out the form below and let's get started.</p>
              </div>

              <form className="enhanced-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="c-input"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="c-input"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="c-input"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label>Project Type <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="project"
                      placeholder="Web App, Mobile, ERP, etc."
                      value={formData.project}
                      onChange={handleChange}
                      className="c-input"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label>Project Details <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your goals, timeline, and requirements..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="c-input c-textarea"
                    required
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full justify-center shadow-glow mt-4"
                  disabled={loading}
                >
                  {loading ? (
                    <>Sending Message... <Loader2 size={18} className="spin-animation" /></>
                  ) : (
                    <>Submit Message <Send size={18} /></>
                  )}
                </button>
                <p className="form-disclaimer text-center text-muted mt-4 text-sm">
                  By submitting, you agree to our Privacy Policy.
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>

      <CTA />

      {/* ================= SUCCESS MODAL ================= */}
      {showSuccess && (
        <div className="modal-overlay-custom fade-in">
          <div className="modal-card-custom slide-up text-center">
            
            <button className="modal-close-btn" onClick={() => setShowSuccess(false)}>
              <X size={20} />
            </button>
            
            <div className="success-icon-wrapper mx-auto mt-4">
              <div className="success-icon-circle bg-emerald-light">
                <CheckCircle2 size={48} className="text-emerald" />
              </div>
              <div className="confetti confetti-1"></div>
              <div className="confetti confetti-2"></div>
              <div className="confetti confetti-3"></div>
            </div>

            <h3 className="modal-title-large mt-6">Message Sent!</h3>

            <p className="modal-subtitle mt-4 max-w-sm mx-auto text-muted">
              Thank you for contacting DropXcorp. Our technical team will review your request and get back to you within 24 hours.
            </p>

            <div className="modal-actions mt-8">
              <button
                onClick={() => setShowSuccess(false)}
                className="btn btn-primary btn-lg w-full justify-center shadow-glow"
              >
                Awesome, Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}