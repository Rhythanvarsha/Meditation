import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Play, Clock } from 'lucide-react';
import UserHeader from './UserHeader';
const Session = () => {
  const [sessions, setSessions] = useState([]);
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('https://meditation-backend-1.onrender.com/api/sessions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(res.data)) {
        setSessions(res.data);
      } else {
        setError('Unexpected response format');
        setSessions([]);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch sessions');
    }
  };

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDurationChange = (e) => setDuration(e.target.value);

  const filteredSessions = sessions.filter((session) => {
    const matchesCategory = category ? session.category === category : true;
    const matchesDuration = duration ? session.durationInMinutes <= parseInt(duration) : true;
    return matchesCategory && matchesDuration;
  });

  return (
    <div style={styles.wrapper}>
            <UserHeader />

      <div style={styles.container}>
        <h2 style={styles.title}>🧘 Meditation Sessions</h2>

        <div style={styles.filterBox}>
          <select value={category} onChange={handleCategoryChange} style={styles.input}>
            <option value="">All Categories</option>
            <option value="Mindfulness">Mindfulness</option>
            <option value="Sleep">Sleep</option>
            <option value="Stress">Stress</option>
          </select>

          <select value={duration} onChange={handleDurationChange} style={styles.input}>
            <option value="">Any Duration</option>
            <option value="5">≤ 5 mins</option>
            <option value="10">≤ 10 mins</option>
            <option value="15">≤ 15 mins</option>
          </select>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.grid}>
          {filteredSessions.map((session) => (
            <div key={session.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{session.title}</h3>
              <p style={styles.category}>{session.category}</p>
              <p style={styles.description}>{session.description}</p>
              <p style={styles.duration}>
                <Clock size={16} style={{ marginRight: 6 }} />
                {session.durationInMinutes} mins
              </p>
              <a href={session.audioUrl} target="_blank" rel="noopener noreferrer" style={styles.listenBtn}>
                <Play size={16} style={{ marginRight: 6 }} />
                Listen Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    marginTop:'200px',
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#fdf6ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container: {
    marginTop: '60px',
    width: '100%',
    padding: '2rem',
    maxWidth: '1200px',
    fontFamily: '"Segoe UI", sans-serif',
    boxSizing: 'border-box',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.6rem',
    color: '#5b0888',
    marginBottom: '1.5rem',
  },
  filterBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '2rem',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #d1a3ee',
    fontSize: '1rem',
    minWidth: '220px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    boxSizing: 'border-box',
  },
  card: {
    flex: '1 1 calc(33.33% - 40px)',
    maxWidth: '400px',
    minWidth: '280px',
    background: 'linear-gradient(to bottom right, #f3e8ff, #e9d5ff)',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    transition: '0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '1px solid #d8b4fe',
    boxSizing: 'border-box',
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#6a1b9a',
  },
  category: {
    fontStyle: 'italic',
    color: '#7c3aed',
    fontWeight: 500,
  },
  description: {
    fontSize: '1rem',
    color: '#333',
  },
  duration: {
    fontSize: '0.95rem',
    color: '#444',
    display: 'flex',
    alignItems: 'center',
  },
  listenBtn: {
    marginTop: '10px',
    padding: '10px 16px',
    textAlign: 'center',
    background: '#9333ea',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'background 0.3s',
  },
};

export default Session;
