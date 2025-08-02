import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeHeader from '../HomeHeader';
import Footer from '../manageUser/Footer';

const HistoryAdmin = () => {
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [sessionFilter, setSessionFilter] = useState('');
  const [count, setCount] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("https://meditation-backend-1.onrender.com/api/history/all", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("✅ History data:", res.data);
      setHistory(res.data);
      setFilteredHistory(res.data);
      setCount(res.data.length); // ✅ Admin sees count from all history
    } catch (err) {
      console.error('❌ Failed to fetch history:', err);
    }
  };

  const handleFilter = () => {
    if (!sessionFilter.trim()) {
      setFilteredHistory(history);
    } else {
      const filtered = history.filter(
        (entry) => entry.session?.id?.toString() === sessionFilter.trim()
      );
      setFilteredHistory(filtered);
    }
  };

  const handleReset = () => {
    setSessionFilter('');
    setFilteredHistory(history);
  };

  return (
    <div className="history-wrapper">
      <HomeHeader />
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
          flex-wrap: wrap;
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
          background-color: #d882e7ff;
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

      <h2>🧘 Meditation History (Admin)</h2>
      <p>Total Sessions Completed: <strong>{count}</strong></p>

      <div className="section">
        <input
          type="text"
          placeholder="Filter by Session ID"
          value={sessionFilter}
          onChange={(e) => setSessionFilter(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Title</th>
            <th>Date Completed</th>
          </tr>
        </thead>
        <tbody>
          {filteredHistory.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                No history data found
              </td>
            </tr>
          ) : (
            filteredHistory.map((entry, index) => (
              <tr key={index}>
                <td>{entry.session?.id || 'N/A'}</td>
                <td>{entry.session?.title || 'N/A'}</td>
                <td>{entry.dateCompleted || 'N/A'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default HistoryAdmin;
