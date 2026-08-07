import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './cta.css';

export default function CTA() {
  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-card-enhanced">
          
          <div className="cta-text-content">
            <span className="cta-badge">
              <Sparkles size={14} />
              Let's Build Together
            </span>

            <h2>
              Ready to create your next digital product?
            </h2>

            <p>
              Share your idea. We will help you shape it into a secure,
              scalable, and user-friendly enterprise solution.
            </p>
          </div>

          <div className="cta-action">
            <Link to="/contact" className="btn-cta-white">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}