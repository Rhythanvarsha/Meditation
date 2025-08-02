import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeHeader from '../HomeHeader';

const Statistics = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://meditation-backend-1.onrender.com/api/stats/usage', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setStats(response.data);
      } catch (err) {
        setError('Failed to load usage statistics. You may not be authorized.');
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div style={styles.container}>
      <HomeHeader />
      <div style={styles.card}>
        <h2 style={styles.title}>📊 Platform Usage Statistics</h2>
        {error && <p style={styles.error}>{error}</p>}
        {!error && stats && (
          <div style={styles.statsGrid}>
            <div style={{ ...styles.statBox, ...styles.usersBox }}>
              <h3 style={styles.statHeading}>Total Users</h3>
              <p style={styles.statValue}>{stats.totalUsers}</p>
            </div>
            <div style={{ ...styles.statBox, ...styles.sessionsBox }}>
              <h3 style={styles.statHeading}>Total Sessions</h3>
              <p style={styles.statValue}>{stats.totalSessions}</p>
            </div>
            <div style={{ ...styles.statBox, ...styles.completionsBox }}>
              <h3 style={styles.statHeading}>Total Completions</h3>
              <p style={styles.statValue}>{stats.totalCompletions}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '200px',
    padding: '40px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    background: 'linear-gradient(to bottom right, #f3e5f5, #ede7f6)',
    minHeight: '100vh'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
    maxWidth: '800px',
    margin: '50px auto',
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  },
  title: {
    fontSize: '28px',
    color: '#6a1b9a',
    marginBottom: '30px',
    fontWeight: '600'
  },
  error: {
    color: 'red',
    fontWeight: '500'
  },
  statsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '20px',
    flexWrap: 'wrap'
  },
  statBox: {
    flex: '1 1 30%',
    minWidth: '200px',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fafafa',
    transition: 'transform 0.3s',
    cursor: 'default'
  },
  statHeading: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#4a148c'
  },
  statValue: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333'
  },
  usersBox: {
    borderLeft: '6px solid #42a5f5'
  },
  sessionsBox: {
    borderLeft: '6px solid #66bb6a'
  },
  completionsBox: {
    borderLeft: '6px solid #ffca28'
  }
};

export default Statistics;
