// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import React from "react";

// const Login = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function handleLogin(event) {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/api/auth/login", {
//         userName,
//         password,
//       });

//       const { token, roles } = response.data;
//       console.log("Token:", token);
//       console.log("Roles:", roles);

//       localStorage.setItem("token", token);
//       alert("Login Successful");

//       if (roles.includes("ADMIN")) {
//         navigate("/home");
//       } else {
//         navigate("/homeuser");
//       }
//     } catch (e) {
//       console.log("Login Error", e);
//       alert("Invalid Credentials");
//     }
//   }

//   return (
//     <div className="login-container">
//       <style>{`
//         .login-container {
//          margin-left: 500px;
//           display: flex;
//           flex-direction: column;
//           height: 60vh;
//           align-items: center;
//           justify-content: center;
//           width:55%;
//           border-radius: 10px;
//           background: linear-gradient(135deg, #9190eaff, #a8b4f7ff, #c5b4f1ff);
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         }

//         h2 {
//           color: #1a237e;
//           font-size: 28px;
//           font-weight: 700;
//           margin-bottom: 24px;
//         }

//         form {
//           background: linear-gradient(135deg, rgba(148, 158, 215, 1), #cccbf7ff);
//           padding: 40px 30px;
//           border-radius: 14px;
//           box-shadow: 0 20px 45px rgba(0,0,0,0.12);
//           width: 100%;
//           max-width: 400px;
          
//           transition: box-shadow 0.3s ease;
//         }

//         form:hover {
//           box-shadow: 0 25px 60px rgba(0,0,0,0.15);
//         }

//         label {
//           display: block;
//           margin-bottom: 10px;
//           font-weight: 600;
//           color: #37474f;
//           font-size: 15px;
//         }

//         input[type="text"],
//         input[type="password"] {
//           width: 90%;
//           padding: 12px 14px;
//           margin-bottom: 20px;
//           border: 1px solid #cfd8dc;
//           border-radius: 8px;
//           background-color: #f5f7fa;
//           font-size: 15px;
//           color: #263238;
//           transition: border-color 0.3s ease, background-color 0.3s ease;
//         }

//         input:focus {
//           outline: none;
//           border-color: #1a73e8;
//           background-color: #ffffff;
//         }

//         button {
//           width: 60%;
//           padding: 14px;
//           align-self: center;
//           margin-left:70px;
//           background-color: #1a237e;
//           color: #fff;
//           font-size: 16px;
//           font-weight: 600;
//           border: none;
//           border-radius: 10px;
//           cursor: pointer;
//           margin-top: 20px;
//           transition: background-color 0.3s ease;
//         }

//         button:hover {
//           background-color: #3949ab;
//         }

//         @media screen and (max-width: 480px) {
//           form {
//             padding: 30px 20px;
//           }

//           h2 {
//             font-size: 24px;
//           }
//         }
//       `}</style>

//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label htmlFor="userName">User Name</label>
//         <input
//           id="userName"
//           name="userName"
//           type="text"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           required
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await axios.post("https://meditation-backend-1.onrender.com/api/auth/login", {
        userName,
        password,
      });

      const { token, roles } = response.data;
      console.log("Token:", token);
      console.log("Roles:", roles);

      localStorage.setItem("token", token);
      alert("Login Successful");

      if (roles.includes("ADMIN")) {
        navigate("/home");
      } else {
        navigate("/homeuser");
      }
    } catch (e) {
      console.log("Login Error", e);
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="login-wrapper">
      <style>{`
        .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to bottom right, #d7a9f2, #b063dc, #9a21e0);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .login-box {
          background: #fff;
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
          max-width: 420px;
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
          .login-box {
            padding: 30px 20px;
          }

          h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            name="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="Enter your username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
