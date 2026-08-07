import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

import { navItems } from '../data/siteData.js';
import '../components/header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [open]);

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavigation = () => {
    setOpen(false);
    setActiveDropdown(null);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDropdownToggle = (e, label, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  return (
    <header className="site-header">
      <div className="nav-shell">

        {/* LOGO */}
        <Link
          to="/"
          className="brand"
          onClick={handleNavigation}
        >
          <img
            src="/logo.png"
            alt="DropXcorp"
            className="main-logo"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* NAVIGATION */}
        <nav className={open ? 'nav-links show' : 'nav-links'}>

          {navItems.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isDropdownOpen = activeDropdown === item.label;

            return (
              <div
                className="nav-item"
                key={item.label}
              >
                {hasChildren ? (
                  <button
                    type="button"
                    className={`nav-link-btn ${isDropdownOpen ? 'active' : ''}`}
                    onClick={(e) => handleDropdownToggle(e, item.label, hasChildren)}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      className={isDropdownOpen ? 'rotate' : ''}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `nav-link-btn ${isActive ? 'active' : ''}`
                    }
                    onClick={handleNavigation}
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* DROPDOWN (Visible only when clicked) */}
                {hasChildren && isDropdownOpen && (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={handleNavigation}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* DESKTOP CTA ONLY */}
        <Link
          to="/contact"
          className="top-cta desktop-cta"
          onClick={handleNavigation}
        >
          Get In Touch
          <ArrowRight size={18} />
        </Link>

      </div>
    </header>
  );
}