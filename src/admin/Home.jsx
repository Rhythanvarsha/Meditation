import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeader from './HomeHeader';

const AdminHome = () => {
  const featuresRef = useRef(null);
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const adminFeatures = [
    {
      icon: "📥",
      title: 'Upload Sessions',
      description: 'Upload meditation sessions with title, description, audio link, and duration.'
    },
    {
      icon: "🧑‍💼",
      title: 'Manage Users',
      description: 'View, edit, or remove users who have the USER role.'
    },
    {
      icon: "📊",
      title: 'Session Analytics',
      description: 'Track session views, engagement rates, and performance trends.'
    },
    {
      icon: "🔐",
      title: 'Secure Role Access',
      description: 'Use JWT-based role management to control access to sensitive actions.'
    },
    {
      icon: "📝",
      title: 'Edit/Delete Sessions',
      description: 'Easily update or remove outdated meditation sessions.'
    },
    {
      icon: "📌",
      title: 'Quote Management',
      description: 'Manage inspirational quotes displayed to users.'
    }
  ];

  return (
    <div style={styles.wrapper}>
      <HomeHeader />

      {/* ✅ Hero Section */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <h1 style={styles.title}>
          Welcome, <span style={styles.gradientText}>Admin</span>
        </h1>
        <p style={styles.subtitle}>
          Manage users, content, and session insights all from this powerful admin panel.
        </p>
        <div style={styles.buttonGroup}>
          <button className="button" style={styles.secondaryButton} onClick={scrollToFeatures}>View Features</button>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section ref={featuresRef} style={styles.section}>
        <h2 style={styles.sectionTitle}>Admin Capabilities</h2>
        <div style={styles.featureGrid}>
          {adminFeatures.map((feature, idx) => (
            <div key={idx} className="card" style={{ ...styles.card, animationDelay: `${idx * 0.2}s` }}>
              <div style={styles.cardIcon}>{feature.icon}</div>
              <h3 style={styles.cardTitle}>{feature.title}</h3>
              <p style={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ✅ About Section */}
      <section style={styles.aboutSection}>
        <img
  src="https://i.pinimg.com/1200x/ef/5c/8a/ef5c8a635efba25b11dad0035739b1d9.jpg"
  alt="Meditation scene in nature"
  style={styles.aboutImage}
/>
        <div style={styles.aboutText}>
          <h2 style={styles.sectionTitle}>About ZenSpace</h2>
          <p style={styles.subtitle}>
            ZenSpace is your personal guide to inner peace. Whether you're a beginner or a seasoned meditator,
            we offer tools, insights, and personalized paths to help you grow a mindful lifestyle.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="ctaSection" style={styles.ctaSection}>
        <h2 style={styles.sectionTitle}>Ready to Begin Your Mindfulness Journey?</h2>
        <p style={styles.subtitle}>
          Join our community and discover the peace that lies within you. Your transformation starts now.
        </p>
        <button className="button" style={styles.primaryButton} onClick={() => navigate('/register')}>Start Meditating Today</button>
      </section>

      <style>{`
        @keyframes fadeInSection {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);
          border: 2px solid #d8b4fe;
        }
        .button:hover {
          transform: scale(1.05);
          background: linear-gradient(to right, #c084fc, #9333ea);
          color: #fff !important;
          box-shadow: 0 6px 20px rgba(155, 89, 182, 0.3);
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100vw',
    marginTop: '60px',
    fontFamily: '"Segoe UI", sans-serif',
    overflowX: 'hidden',
    color: '#333',
    background: '#fff',
  },
  hero: {
    position: 'relative',
    padding: '100px 20px',
    textAlign: 'center',
    background: 'linear-gradient(#d7a9f2, #b063dc, #a035e7, #9a21e0)',
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent)',
    zIndex: 0,
  },
  title: {
    position: 'relative',
    fontSize: '3.5rem',
    fontWeight: 700,
    zIndex: 1,
  },
  gradientText: {
    background: 'linear-gradient(to right, #ffb1fa, #b48cff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  subtitle: {
    position: 'relative',
    fontSize: '1.2rem',
    maxWidth: '700px',
    margin: '0 auto 30px',
    zIndex: 1,
  },
  buttonGroup: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    zIndex: 1,
    flexWrap: 'wrap',
  },
  secondaryButton: {
    padding: '12px 28px',
    backgroundColor: '#fff',
    color: '#632680',
    border: '2px solid #d19ef3',
    borderRadius: '30px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  section: {
    padding: '80px 20px',
    textAlign: 'center',
    background: '#fff',
  },
  sectionTitle: {
    fontSize: '2.4rem',
    marginBottom: '40px',
    color: '#3b0952',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    background: 'linear-gradient(to right, #d1a3ee, #9261ce, #813897)',
    borderRadius: '20px',
    padding: '25px',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 8px 24px rgba(248, 206, 245, 0.77)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    border: '1px solid rgba(241, 178, 232, 0.8)',
  },
  cardIcon: {
    fontSize: '2.4rem',
    marginBottom: '15px',
    animation: 'floatIcon 3s ease-in-out infinite',
  },
  cardTitle: {
    fontSize: '1.4rem',
    marginBottom: '10px',
    color: '#fff',
  },
  cardDesc: {
    fontSize: '1rem',
    color: '#f0e6f6',
  },

  aboutSection: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
    backgroundColor: '#fdf7ff',
  },
  aboutImage: {
    width: '300px',
    borderRadius: '20px',
    margin: '20px',
  },
  aboutText: {
    maxWidth: '500px',
    margin: '20px',
  },
  footer: {
    background: '#4b1a7f',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  },
  footerLink: {
    color: '#fff',
    margin: '0 8px',
    textDecoration: 'none',
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #dec5ea 0%, #9a60c9 100%)',
    padding: '80px 20px',
    textAlign: 'center',
  },
};

export default AdminHome;
