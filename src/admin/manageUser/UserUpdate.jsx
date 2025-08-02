// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from './ManageHeader';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';

// const UserUpdate = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/auth");
//         console.log("Employee data:", response.data);
//         setEmployees(response.data);
//       } catch (e) {
//         console.error("Error fetching employees", e);
//         alert("Failed to fetch employee data");
//       }
//     };

//     fetchEmployees(); // Automatically call on mount
//   }, []);

//   return (
//     <div>
//       <style>{`
//         body {
//           background-color: #f9f4fb;
//           font-family: 'Segoe UI', sans-serif;
//         }

//         .employee-container {
//           padding: 30px;
//           color: #4b0082;
//         }

//         .employee-container h2 {
//           margin-bottom: 20px;
//           color: #6a0dad;
//         }

//         table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 10px;
//           background-color: #f4e1ff;
//           color: #4b0082;
//           box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
//         }

//         th, td {
//           border: 1px solid #e2c9f7;
//           padding: 12px 15px;
//           text-align: left;
//         }

//         th {
//           background-color: #e6ccff;
//           color: #4b0082;
//         }

//         a {
//           color: #6a0dad;
//           text-decoration: none;
//           font-weight: bold;
//         }

//         a:hover {
//           text-decoration: underline;
//         }
//       `}</style>

//       <div className="header">
//         <Header />
//       </div>

//       <div className="employee-container">
//         <h2>Employee List</h2>

//         <table>
//           <thead>
//             <tr>
//               <th>Employee ID</th>
//               <th>Name</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Roles</th>
//               <th>Update</th>
//               <th>Delete</th>
//               <th>Task</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.length === 0 ? (
//               <tr>
//                 <td colSpan="8">No employees found.</td>
//               </tr>
//             ) : (
//               employees.map((emp) => (
//                 <tr key={emp.empId}>
//                   <td>{emp.empId}</td>
//                   <td>{emp.empName}</td>
//                   <td>{emp.userName}</td>
//                   <td>{emp.email}</td>
//                   <td>
//                     {emp.roles && emp.roles.length > 0
//                       ? emp.roles.map((r) => r.roleName).join(", ")
//                       : "N/A"}
//                   </td>
//                   <td><Link to={`/update/${emp.empId}`}>Update</Link></td>
//                   <td><Link to={`/delete/${emp.empId}`}>Delete</Link></td>
                
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default UserUpdate;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './ManageHeader';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const UserUpdate = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://meditation-backend-1.onrender.com/api/auth", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("Employee data:", response.data);
        setEmployees(response.data);
      } catch (e) {
        console.error("Error fetching employees", e);
        alert("Failed to fetch employee data");
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <style>{`
        body {
         
          background-color: #f9f4fb;
          font-family: 'Segoe UI', sans-serif;
         margin-top: 70px;
        }

        .employee-container {
        
          padding: 40px 5%;
          color: #4b0082;
          background-color: #fff;
        }

        .employee-container h2 {
          text-align: center;
          font-size: 28px;
          color: #6a0dad;
          margin-bottom: 30px;
        }

        table {
        
marginTop:70px;
          width: 100%;
          border-collapse: collapse;
          background-color: #aa7ac3ff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          overflow: hidden;
        }

        th, td {
          padding: 14px 20px;
          text-align: left;
          border-bottom: 1px solid #e6ccff;
        }

        th {
          background-color: #e6ccff;
          color: #4b0082;
          font-size: 16px;
        }

        td {
          background-color: #fff;
          color: #333;
        }

        tr:hover td {
          background-color: #f4eaff;
        }

        a {
          color: #6a0dad;
          font-weight: bold;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          table, thead, tbody, th, td, tr {
            display: block;
          }

          thead tr {
            display: none;
          }

          tr {
            margin-bottom: 15px;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 10px;
          }

          td {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #eee;
          }

          td::before {
            content: attr(data-label);
            font-weight: bold;
            color: #6a0dad;
          }
        }
      `}</style>

      <Header />

      <div className="employee-container">
        <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Roles</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>
                  No employees found.
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp.empId}>
                  <td data-label="Employee ID">{emp.empId}</td>
                  <td data-label="Name">{emp.empName}</td>
                  <td data-label="Username">{emp.userName}</td>
                  <td data-label="Email">{emp.email}</td>
                  <td data-label="Roles">
                    {emp.roles?.length > 0
                      ? emp.roles.map((r) => r.roleName).join(", ")
                      : "N/A"}
                  </td>
                  <td data-label="Update">
                    <Link to={`/update/${emp.empId}`}>Update</Link>
                  </td>
                  <td data-label="Delete">
                    <Link to={`/delete/${emp.empId}`}>Delete</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default UserUpdate;
