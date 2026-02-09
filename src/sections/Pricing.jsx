import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Zap, Check, ArrowRight } from 'lucide-react';
import '../styles/Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      icon: <MessageSquare size={48} />,
      name: 'WhatsApp CRM',
      price: 49,
      period: 'month',
      description: 'Complete WhatsApp CRM solution for customer relationship management',
      note: 'Compatible with WhatsApp Business API',
      color: '#10b981',
      features: [
        'Unlimited contacts management',
        'Multi-agent inbox',
        'Advanced analytics & reports',
        'Contact segmentation',
        'Automated follow-ups',
        'Integration with existing CRM',
        'Bulk message broadcasting',
        'Lead scoring & tracking',
        'Works with WhatsApp Business API',
        'Real-time conversation sync'
      ]
    },
    {
      icon: <Bot size={48} />,
      name: 'WhatsApp AI Chatbot',
      priceRange: { min: 39, max: 59 },
      period: 'month',
      description: 'Intelligent AI chatbot for automated customer support with flexible API options',
      note: 'Available with Meta API or Non-Meta API integration',
      priceBreakdown: 'Non-Meta API: $39/month | Meta API: $59/month',
      color: '#a855f7',
      popular: true,
      features: [
        'AI-powered conversations',
        'Natural language processing',
        '24/7 automated customer support',
        'Multi-language support',
        'Custom knowledge base training',
        'Seamless handoff to human agents',
        'Advanced conversation analytics',
        'Integration with business systems',
        'Custom response templates',
        'Smart intent recognition'
      ]
    },
    {
      icon: <Zap size={48} />,
      name: 'WhatsApp Cold Calling',
      price: 69,
      period: 'month',
      description: 'Professional cold calling solution using Meta API for maximum deliverability',
      note: 'Requires Meta API integration',
      color: '#3b82f6',
      features: [
        'Automated outreach campaigns',
        'Smart message sequences',
        'A/B testing for messages',
        'Advanced delivery tracking',
        'Contact list management',
        'Response rate analytics',
        'Custom message templates',
        'Compliance monitoring',
        'Meta API integration',
        'Bulk messaging capabilities',
        'Campaign performance insights',
        'Lead qualification automation'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Choose Your Perfect Plan</h2>
          <p>
            Flexible pricing options designed to scale with your business needs
          </p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="pricing-icon" style={{ color: plan.color }}>
                {plan.icon}
              </div>

              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="pricing-note">{plan.note}</div>
              </div>

              <div className="pricing-amount">
                <div className="price-wrapper">
                  {plan.priceRange ? (
                    <div className="price-range">
                      ${plan.priceRange.min} - ${plan.priceRange.max}
                    </div>
                  ) : (
                    <>
                      <span className="currency">$</span>
                      <span className="price">{plan.price}</span>
                    </>
                  )}
                  <span className="period">/{plan.period}</span>
                </div>
                {plan.priceBreakdown && (
                  <div className="price-breakdown">{plan.priceBreakdown}</div>
                )}
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={18} style={{ color: plan.color }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="pricing-button">
                Start Free Trial
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;