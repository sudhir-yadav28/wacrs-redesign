import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Star } from 'lucide-react';
import '../styles/SuccessStories.css';

const SuccessStories = () => {
  const stories = [
    {
      company: 'Metro Hospital Chain',
      type: 'Multi-specialty Hospital',
      challenge: 'Managing 500+ daily patient inquiries across 5 locations',
      solution: 'Implemented WhatsApp CRM + AI Chatbot with Meta API',
      results: [
        '85% reduction in phone calls',
        '3x faster appointment booking',
        '92% patient satisfaction rate',
        '50% increase in appointment shows'
      ],
      tools: ['WhatsApp CRM', 'WhatsApp AI Chatbot']
    },
    {
      company: 'Dental Care Plus',
      type: 'Dental Clinic Network',
      challenge: 'Following up with 1000+ potential patients from marketing campaigns',
      solution: 'WhatsApp Cold Calling + WhatsApp CRM integration',
      results: [
        '45% lead conversion rate',
        '60% reduction in marketing costs',
        '300% increase in new patient acquisition',
        '90% message delivery rate'
      ],
      tools: ['WhatsApp Cold Calling', 'WhatsApp CRM']
    },
    {
      company: 'HealthFirst Diagnostics',
      type: 'Diagnostic Laboratory',
      challenge: 'Providing instant report delivery and appointment scheduling',
      solution: 'Complete Suite with Meta API implementation',
      results: [
        '100% digital report delivery',
        '70% reduction in wait times',
        '5x increase in repeat customers',
        '95% customer retention rate'
      ],
      tools: ['Complete Suite']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="success-stories">
      <div className="success-container">
        <motion.div
          className="success-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Healthcare Success Stories</h2>
          <p>
            See how healthcare businesses are transforming their patient communication 
            and growing with our tools.
          </p>
        </motion.div>

        <motion.div
          className="success-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="success-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-icon-badge">
                <Building2 size={24} />
              </div>

              <div className="company-info">
                <h3>{story.company}</h3>
                <p className="company-type">{story.type}</p>
              </div>

              <div className="challenge">
                <h4>Challenge:</h4>
                <p>{story.challenge}</p>
              </div>

              <div className="solution">
                <h4>Solution:</h4>
                <p>{story.solution}</p>
              </div>

              <div className="results">
                <h4>Results:</h4>
                <ul className="results-list">
                  {story.results.map((result, idx) => (
                    <li key={idx} className="result-item">
                      <Star size={16} className="star-icon" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tools-used">
                {story.tools.map((tool, idx) => (
                  <span key={idx} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;