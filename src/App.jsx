import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

/* COMPONENTS */
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

/* PAGES */
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

/* Ensure these exports match what is in your Services.jsx file */
import { ServiceDetail } from './pages/Services.jsx';

/* IMPORTANT: We are importing the default export from Industries.jsx */
import IndustryDetail from './pages/Industries.jsx'; 

import Portfolio from './pages/Portfolio.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main className="main-wrapper">
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* SERVICES */}
          <Route path="/services" element={<Navigate to="/services/web-development" replace />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* INDUSTRIES */}
          <Route path="/industries" element={<Navigate to="/industries/healthcare" replace />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />

          {/* OTHER PAGES */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
    </>
  );
}