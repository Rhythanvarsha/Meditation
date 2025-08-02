import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminHeaderSession = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="admin-session-header">
      <style>{`
        .admin-session-header {
          width: 100%;
          background: #cc9ef1ff;
          color: #32092cff;
          font-family: 'Segoe UI', sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          height: 140px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          height: 100%;
        }

        .navbar h1 {
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav-links a {
          color: #330b3cff;
          text-decoration: none;
          font-size: 16px;
          padding: 8px 18px;
          border-radius: 6px;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .nav-links a:hover {
          background-color: rgba(240, 196, 244, 0.84);
          transform: scale(1.05);
        }

        .nav-links button {
          background-color: #30082bff;
          border: none;
          color: #fff;
          padding: 8px 18px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .nav-links button:hover {
          background-color: #f282f2ff;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px 20px;
          }

          .nav-links {
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
            width: 100%;
          }

          .nav-links a,
          .nav-links button {
            width: 100%;
            text-align: left;
          }
        }
      `}</style>

      <div className="navbar">
        <h1>ZenSpace Session Management</h1>
        <div className="nav-links">
          <Link to="/adminSessionHome">Home</Link>
          <Link to="/adminSessionDisplay">Display</Link>
          <Link to="/adminSessionAdd">Add Session</Link>
           <Link to="/returnHome">Return Home</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeaderSession;
