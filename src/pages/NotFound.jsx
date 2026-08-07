import React from 'react';

import {
  Link,
  useParams
} from 'react-router-dom';

import {
  ArrowRight,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Database,
  BarChart3
} from 'lucide-react';

import {
  industries,
  services
} from '../data/siteData.js';

import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';



/* =========================================================
   INDUSTRY DETAIL PAGE
========================================================= */

export function IndustryDetail() {

  const { slug } = useParams();

  const item =
    industries.find((x) => x.slug === slug) ||
    industries[0];

  const Icon = item.icon;

  return (
    <>

      {/* HERO SECTION */}
      <section className="page-hero industry-hero">

        <div className="container">

          <span>
            INDUSTRY SOLUTION
          </span>

          <h1>
            Smart Technology Solutions for
            {' '}
            <span>{item.title}</span>
          </h1>

          <p>
            {item.text}
          </p>

        </div>

      </section>



      {/* DETAIL SECTION */}
      <section className="container split page-section">

        {/* LEFT SIDE */}
        <div className="detail-card modern-industry-card">

          <div className="industry-icon-wrap">

            <Icon size={50} />

          </div>

          <h2>
            {item.title}
          </h2>

          <p>
            {item.text}
          </p>

          <div className="industry-feature-list">

            <div>

              <ShieldCheck size={18} />

              Secure and scalable architecture

            </div>

            <div>

              <Database size={18} />

              Cloud-based data management

            </div>

            <div>

              <BarChart3 size={18} />

              Real-time analytics and reporting

            </div>

          </div>

          <Link
            className="btn"
            to="/contact"
          >

            Discuss Project

            <ArrowRight size={18} />

          </Link>

        </div>



        {/* RIGHT SIDE */}
        <div className="industry-right-content">

          <div className="pill">
            COMMON FEATURES
          </div>

          <h2>
            What’s included
            in the solution?
          </h2>

          <div className="check-list modern-check-list">

            <div>
              <CheckCircle2 size={18} />
              Dashboard and role-based access
            </div>

            <div>
              <CheckCircle2 size={18} />
              Billing, reports and searchable records
            </div>

            <div>
              <CheckCircle2 size={18} />
              Professional print/export-ready documents
            </div>

            <div>
              <CheckCircle2 size={18} />
              Mobile responsive modern UI
            </div>

            <div>
              <CheckCircle2 size={18} />
              Cloud deployment and data security
            </div>

            <div>
              <CheckCircle2 size={18} />
              Long-term support and maintenance
            </div>

          </div>

        </div>

      </section>



      {/* SERVICES SECTION */}
      <section className="soft-section">

        <div className="container">

          <SectionHeader
            eyebrow="USEFUL SERVICES"
            title={
              <>
                Recommended for
                {' '}
                <span>{item.title}</span>
              </>
            }
            text="Solutions and services commonly used by businesses in this industry."
          />



          <div className="service-grid">

            {services.slice(0, 4).map((s) => {

              const S = s.icon;

              return (

                <Link
                  to={`/services/${s.slug}`}
                  className="service-card modern-service-card"
                  key={s.slug}
                >

                  <S size={42} />

                  <h3>
                    {s.title}
                  </h3>

                  <p>
                    {s.short}
                  </p>

                  <div className="circle-arrow">

                    <ArrowRight size={16} />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </section>



      {/* CTA */}
      <CTA />

    </>
  );
}



/* =========================================================
   INDUSTRIES PAGE
========================================================= */

export default function Industries() {

  return (
    <>

      {/* HERO SECTION */}
      <section className="page-hero industries-main-hero">

        <div className="container">

          <span>
            INDUSTRIES
          </span>

          <h1>
            Technology for businesses
            that need clarity and control.
          </h1>

          <p>
            We build powerful digital systems
            tailored for real-world business
            operations across multiple industries.
          </p>

        </div>

      </section>



      {/* INDUSTRIES GRID */}
      <section className="container page-section">

        <SectionHeader
          eyebrow="INDUSTRY SOLUTIONS"
          title={
            <>
              Built around
              {' '}
              <span>real operations</span>
            </>
          }
          text="Choose any industry to explore dedicated digital solutions and services."
        />



        <div className="industry-grid big modern-industry-grid">

          {industries.map((i) => {

            const Icon = i.icon;

            return (

              <Link
                className="industry-card modern-industry-item"
                to={`/industries/${i.slug}`}
                key={i.slug}
              >

                <div className="industry-card-top">

                  <div className="industry-main-icon">

                    <Icon size={34} />

                  </div>

                  <Building2 size={18} />

                </div>

                <h3>
                  {i.title}
                </h3>

                <p>
                  {i.text}
                </p>

                <div className="industry-card-btn">

                  Explore Solution

                  <ArrowRight size={17} />

                </div>

              </Link>

            );

          })}

        </div>

      </section>



      {/* CTA */}
      <CTA />

    </>
  );
}