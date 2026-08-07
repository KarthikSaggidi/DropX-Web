import React from "react";
import { Check, X } from "lucide-react";
import "../pages/pricing.css";

export default function PricingSection({
  title = "Website Development Packages",
  subtitle = "Choose the perfect package for your business growth. Transparent pricing with no hidden fees.",
  plans = [
    {
      id: "starter",
      title: "Starter",
      price: "24,999",
      included: [
        "Up to 5 Pages",
        "Responsive Design",
        "Contact Form",
        "Basic SEO",
        "Google Maps",
      ],
      excluded: [],
    },
    {
      id: "business",
      title: "Business",
      price: "59,999",
      included: [
        "Up to 15 Pages",
        "Premium UI Design",
        "Admin Dashboard",
        "Blog CMS",
      ],
      excluded: [],
    },
    {
      id: "professional",
      title: "Professional",
      price: "99,999",
      included: [
        "Unlimited Pages",
        "Custom Dashboard",
        "CRM Integration",
        "API Setup",
      ],
      excluded: [],
    },
    {
      id: "enterprise",
      title: "Enterprise",
      price: "Custom Quote",
      included: [
        "Unlimited Everything",
        "Dedicated Team",
        "ERP + CRM",
        "Custom APIs",
      ],
      excluded: [],
    },
  ],
}) {
  return (
    <section className="pricing-section">
      <div className="container">
        
        {/* ==========================
            SECTION HEADER
        ========================== */}
        <div className="pricing-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* ==========================
            PRICING GRID
        ========================== */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.id} className="pricing-card">
              {/* ==========================
                  TOP BLUE HEADER & WAVE
              ========================== */}
              <div className="pricing-banner">
                <h3>{plan.title}</h3>
                <p>See details below</p>
                
                {/* Wavy shape */}
                <svg
                  className="pricing-wave"
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
              </div>

              {/* ==========================
                  PRICE
              ========================== */}
              <div className="pricing-price-box">
                <div className="pricing-price">
                  {/* Only render ₹ if it's a number, skip if it says "Custom Quote" */}
                  {isNaN(plan.price.replace(/,/g, '')) ? '' : '₹'}
                  {plan.price}
                </div>
                {/* Updated to reflect one-time development */}
                <span className="pricing-period">ONE-TIME PAYMENT</span>
              </div>

              {/* ==========================
                  FEATURES
              ========================== */}
              <div className="pricing-features">
                {plan.included?.map((feature, index) => (
                  <div className="feature-row" key={`included-${index}`}>
                    <Check color="#22c55e" strokeWidth={4} size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
                
                {plan.excluded?.map((feature, index) => (
                  <div className="feature-row" key={`excluded-${index}`}>
                    <X color="#ef4444" strokeWidth={4} size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}