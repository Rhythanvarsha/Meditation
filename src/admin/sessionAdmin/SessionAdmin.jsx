import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    audioUrl: '',
    durationInMinutes: '',
    category: '',
  });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem('token'); // assuming JWT is stored in localStorage

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchSessions = async () => {
    try {
      const res = await axios.get('https://meditation-backend-1.onrender.com/api/sessions', axiosConfig);
      setSessions(res.data);
    } catch (err) {
      console.error('Error fetching sessions:', err);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`http://localhost:8080/api/sessions/${editingId}`, form, axiosConfig);
      } else {
        await axios.post('http://localhost:8080/api/sessions', form, axiosConfig);
      }

      setForm({
        title: '',
        description: '',
        audioUrl: '',
        durationInMinutes: '',
        category: '',
      });
      setEditingId(null);
      fetchSessions();
    } catch (err) {
      console.error('Error saving session:', err);
    }
  };

  const handleEdit = (session) => {
    setForm(session);
    setEditingId(session.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/sessions/${id}`, axiosConfig);
      fetchSessions();
    } catch (err) {
      console.error('Error deleting session:', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin - Manage Meditation Sessions</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          name="title"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="audioUrl"
          value={form.audioUrl}
          placeholder="Audio URL"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="durationInMinutes"
          value={form.durationInMinutes}
          placeholder="Duration (minutes)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          value={form.category}
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} Session</button>
      </form>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Audio URL</th>
            <th>Duration</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.title}</td>
              <td>{session.description}</td>
              <td><a href={session.audioUrl} target="_blank" rel="noreferrer">Link</a></td>
              <td>{session.durationInMinutes} min</td>
              <td>{session.category}</td>
              <td>
                <button onClick={() => handleEdit(session)}>Edit</button>
                <button onClick={() => handleDelete(session.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSessions;
