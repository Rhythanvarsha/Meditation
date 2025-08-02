import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [roleName, setRoleName] = useState([]);
  const navigate = useNavigate();

  const availableRoles = ["USER", "ADMIN"];

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    if (e.target.checked) {
      setRoleName([...roleName, selectedRole]);
    } else {
      setRoleName(roleName.filter((role) => role !== selectedRole));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://meditation-backend-1.onrender.com/api/auth/register", {
        name,
        email,
        password,
        userName,
        roleName,
      });
      alert("Registered Successfully");
      navigate("/login");
    } catch (e) {
      console.error("Register error", e);
      alert("Register error!!");
    }
  };

  return (
    <div className="register-wrapper">
      <style>{`
        .register-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to bottom right, #d7a9f2, #b063dc, #9a21e0);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .register-box {
          background: #fff;
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
          animation: fadeIn 1s ease-in-out;
        }

        h2 {
          text-align: center;
          color: #6a1b9a;
          font-size: 30px;
          margin-bottom: 30px;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          font-weight: 600;
          margin-bottom: 8px;
          color: #444;
          font-size: 14px;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          padding: 12px 15px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: #f5f5f5;
          color: #28042bff;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        input:focus {
          outline: none;
          background-color: #fff;
          border-color: #9b4de0;
          box-shadow: 0 0 0 3px rgba(155, 77, 224, 0.2);
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }

        .checkbox-group input[type="checkbox"] {
          margin-right: 10px;
          width: 18px;
          height: 18px;
          accent-color: #6a1b9a;
        }

        .checkbox-group label {
          font-weight: 500;
          color: #555;
          font-size: 14px;
        }

        button {
          background: #6a1b9a;
          color: white;
          padding: 14px;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background: #7c3aed;
          transform: scale(1.03);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .register-box {
            padding: 30px 20px;
          }

          h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="register-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your full name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@email.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Create a secure password"
          />

          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="Choose a username"
          />

          <label>Assign Roles</label>
          {availableRoles.map((role) => (
            <div className="checkbox-group" key={role}>
              <input
                type="checkbox"
                id={role}
                value={role}
                checked={roleName.includes(role)}
                onChange={handleRoleChange}
              />
              <label htmlFor={role}>{role}</label>
            </div>
          ))}

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
