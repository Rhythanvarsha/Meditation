import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './ManageHeader';
import Footer from './Footer';

const Delete = () => {
  const { empId } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const fetchEmployeeById = async () => {
    try {
      const res = await axios.get(`https://meditation-backend-1.onrender.com/api/auth/${empId}`, authHeaders);
      setEmployee(res.data);
    } catch (err) {
      console.error('Failed to fetch employee:', err);
      setError('Failed to fetch employee data.');
    }
  };

  useEffect(() => {
    if (!token) {
      alert('You are not authorized. Please log in.');
      navigate('/login');
      return;
    }
    fetchEmployeeById();
  }, [empId]);

  const deleteEmployee = async () => {
    try {
      await axios.delete(`https://meditation-backend-1.onrender.com/api/auth/id/${empId}`, authHeaders);
      alert('Employee deleted successfully!');
      navigate('/homeManageUser');
    } catch (error) {
      console.error('Delete error:', error);
      if (error.response && error.response.status === 403) {
        alert('You do not have permission to delete this employee.');
      } else {
        alert('Failed to delete employee. Please try again later.');
      }
    }
  };

  return (
    <div>
      <style>{`
        body {
        margin-top: 150px;
          background-color: #f9f4fb;
          font-family: 'Segoe UI', sans-serif;
      }

        .delete-container {
        margin-top: 70px;
          padding: 40px;
          background-color: #fff;
          max-width: 600px;
          margin: 40px auto;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          color: #333;
        }

        .delete-container h2 {
          color: #6a0dad;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .delete-container p {
          font-size: 16px;
          margin: 10px 0;
        }

        .error {
          color: red;
          margin-bottom: 10px;
        }

        .btn-group {
          margin-top: 30px;
        }

        .btn-delete {
          background-color: #d62828;
          color: white;
          border: none;
          padding: 12px 20px;
          margin-right: 15px;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn-delete:hover {
          background-color: #b81d1d;
        }

        .btn-cancel {
          background-color: #e0e0e0;
          color: #333;
          border: none;
          padding: 12px 20px;
          font-size: 15px;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn-cancel:hover {
          background-color: #cacaca;
        }
      `}</style>

      <Header />

      <div className="delete-container">
        <h2>Are you sure you want to delete this employee?</h2>
        {error && <p className="error">{error}</p>}
        <p><strong>Name:</strong> {employee.empName}</p>
        <p><strong>Email:</strong> {employee.email}</p>

        <div className="btn-group">
          <button className="btn-delete" onClick={deleteEmployee}>
            Yes, Delete
          </button>
          <button className="btn-cancel" onClick={() => navigate('/employee')}>
            Cancel
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Delete;
