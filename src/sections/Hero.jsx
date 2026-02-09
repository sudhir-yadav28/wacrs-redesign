import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Zap, BarChart3, Play } from 'lucide-react';
import '../styles/Hero.css';

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#1e40af"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero = () => {
  const features = [
    { icon: <MessageSquare size={20} />, text: 'WhatsApp Integration' },
    { icon: <Bot size={20} />, text: 'AI-Powered Insights' },
    { icon: <Zap size={20} />, text: 'Automated Workflows' },
    { icon: <BarChart3 size={20} />, text: 'Real-time Analytics' }
  ];

  const cards = [
    {
      icon: <MessageSquare size={32} />,
      title: 'WhatsApp CRM',
      subtitle: 'Manage customer communications',
      badge: 'System Online',
      color: '#10b981'
    },
    {
      icon: <Bot size={32} />,
      title: 'AI Chatbot',
      subtitle: 'Intelligent conversation automation',
      badge: '',
      color: '#a855f7'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics',
      subtitle: 'Deep insights and reporting',
      badge: '',
      color: '#f59e0b'
    },
    {
      icon: <Zap size={32} />,
      title: 'Cold Messaging',
      subtitle: 'Automated outreach campaigns',
      badge: '99.9% Uptime',
      color: '#ef4444'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '98%', label: 'Satisfaction' },
    { value: '50+', label: 'Countries' }
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Zap size={16} />
            <span>Healthcare Communication Revolution</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transform Your
            <br />
            <span className="gradient-text">Business with AI-</span>
            <br />
            <span className="gradient-text">Powered CRM</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Streamline customer relationships, boost sales, and grow your business
            with our comprehensive CRM solution.
          </motion.p>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="btn-primary">
              Start Free Trial
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary">
              <Play size={20} fill="currentColor" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-cards"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="hero-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {card.badge && (
                <div className="card-badge" style={{ backgroundColor: card.color }}>
                  <span className="pulse-dot"></span>
                  {card.badge}
                </div>
              )}
              <div className="card-icon" style={{ color: card.color }}>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;