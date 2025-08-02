import React, { useState } from 'react';
import axios from 'axios';
import AdminHeaderSession from './AdminHeaderSession';
import { useNavigate } from 'react-router-dom';

const AdminSessionAdd = () => {
  const navigate = useNavigate();

  const [sessionData, setSessionData] = useState({
    title: '',
    description: '',
    audioUrl: '',
    durationInMinutes: '',
    category: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setSessionData({ ...sessionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      await axios.post(
        'https://meditation-backend-1.onrender.com/api/sessions',
        sessionData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess('Session added successfully!');
      setError('');
      setSessionData({
        title: '',
        description: '',
        audioUrl: '',
        durationInMinutes: '',
        category: ''
      });

      setTimeout(() => navigate('/returnHome'), 2000);
    } catch (err) {
      console.error(err);
      setError('Failed to add session. Check your inputs or admin access.');
      setSuccess('');
    }
  };

  return (
    <div className="add-session-page">
      <AdminHeaderSession />

      <style>{`
        .add-session-page {
          background-color: #f7f3fc;
          margin-top: 120px;
          min-height: 100vh;
          color: #2d0f52ff;
          padding: 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .session-form-container {
          max-width: 600px;
          background-color: #ffffff;
          margin: 40px auto;
          padding: 30px;
          color: #2d0f52ff;
          border-radius: 16px;
          box-shadow: 0 6px 12px rgba(150, 100, 200, 0.2);
          border: 1px solid #e4d4f4;
        }

        .session-form-container h2 {
          font-size: 26px;
          color: #6b3fa0;
          margin-bottom: 20px;
          text-align: center;
        }

        .session-form-container input,
        .session-form-container textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 16px;
          border-radius: 10px;
          border: 1px solid #ccc;
          background-color: #faf7ff;
          font-size: 15px;
        }

        .session-form-container input:focus,
        .session-form-container textarea:focus {
          border-color: #c59fff;
          outline: none;
        }

        .submit-btn {
          background-color: #a678d1;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 10px;
          width: 100%;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #8b5cc4;
        }

        .success-msg {
          color: #2e8b57;
          margin-bottom: 10px;
          text-align: center;
        }

        .error-msg {
          color: #c0392b;
          margin-bottom: 10px;
          text-align: center;
        }
      `}</style>

      <div className="session-form-container">
        <h2>Add New Meditation Session</h2>

        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={sessionData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={sessionData.description}
            onChange={handleChange}
            rows={3}
            required
          />
          <input
            type="text"
            name="audioUrl"
            placeholder="Audio URL"
            value={sessionData.audioUrl}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="durationInMinutes"
            placeholder="Duration (in minutes)"
            value={sessionData.durationInMinutes}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category (e.g., mindfulness)"
            value={sessionData.category}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            Add Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSessionAdd;
