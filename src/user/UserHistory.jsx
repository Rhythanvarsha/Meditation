import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserHeader from './UserHeader';

const UserHistory = () => {
  const [history, setHistory] = useState([]);
  const [sessionId, setSessionId] = useState('');
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [count, setCount] = useState(0);
  const [completeId, setCompleteId] = useState('');
  const [message, setMessage] = useState('');

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchHistory();
    fetchCount();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("https://meditation-backend-1.onrender.com/api/history", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHistory(res.data);
      setFilteredHistory(res.data);
    } catch (err) {
      console.error('Failed to fetch history:', err);
    }
  };

  const fetchCount = async () => {
    try {
      const res = await axios.get("https://meditation-backend-1.onrender.com/api/history/count", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCount(res.data);
    } catch (err) {
      console.error('Failed to fetch count:', err);
    }
  };

  const handleFilter = () => {
    if (sessionId === '') {
      setFilteredHistory(history);
    } else {
      const filtered = history.filter(
        (h) => h.session && h.session.id.toString() === sessionId
      );
      setFilteredHistory(filtered);
    }
  };

  const markAsCompleted = async () => {
    if (!completeId) {
      setMessage("Please enter a session ID.");
      return;
    }

    try {
      await axios.post(
        `https://meditation-backend-1.onrender.com/api/history/complete/${completeId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(`✅ Session ${completeId} marked as completed.`);
      fetchHistory();
      fetchCount();
      setCompleteId('');
    } catch (err) {
      setMessage("❌ Error marking session as completed.");
      console.error(err);
    }
  };

  return (
    <div className="history-wrapper">
      <UserHeader />
      <style>{`
        .history-wrapper {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #fce3ff 0%, #edf6ff 100%);
          padding: 50px 20px;
          min-height: 100vh;
          margin-top: 120px;
        }

        .history-wrapper h2 {
          font-size: 32px;
          color: #2d004d;
          text-align: center;
          margin-bottom: 10px;
        }

        .history-wrapper p {
          font-size: 18px;
          color: #333;
          text-align: center;
        }

        .section {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin: 20px auto;
          max-width: 600px;
        }

        .section input {
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid #ccc;
          width: 250px;
          font-size: 16px;
        }

        .section button {
          padding: 10px 18px;
          background-color: #50005e;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .section button:hover {
          background-color: #d86dda;
          transform: scale(1.05);
        }

        .message {
          text-align: center;
          margin-top: 12px;
          font-weight: 500;
          color: #155724;
          background: #d4edda;
          padding: 10px;
          border-radius: 8px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        table {
          width: 100%;
          max-width: 1000px;
          margin: 30px auto;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        th, td {
          padding: 16px 20px;
          border-bottom: 1px solid #f1e7f2;
          text-align: left;
          color: #3e005c;
        }

        th {
          background-color: #a457dd;
          color: white;
          font-size: 16px;
        }

        tr:hover {
          background-color: #f9f3ff;
        }

        @media (max-width: 768px) {
          .section {
            flex-direction: column;
            align-items: stretch;
          }

          .section input,
          .section button {
            width: 100%;
          }

          table {
            font-size: 14px;
          }
        }
      `}</style>

      <h2>🧘 My Meditation History</h2>
      <p>Total Sessions Completed: <strong>{count}</strong></p>

      <div className="section">
        <input
          type="text"
          placeholder="Filter by Session ID"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>

      <div className="section">
        <input
          type="text"
          placeholder="Enter Session ID to Complete"
          value={completeId}
          onChange={(e) => setCompleteId(e.target.value)}
        />
        <button onClick={markAsCompleted}>Mark Completed</button>
      </div>

      {message && <p className="message">{message}</p>}

      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Title</th>
            <th>Date Completed</th>
          </tr>
        </thead>
        <tbody>
          {filteredHistory.map((h, i) => (
            <tr key={i}>
              <td>{h.session?.id}</td>
              <td>{h.session?.title}</td>
              <td>{h.dateCompleted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserHistory;
