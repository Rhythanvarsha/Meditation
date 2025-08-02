import React from 'react';
import AdminHeaderSession from './AdminHeaderSession';
import Footer from '../manageUser/Footer';
const AdminSessionHome = () => {
  return (
    <div>
      <AdminHeaderSession/>
      <style>{`
        body {
          margin-top:120px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: rgba(238, 222, 253, 1);
        }

        .admin-home {
          max-width: 800px;
         
          margin: 60px auto;
          background-color: #ffffff;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(186, 133, 255, 0.2);
          text-align: center;
        }

        .admin-home h1 {
          color: #8e44ad;
          margin-bottom: 20px;
        }

        .admin-home p {
          color: #5c5470;
          font-size: 18px;
          line-height: 1.6;
        }

        .highlight {
          background-color: #e8daef;
          padding: 6px 12px;
          border-radius: 8px;
          color: #6c3483;
          font-weight: 500;
        }

        .feature-box {
          margin-top: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .feature {
          background-color: #f4ecf7;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(186, 133, 255, 0.1);
        }

        .feature h3 {
          color: #7d3c98;
          margin-bottom: 10px;
        }

        .feature p {
          font-size: 15px;
          color: #4a4a4a;
        }
      `}</style>

      <div className="admin-home">
        <h1>Admin Session Management</h1>
        <p>
          Welcome to the <span className="highlight">ZenSpace Admin Panel</span> where you can
          efficiently manage guided meditation sessions for your users.
        </p>

        <div className="feature-box">
          <div className="feature">
            <h3>📥 Add Sessions</h3>
            <p>Create new meditation sessions with title, description, audio, duration, and category.</p>
          </div>
          <div className="feature">
            <h3>🛠️ Update Sessions</h3>
            <p>Edit existing sessions to reflect changes in content or correct mistakes.</p>
          </div>
          <div className="feature">
            <h3>🗑️ Delete Sessions</h3>
            <p>Remove outdated or irrelevant sessions from the platform.</p>
          </div>
          <div className="feature">
            <h3>📊 View All Sessions</h3>
            <p>Access a complete list of all meditation sessions currently available on ZenSpace.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminSessionHome;
