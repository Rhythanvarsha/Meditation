




// // import React, { useRef, useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import UserHeader from './UserHeader';

// // const HomeUser = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const featuresRef = useRef(null);

// //   // Smooth scroll function
// //   const scrollToFeatures = () => {
// //     featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   };

 

// //   const features = [
// //     {
// //       icon: "🎧",
// //       title: 'Guided Meditations',
// //       description: 'Professional guided sessions for all levels, from beginner to advanced practitioners.'
// //     },
// //     {
// //       icon: "⏱️",
// //       title: 'Flexible Durations',
// //       description: 'Choose from 5-minute quick sessions to hour-long deep meditation experiences.'
// //     },
// //     {
// //       icon: "👨‍🏫",
// //       title: 'Expert Teachers',
// //       description: 'Learn from certified meditation instructors and mindfulness experts.'
// //     },
// //     {
// //       icon: "✨",
// //       title: 'Personalized Experience',
// //       description: 'Track your progress and get personalized recommendations based on your practice.'
// //     },
// //     {
// //       icon: "🔐",
// //       title: 'Role-Based Access',
// //       description: 'Secure access and features tailored for users and admins based on their roles.'
// //     },
// //     {
// //       icon: "📊",
// //       title: 'Progress Tracking',
// //       description: 'Monitor your meditation streaks, session history, and growth over time.'
// //     }
// //   ];

// //   const benefits = [
// //     'Reduce stress and anxiety',
// //     'Improve focus and concentration',
// //     'Better sleep quality',
// //     'Enhanced emotional well-being',
// //     'Increased mindfulness in daily life'
// //   ];

// //   return (
// //     <div style={styles.wrapper}>
// //         <UserHeader />
      
// //       {/* ✅ Hero Section */}
// //       <section style={styles.hero}>
// //         <div style={styles.overlay}></div>
// //         <h1 style={styles.title}>
// //           Find Your Inner <span style={styles.gradientText}>Peace</span>
// //         </h1>
// //         <p style={styles.subtitle}>
// //           Discover tranquility through guided meditation. Join thousands on a journey to mindfulness,
// //           stress reduction, and personal growth.
// //         </p>
// //         <div style={styles.buttonGroup}>
// //           <button className="button" style={styles.primaryButton} onClick={() => navigate('/register')}>Start Your Journey</button>
// //           <button className="button" style={styles.secondaryButton} onClick={() => navigate('/login')}>Sign In</button>
// //           <button className="button" style={styles.secondaryButton} onClick={scrollToFeatures}>Explore Features</button>
// //         </div>
// //       </section>

// //       {/* ✅ Features Section */}
// //       <section ref={featuresRef} id="features" className="section" style={styles.section}>
// //         <h2 style={styles.sectionTitle}>Why Choose ZenSpace?</h2>
// //         <div style={styles.featureGrid}>
// //           {features.map((feature, idx) => (
// //             <div key={idx} className="card" style={{ ...styles.card, animationDelay: `${idx * 0.2}s` }}>
// //               <div style={styles.cardIcon}>{feature.icon}</div>
// //               <h3 style={styles.cardTitle}>{feature.title}</h3>
// //               <p style={styles.cardDesc}>{feature.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Benefits Section */}
// //       <section className="section1" style={styles.section1}>
// //         <h2 style={styles.sectionTitle}>Transform Your Life Through Meditation</h2>
// //         <p style={styles.subtitle}>
// //           Regular meditation practice brings profound changes to your mental, emotional, and physical well-being.
// //         </p>
// //         <ul style={styles.benefitList}>
// //           {benefits.map((item, i) => (
// //             <li key={i} style={styles.benefitItem}>✔ {item}</li>
// //           ))}
// //         </ul>
// //       </section>



// //       {/* ✅ About Section */}
// //       <section style={styles.aboutSection}>
// //         <img
// //   src="https://i.pinimg.com/1200x/ef/5c/8a/ef5c8a635efba25b11dad0035739b1d9.jpg"
// //   alt="Meditation scene in nature"
// //   style={styles.aboutImage}
// // />
// //         <div style={styles.aboutText}>
// //           <h2 style={styles.sectionTitle}>About ZenSpace</h2>
// //           <p style={styles.subtitle}>
// //             ZenSpace is your personal guide to inner peace. Whether you're a beginner or a seasoned meditator,
// //             we offer tools, insights, and personalized paths to help you grow a mindful lifestyle.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Call To Action */}
// //       <section className="ctaSection" style={styles.ctaSection}>
// //         <h2 style={styles.sectionTitle}>Ready to Begin Your Mindfulness Journey?</h2>
// //         <p style={styles.subtitle}>
// //           Join our community and discover the peace that lies within you. Your transformation starts now.
// //         </p>
// //         <button className="button" style={styles.primaryButton} onClick={() => navigate('/register')}>Start Meditating Today</button>
// //       </section>

// //       {/* Animation & Hover Styles */}
// //       <style>{`
// //         @keyframes fadeInSection {
// //           from { opacity: 0; transform: translateY(60px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         .section, .section1, .ctaSection {
// //           animation: fadeInSection 1.2s ease-in-out both;
// //         }

// //         .card:hover {
// //           transform: translateY(-12px) scale(1.03);
// //           box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);
// //           border: 2px solid #d8b4fe;
// //         }

// //         .button:hover {
// //           transform: scale(1.05);
// //           background: linear-gradient(to right, #c084fc, #9333ea);
// //           color: #fff !important;
// //           box-shadow: 0 6px 20px rgba(155, 89, 182, 0.3);
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // const styles = {
// //   wrapper: {
// //     width: '100vw',
// //     fontFamily: '"Segoe UI", sans-serif',
// //     overflowX: 'hidden',
// //     color: '#333',
// //     background: ' #fff',
// //     fixed: true,
// //   },
  
// //   logo: {
// //     fontWeight: 'bold',
// //     fontSize: '1.5rem',
// //     color: '#7c3aed',

// //   },
  
// //   hero: {
// //     position: 'relative',
// //     padding: '100px 20px',
// //     textAlign: 'center',
// //     background: 'linear-gradient( #d7a9f2  , #b063dcff , #a035e7ff , #9a21e0ff )',
// //     color: '#fff',
// //   },
// //   overlay: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05), transparent)',
// //     zIndex: 0,
// //   },
// //   title: {
// //     position: 'relative',
// //     fontSize: '3.5rem',
// //     fontWeight: 700,
// //     marginBottom: '20px',
// //     zIndex: 1,
// //   },
// //   gradientText: {
// //     background: 'linear-gradient(to right, #ffb1fa, #b48cff)',
// //     WebkitBackgroundClip: 'text',
// //     WebkitTextFillColor: 'transparent',
// //     display: 'inline-block',
// //   },
// //   subtitle: {
// //     position: 'relative',
// //     fontSize: '1.2rem',
// //     maxWidth: '700px',
// //     margin: '0 auto 30px',
// //     zIndex: 1,
// //   },
// //   buttonGroup: {
// //     position: 'relative',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     gap: '15px',
// //     zIndex: 1,
// //     flexWrap: 'wrap',
// //   },
// //   primaryButton: {
// //     padding: '12px 28px',
// //     background: '#632680',
// //     color: '#fff',
// //     //borderImage: 'linear-gradient(45deg, #d946ef, #7c3aed)',
// //     borderImageSlice: 1,
// //     borderRadius: '30px',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// //   },
// //   secondaryButton: {
// //     padding: '12px 28px',
// //     backgroundColor: '#fff',
// //     color: '#632680',
// //     border: '2px solid #d19ef3ff',
// //     borderRadius: '30px',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //     transition: 'transform 0.3s ease',
// //   },
// //   section: {
// //     padding: '80px 20px',
// //     textAlign: 'center',
// //     background: '#fff',
// //   },
// //   section1: {
// //     textAlign: 'center',
// //     background: 'linear-gradient(to right, #cca0ebff, #9d61ceff, #773897ff)',
// //     width: '60%',
// //     margin: '0 auto',
// //     borderRadius: '20px',
// //     padding: '80px 20px',
// //     marginBottom: '40px',
// //     shadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
// //     // border: '4px solid transparent',
// //     backgroundClip: 'padding-box, border-box',
// //     backgroundOrigin: 'border-box',
// //   },
// //   sectionTitle: {
// //     fontSize: '2.4rem',
// //     marginBottom: '40px',
// //     color: '#3b0952',
// //   },
// //   featureGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
// //     gap: '30px',
// //     maxWidth: '1100px',
// //     margin: '0 auto',
// //   },
// //   card: {
// //     background: 'linear-gradient(to right, #d1a3eeff, #9261ceff, #813897ff)',
// //     borderRadius: '20px',
// //     padding: '25px',
// //     backdropFilter: 'blur(12px)',
// //     boxShadow: '0 8px 24px rgba(248, 206, 245, 0.77)',
// //     transition: 'transform 0.4s ease, box-shadow 0.4s ease',
// //     border: '1px solid rgba(241, 178, 232, 0.8)',
// //   },
// //   cardIcon: {
// //     fontSize: '2.4rem',
// //     marginBottom: '15px',
// //     animation: 'floatIcon 3s ease-in-out infinite',
// //   },
// //   cardTitle: {
// //     fontSize: '1.4rem',
// //     marginBottom: '10px',
// //     color: '#6a1b9a',
// //   },
// //   cardDesc: {
// //     fontSize: '1rem',
// //     color: '#444',
// //   },
// //   benefitList: {
// //     listStyle: 'none',
// //     padding: 0,
// //     margin: '30px auto 0',
// //     maxWidth: '500px',
// //     textAlign: 'left',
// //   },
// //   benefitItem: {
// //     fontSize: '1.1rem',
// //     marginBottom: '10px',
// //     color: '#333',
// //   },
// //   ctaSection: {
// //     background: 'linear-gradient(135deg, #dec5eaff 0%, #9a60c9ff 100%)',
// //     padding: '80px 20px',
// //     textAlign: 'center',
// //     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  
// //   },
// //   aboutSection: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: '60px 20px',
// //     backgroundColor: '#fdf7ff',
// //   },
// //   aboutImage: {
// //     width: '300px',
// //     borderRadius: '20px',
// //     margin: '20px',
// //   },
// //   aboutText: {
// //     maxWidth: '500px',
// //     margin: '20px',
// //   },
// //   footer: {
// //     background: '#4b1a7f',
// //     color: '#fff',
// //     padding: '40px 20px',
// //     textAlign: 'center',
// //   },
// //   footerLink: {
// //     color: '#fff',
// //     margin: '0 8px',
// //     textDecoration: 'none',
// //   },
// // };


// // export default HomeUser;
// import React, { useRef, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import UserHeader from './UserHeader';

// const HomeUser = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const featuresRef = useRef(null);

//   const scrollToFeatures = () => {
//     featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

  // const features = [
  //   {
  //     icon: "🎧",
  //     title: 'Guided Meditations',
  //     description: 'Professional guided sessions for all levels, from beginner to advanced practitioners.'
  //   },
  //   {
  //     icon: "⏱️",
  //     title: 'Flexible Durations',
  //     description: 'Choose from 5-minute quick sessions to hour-long deep meditation experiences.'
  //   },
  //   {
  //     icon: "👨‍🏫",
  //     title: 'Expert Teachers',
  //     description: 'Learn from certified meditation instructors and mindfulness experts.'
  //   },
  //   {
  //     icon: "✨",
  //     title: 'Personalized Experience',
  //     description: 'Track your progress and get personalized recommendations based on your practice.'
  //   },
  //   {
  //     icon: "🔐",
  //     title: 'Role-Based Access',
  //     description: 'Secure access and features tailored for users and admins based on their roles.'
  //   },
  //   {
  //    icon: "📌",
  //   title: 'Quote Exploration',
  //   description: 'Explore a curated collection of inspiring quotes to enhance your meditation experience.'
  //   }
  // ];

//   const benefits = [
//     'Reduce stress and anxiety',
//     'Improve focus and concentration',
//     'Better sleep quality',
//     'Enhanced emotional well-being',
//     'Increased mindfulness in daily life'
//   ];

//   return (
//     <div style={styles.wrapper}>
//       <UserHeader />

//       {/* Hero Section */}
//       <section style={styles.hero}>
//         <div style={styles.overlay}></div>
//         <h1 style={styles.title}>
//           Find Your Inner <span style={styles.gradientText}>Peace</span>
//         </h1>
//         <p style={styles.subtitle}>
//           Discover tranquility through guided meditation. Join thousands on a journey to mindfulness,
//           stress reduction, and personal growth.
//         </p>
//         <div style={styles.buttonGroup}>
//           <button style={styles.primaryButton} onClick={() => navigate('/register')}>Start Your Journey</button>
//           <button style={styles.secondaryButton} onClick={() => navigate('/login')}>Sign Out</button>
//           <button style={styles.secondaryButton} onClick={scrollToFeatures}>Explore Features</button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section ref={featuresRef} style={styles.section}>
//         <h2 style={styles.sectionTitle}>Why Choose ZenSpace?</h2>
//         <div style={styles.featureGrid}>
//           {features.map((feature, idx) => (
//             <div key={idx} style={{ ...styles.card, animationDelay: `${idx * 0.2}s` }}>
//               <div style={styles.cardIcon}>{feature.icon}</div>
//               <h3 style={styles.cardTitle}>{feature.title}</h3>
//               <p style={styles.cardDesc}>{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Benefits Section
//       <section style={styles.section1}>
//         <h2 style={styles.sectionTitle}>Transform Your Life Through Meditation</h2>
//         <p style={styles.subtitle}>
//           Regular meditation practice brings profound changes to your mental, emotional, and physical well-being.
//         </p>
//         <ul style={styles.benefitList}>
//           {benefits.map((item, i) => (
//             <li key={i} style={styles.benefitItem}>✔ {item}</li>
//           ))}
//         </ul>
//       </section> */}

//       {/* About Section */}
//       <section style={styles.aboutSection}>
//         <img
//           src="https://i.pinimg.com/1200x/ef/5c/8a/ef5c8a635efba25b11dad0035739b1d9.jpg"
//           alt="Meditation scene"
//           style={styles.aboutImage}
//         />
//         <div style={styles.aboutText}>
//           <h2 style={styles.sectionTitle}>About ZenSpace</h2>
//           <p style={styles.subtitle}>
//             ZenSpace is your personal guide to inner peace. Whether you're a beginner or a seasoned meditator,
//             we offer tools, insights, and personalized paths to help you grow a mindful lifestyle.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={styles.ctaSection}>
//         <h2 style={styles.sectionTitle}>Ready to Begin Your Mindfulness Journey?</h2>
//         <p style={styles.subtitle}>
//           Join our community and discover the peace that lies within you. Your transformation starts now.
//         </p>
//         <button style={styles.primaryButton} onClick={() => navigate('/register')}>Start Meditating Today</button>
//       </section>

//       <style>{`
//         @keyframes fadeInSection {
//           from { opacity: 0; transform: translateY(60px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .section, .section1, .ctaSection {
//           animation: fadeInSection 1.2s ease-in-out both;
//         }

//         .card:hover {
//           transform: translateY(-12px) scale(1.03);
//           box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);
//           border: 2px solid #d8b4fe;
//         }

//         .button:hover {
//           transform: scale(1.05);
//           background: linear-gradient(to right, #c084fc, #9333ea);
//           color: #fff !important;
//           box-shadow: 0 6px 20px rgba(155, 89, 182, 0.3);
//         }

//         @media (max-width: 768px) {
//           h1 { font-size: 2.2rem !important; }
//           h2 { font-size: 1.6rem !important; }
//           .card { padding: 20px !important; }
//           .benefitList { padding: 0 16px !important; }
//         }
//       `}</style>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     width: '100vw',
//     minHeight: '200vh',
//     fontFamily: '"Segoe UI", sans-serif',
//     overflowX: 'hidden',
//     color: '#333',
//     background: '#fff',
//     paddingTop: '50px',
//   },
//   hero: {
//     position: 'relative',
//     padding: '100px 20px',
//     textAlign: 'center',
//     background: 'linear-gradient( #d7a9f2  , #b063dc , #a035e7 , #9a21e0 )',
//     color: '#fff',
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0, left: 0, right: 0, bottom: 0,
//     background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05), transparent)',
//     zIndex: 0,
//   },
//   title: {
//     position: 'relative',
//     fontSize: '3.5rem',
//     fontWeight: 700,
//     marginBottom: '20px',
//     zIndex: 1,
//   },
//   gradientText: {
//     background: 'linear-gradient(to right, #ffb1fa, #b48cff)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     display: 'inline-block',
//   },
//   subtitle: {
//     position: 'relative',
//     fontSize: '1.2rem',
//     maxWidth: '700px',
//     margin: '0 auto 30px',
//     zIndex: 1,
//   },
//   buttonGroup: {
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '15px',
//     zIndex: 1,
//     flexWrap: 'wrap',
//   },
//   primaryButton: {
//     padding: '12px 28px',
//     background: '#632680',
//     color: '#fff',
//     borderRadius: '30px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   },
//   secondaryButton: {
//     padding: '12px 28px',
//     backgroundColor: '#fff',
//     color: '#632680',
//     border: '2px solid #d19ef3',
//     borderRadius: '30px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease',
//   },
//   section: {
//     padding: '80px 20px',
//     textAlign: 'center',
//     background: '#fff',
//   },
//   section1: {
//     textAlign: 'center',
//     background: 'linear-gradient(to right, #cca0eb, #9d61ce, #773897)',
//     width: '90%',
//     maxWidth: '850px',
//     margin: '0 auto 40px',
//     borderRadius: '20px',
//     padding: '60px 20px',
//   },
//   sectionTitle: {
//     fontSize: '2.4rem',
//     marginBottom: '40px',
//     color: '#3b0952',
//   },
//   featureGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
//     gap: '30px',
//     maxWidth: '1100px',
//     margin: '0 auto',
//   },
//   card: {
//     background: 'linear-gradient(to right, #d1a3ee, #9261ce, #813897)',
//     borderRadius: '20px',
//     padding: '25px',
//     backdropFilter: 'blur(12px)',
//     boxShadow: '0 8px 24px rgba(248, 206, 245, 0.77)',
//     transition: 'transform 0.4s ease, box-shadow 0.4s ease',
//     border: '1px solid rgba(241, 178, 232, 0.8)',
//   },
//   cardIcon: {
//     fontSize: '2.4rem',
//     marginBottom: '15px',
//     animation: 'floatIcon 3s ease-in-out infinite',
//   },
//   cardTitle: {
//     fontSize: '1.4rem',
//     marginBottom: '10px',
//     color: '#6a1b9a',
//   },
//   cardDesc: {
//     fontSize: '1rem',
//     color: '#444',
//   },
//   benefitList: {
//     listStyle: 'none',
//     padding: 0,
//     margin: '30px auto 0',
//     maxWidth: '500px',
//     textAlign: 'left',
//   },
//   benefitItem: {
//     fontSize: '1.1rem',
//     marginBottom: '10px',
//     color: '#fff',
//   },
//   aboutSection: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '60px 20px',
//     backgroundColor: '#fdf7ff',
//   },
//   aboutImage: {
//     width: '300px',
//     borderRadius: '20px',
//     margin: '20px',
//   },
//   aboutText: {
//     maxWidth: '500px',
//     margin: '20px',
//   },
//   ctaSection: {
//     background: 'linear-gradient(135deg, #dec5ea 0%, #9a60c9 100%)',
//     padding: '80px 20px',
//     textAlign: 'center',
//   },
// };

// export default HomeUser;






import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import UserHeader from './UserHeader';

const HomeUser = () => {
  const featuresRef = useRef(null);
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: "🎧",
      title: 'Guided Meditations',
      description: 'Professional guided sessions for all levels, from beginner to advanced practitioners.',
    },
    {
      icon: "⏱️",
      title: 'Flexible Durations',
      description: 'Choose from 5-minute quick sessions to hour-long deep meditation experiences.',
    },
    {
      icon: "👨‍🏫",
      title: 'Expert Teachers',
      description: 'Learn from certified meditation instructors and mindfulness experts.',
    },
    {
      icon: "✨",
      title: 'Personalized Experience',
      description: 'Track your progress and get personalized recommendations based on your practice.',
    },
    {
      icon: "🔐",
      title: 'Role-Based Access',
      description: 'Secure access and features tailored for users and admins based on their roles.',
    },
    {
      icon: "📌",
      title: 'Quote Exploration',
      description: 'Explore a curated collection of inspiring quotes to enhance your meditation experience.',
    },
  ];

  return (
    <div style={styles.wrapper}>
      <UserHeader />

      {/* ✅ Hero Section */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <h1 style={styles.title}>
          Welcome, <span style={styles.gradientText}>User</span>
        </h1>
        <p style={styles.subtitle}>
          Dive into daily practices, explore guided sessions, and track your mindfulness progress with ZenSpace.
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.secondaryButton} onClick={scrollToFeatures}>View Features</button>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section ref={featuresRef} style={styles.section}>
        <h2 style={styles.sectionTitle}>What You Can Do</h2>
        <div style={styles.featureGrid}>
          {features.map((feature, idx) => (
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

      {/* ✅ Call To Action */}
      <section className="ctaSection" style={styles.ctaSection}>
        <h2 style={styles.sectionTitle}>Ready to Begin Your Mindfulness Journey?</h2>
        <p style={styles.subtitle}>
          Join our community and discover the peace that lies within you. Your transformation starts now.
        </p>
        <button className="button" style={styles.primaryButton} onClick={() => navigate('/register')}>
          Start Meditating Today
        </button>
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
  ctaSection: {
    background: 'linear-gradient(135deg, #dec5ea 0%, #9a60c9 100%)',
    padding: '80px 20px',
    textAlign: 'center',
  },
  primaryButton: {
    padding: '14px 32px',
    backgroundColor: '#7e22ce',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default HomeUser;
