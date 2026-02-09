import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tools', href: '#tools' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <span>W</span>
          </div>
          <div className="logo-text">
            <h1>WACRS</h1>
            <p>WhatsApp AI CRM & Response Suite</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions desktop">
          <button className="btn-secondary">Start Free Trial</button>
          <div className="language-selector">
            <Globe size={16} />
            <span>English</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-actions">
          <button className="btn-secondary">Start Free Trial</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;