import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./ManageHeader";
const HomeManageUser = () => {
  return (
    
    <div style={styles.wrapper}>
        <Header />
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <h1 style={styles.title}>
          Welcome, <span style={styles.gradientText}>Admin</span>
        </h1>
        <p style={styles.subtitle}>
          Manage all registered users from one central place.
        </p>
      </section>

      <section style={styles.dashboardSection}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>What You Can Do</h2>
          <ul style={styles.featureList}>
            <li>➕ Add new users with role-based access</li>
            <li>✏️ Edit existing user information</li>
            <li>🗑️ Delete users (only role <code style={styles.code}>USER</code>)</li>
            <li>🔍 View all users with filtering & sorting</li>
            <li>📊 Monitor user activity and login stats</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const styles = {
  wrapper: {
    marginTop: "130px",
    width: "100vw",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#333",
   
    backgroundColor: "#fefaff",
  },
  hero: {
    
    padding: "100px 20px",
    textAlign: "center",
    background: "linear-gradient( #d7a9f2, #b063dc, #a035e7, #9a21e0 )",
    color: "#fff",
  },
  overlay: {
   
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05), transparent)",
    zIndex: 0,
  },
  title: {
    position: "relative",
    fontSize: "3rem",
    fontWeight: 700,
    zIndex: 1,
  },
  gradientText: {
    background: "linear-gradient(to right, #ffb1fa, #b48cff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  },
  subtitle: {
    position: "relative",
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "0 auto",
    zIndex: 1,
    marginTop: "1rem",
  },
  dashboardSection: {
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(to right, #f3e8ff, #ede9fe)",
  },
  card: {
    maxWidth: "700px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(8px)",
    border: "1px solid #e9d5ff",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#7c3aed",
  },
  featureList: {
    listStyle: "none",
    paddingLeft: 0,
    textAlign: "left",
    lineHeight: "1.8",
    fontSize: "1.1rem",
    color: "#4b1a7f",
  },
  code: {
    backgroundColor: "#f3e8ff",
    padding: "2px 6px",
    borderRadius: "6px",
    fontFamily: "monospace",
  },
};

export default HomeManageUser;
