import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>W</span>
              </div>
              <div className="footer-logo-text">
                <h3>WACRS</h3>
              </div>
            </div>
            <p className="footer-description">
              WhatsApp AI CRM & Response Suite
            </p>
            <p className="footer-tagline">
              Transforming WhatsApp communication with AI-powered solutions for modern businesses.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Tools Links */}
          <div className="footer-section">
            <h4>Tools</h4>
            <ul className="footer-links">
              <li><a href="#whatsapp-crm">WhatsApp CRM</a></li>
              <li><a href="#ai-chatbot">AI Chatbot</a></li>
              <li><a href="#cold-messaging">Cold Messaging</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#status">System Status</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section footer-subscribe">
            <h4>Get Info About Pricing</h4>
            <p>Subscribe to get updates about our products and pricing.</p>
            <form className="subscribe-form">
              <input 
                type="text" 
                placeholder="Name" 
                className="subscribe-input"
              />
              <input 
                type="tel" 
                placeholder="WhatsApp Number" 
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-button">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 WACRS. All Rights Reserved
          </p>
          <ul className="footer-legal">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;