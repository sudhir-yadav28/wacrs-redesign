import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Zap, Users, BarChart3, Headphones } from 'lucide-react';
import '../styles/Tools.css';

const Tools = () => {
  const tools = [
    {
      id: 1,
      icon: <MessageSquare size={40} />,
      title: 'WhatsApp CRM',
      description: 'Complete customer relationship management through WhatsApp',
      features: [
        'Contact Management',
        'Message Templates',
        'Team Collaboration'
      ],
      badge: 'Popular',
      badgeColor: '#3b82f6'
    },
    {
      id: 2,
      icon: <Bot size={40} />,
      title: 'Chatbot',
      description: 'AI-powered conversational assistant for WhatsApp',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Custom Workflows'
      ],
      badge: 'AI-Powered',
      badgeColor: '#a855f7'
    },
    {
      id: 3,
      icon: <Zap size={40} />,
      title: 'Cold Messaging',
      description: 'Automated outreach campaigns with high conversion rates',
      features: [
        'Campaign Templates',
        'A/B Testing',
        'Contact Segmentation'
      ],
      badge: 'Automation',
      badgeColor: '#ef4444'
    },
    {
      id: 4,
      icon: <BarChart3 size={40} />,
      title: 'Analytics',
      description: 'Comprehensive analytics with detailed insights into customer interactions',
      features: [
        'Conversation analytics',
        'Team performance metrics',
        'Customer satisfaction tracking'
      ],
      badge: 'Insights',
      badgeColor: '#f59e0b'
    },
    {
      id: 5,
      icon: <Users size={40} />,
      title: 'Customers',
      description: 'Store unlimited contacts with detailed profiles and interaction history',
      features: [
        'Unlimited contact storage',
        'Custom field creation',
        'Contact segmentation'
      ],
      badge: 'Essential',
      badgeColor: '#10b981'
    },
    {
      id: 6,
      icon: <Headphones size={40} />,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with conversation assignment',
      features: [
        'Agent assignment',
        'Internal notes',
        'Performance monitoring'
      ],
      badge: 'Team',
      badgeColor: '#06b6d4'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="tools" id="tools">
      <div className="tools-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Powerful Tools for WhatsApp Communication
          </h2>
          <p className="section-subtitle">
            Everything you need to manage customer relationships and grow your business
          </p>
        </motion.div>

        <motion.div
          className="tools-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              className="tool-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="tool-badge" style={{ backgroundColor: tool.badgeColor }}>
                {tool.badge}
              </div>
              
              <div className="tool-icon" style={{ color: tool.badgeColor }}>
                {tool.icon}
              </div>

              <h3 className="tool-title">{tool.title}</h3>
              <p className="tool-description">{tool.description}</p>

              <ul className="tool-features">
                {tool.features.map((feature, index) => (
                  <li key={index}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle cx="8" cy="8" r="8" fill={tool.badgeColor} opacity="0.2"/>
                      <path
                        d="M5 8L7 10L11 6"
                        stroke={tool.badgeColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="tool-learn-more">
                Learn More
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;