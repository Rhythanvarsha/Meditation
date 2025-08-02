import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeaderSession from './AdminHeaderSession'; // Optional header


const AdminSessionDisplay = () => {
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://meditation-backend-1.onrender.com/api/sessions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSessions(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch sessions. Please check your access or try again later.');
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="session-page">
      <AdminHeaderSession />

      <style>{`
        .session-page {
          background-color: #f6f0ff;
           margin-top: 120px;
          min-height: 100vh;
          padding: 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .session-list {
          max-width: 1000px;
          margin: 40px auto;
        }

        .session-card {
          background-color: white;
          border: 1px solid #d9c9f1;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(144, 101, 202, 0.1);
        }

        .session-card h3 {
          color: #6d3fa9;
          margin-bottom: 10px;
        }

        .session-card p {
          margin: 4px 0;
          color: #333;
        }

        .error-msg {
          color: #d9534f;
          text-align: center;
          font-weight: bold;
          margin-top: 20px;
        }
      `}</style>

      <div className="session-list">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">All Meditation Sessions</h2>

        {error && <p className="error-msg">{error}</p>}

        {sessions.length > 0 ? (
          sessions.map((session) => (
            <div key={session.id} className="session-card">
              <h3>{session.title}</h3>
              <p><strong>Description:</strong> {session.description}</p>
              <p><strong>Audio URL:</strong> <a href={session.audioUrl} target="_blank" rel="noreferrer">{session.audioUrl}</a></p>
              <p><strong>Duration:</strong> {session.durationInMinutes} minutes</p>
              <p><strong>Category:</strong> {session.category}</p>
            </div>
          ))
        ) : (
          !error && <p className="text-center text-gray-600">No sessions available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminSessionDisplay;
