import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Calendar, User } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get in Touch</h2>
          <p>
            Have questions about our WhatsApp Business Suite? We're here to help you succeed.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-methods"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-method">
              <div className="method-icon">
                <Mail size={24} />
              </div>
              <h3 className="method-title">Email Us</h3>
              <p className="method-value">support@crspro.com</p>
              <p className="method-description">
                Get in touch via email for any inquiries
              </p>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <Phone size={24} />
              </div>
              <h3 className="method-title">Call Us</h3>
              <p className="method-value">+91 9876543210</p>
              <p className="method-description">
                Speak directly with our support team
              </p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="">Select inquiry type</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell us more about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Submit Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="other-methods"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Other Ways to Reach Us</h3>
          <div className="methods-grid">
            <div className="method-card">
              <div className="method-card-icon">
                <MessageCircle size={24} />
              </div>
              <h4>Live Chat</h4>
              <p>Chat with our support team in real-time for immediate assistance.</p>
              <button className="method-card-button">Start Chat</button>
            </div>

            <div className="method-card">
              <div className="method-card-icon">
                <Calendar size={24} />
              </div>
              <h4>Schedule Call</h4>
              <p>Book a time that works for you to speak with our experts.</p>
              <button className="method-card-button">Schedule Now</button>
            </div>

            <div className="method-card">
              <div className="method-card-icon">
                <User size={24} />
              </div>
              <h4>Enterprise Sales</h4>
              <p>Custom solutions for large organizations with special requirements.</p>
              <button className="method-card-button">Contact Sales</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;