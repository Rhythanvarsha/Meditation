import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserHeader from './UserHeader';
import Footer from '../admin/manageUser/Footer';
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("https://meditation-backend-1.onrender.com/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(response.data);
    } catch (err) {
      console.error("Error fetching user profile:", err);
      setError("Failed to load profile. Please login again.");
    }
  };

  return (
    <div className="profile-container">
      <UserHeader />
      <style>{`
        .profile-container {
          margin-top: 120px;
          padding: 50px 20px;
          background: linear-gradient(135deg, #eed5f1ff, #e6c2e8ff);
          font-family: 'Segoe UI', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          padding: 40px;
          max-width: 600px;
          width: 100%;
          text-align: center;
        }

        .profile-title {
          font-size: 30px;
          color: #4b007d;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .profile-field {
          margin: 16px 0;
          font-size: 18px;
          color: #333;
        }

        .profile-label {
          font-weight: bold;
          color: #6200b3;
          margin-right: 8px;
        }

        .error-message {
          color: #d8000c;
          background-color: #ffbaba;
          padding: 12px 20px;
          border-radius: 8px;
          max-width: 500px;
          margin: 40px auto 0;
          text-align: center;
        }
      `}</style>
    
      {error ? (
        <p className="error-message">{error}</p>
      ) : user ? (
        <div className="profile-card">
          <h2 className="profile-title">👤 My Profile</h2>
          <div className="profile-field">
            <span className="profile-label">Name:</span> {user.empName}
          </div>
          <div className="profile-field">
            <span className="profile-label">Username:</span> {user.userName}
          </div>
          <div className="profile-field">
            <span className="profile-label">Email:</span> {user.email}
          </div>
          <div className="profile-field">
            <span className="profile-label">Roles:</span>{" "}
            {user.roles.map(role => role.roleName).join(", ")}
          </div>
        </div>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>Loading profile...</p>
      )}
      <Footer />
    </div>
  );
};

export default UserProfile;
