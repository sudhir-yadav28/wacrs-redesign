import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users, 
  Bot, 
  Zap, 
  BarChart3, 
  Headphones,
  Check 
} from 'lucide-react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare size={36} />,
      title: 'Unified Inbox',
      description: 'Manage all WhatsApp conversations from a single, organized inbox with real-time synchronization.',
      features: [
        'Real-time message synchronization',
        'Conversation threading',
        'Quick reply templates',
        'Message status tracking'
      ],
      color: '#10b981'
    },
    {
      icon: <Users size={36} />,
      title: 'Contact Management',
      description: 'Store unlimited contacts with detailed profiles, custom fields, and interaction history.',
      features: [
        'Unlimited contact storage',
        'Custom field creation',
        'Contact segmentation',
        'Import/Export functionality'
      ],
      color: '#3b82f6'
    },
    {
      icon: <Bot size={36} />,
      title: 'AI Chatbot',
      description: 'Intelligent customer support with automated responses and natural language processing.',
      features: [
        'Natural language understanding',
        'Automated responses',
        'Learning capabilities',
        'Human handoff'
      ],
      color: '#a855f7'
    },
    {
      icon: <Zap size={36} />,
      title: 'Cold Messaging',
      description: 'Automated outreach campaigns with personalized messaging and scheduling.',
      features: [
        'Campaign automation',
        'Message personalization',
        'Scheduling options',
        'Performance tracking'
      ],
      color: '#ef4444'
    },
    {
      icon: <BarChart3 size={36} />,
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics with detailed insights into customer interactions and team performance.',
      features: [
        'Conversation analytics',
        'Team performance metrics',
        'Customer satisfaction tracking',
        'Custom report generation'
      ],
      color: '#f59e0b'
    },
    {
      icon: <Headphones size={36} />,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with conversation assignment and internal notes.',
      features: [
        'Agent assignment',
        'Internal notes',
        'Collaboration tools',
        'Performance monitoring'
      ],
      color: '#06b6d4'
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

  const cardVariants = {
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
    <section className="features" id="features">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Powerful Features for Modern Business</h2>
          <p>
            Everything you need to manage WhatsApp customer relationships, automate 
            conversations, and grow your business.
          </p>
          <div className="features-cta">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="feature-icon-wrapper" 
                style={{ background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)` }}
              >
                {feature.icon}
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>

                <ul className="feature-list">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="feature-list-item">
                      <div className="checkmark-icon">
                        <Check size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;