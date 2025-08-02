import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="header">
      <style>{`
        .header {
          width: 100%;
          height: 100px;
          background-color: #cc9ef1ff; /* Lavender */
          color: #4B0082; /* Indigo */
          font-family: 'Segoe UI', sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          height: 150px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
        }

        .navbar h1 {
          margin: 0;
          font-size: 28px;
          color: #4B0082;
        }

        .nav-links {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .nav-links a {
          color: #4B0082;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 5px;
          background-color: #D8BFD8; /* Thistle */
          transition: background-color 0.3s, transform 0.2s;
        }

        .nav-links a:hover {
          background-color: #DDA0DD; /* Plum */
          transform: scale(1.05);
        }

        .nav-links button {
          background-color: #DA70D6; /* Orchid */
          color: white;
          border: none;
          padding: 8px 16px;
          font-weight: 500;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .nav-links button:hover {
          background-color: #BA55D3; /* MediumOrchid */
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav-links {
            flex-direction: column;
            width: 100%;
            margin-top: 10px;
          }
        }
      `}</style>

      <div className="navbar">
        <h1>Admin Dashboard</h1>
        <div className="nav-links">
          <Link to="/add">Add User</Link>
          <Link to="/userUpdate">Manage Users</Link>
           <Link to="/returnHome">Return Home</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
