// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllQuote = () => {
//   const [quotes, setQuotes] = useState([]);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     axios
//       .get('http://localhost:8080/api/quotes', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setQuotes(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError('Failed to fetch quotes. Please try again later.');
//       });
//   }, []);

//   return (
//     <div className="all-quotes-container">
//       <style>{`
//         .all-quotes-container {
//           padding: 60px 20px;
//           width: 100%;
//           background-color: #fef5ff;
//           font-family: 'Segoe UI', sans-serif;
//           min-height: 100vh;
//         }

//         .quote-card {
//           background-color: #ffffff;
//           border-radius: 16px;
//           box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
//           padding: 20px;
//           transition: transform 0.2s ease-in-out;
//           height: 100%;
//         }

//         .quote-card:hover {
//           transform: translateY(-5px);
//         }

//         .quote-text {
//           font-size: 1.1rem;
//           color: #4b006e;
//           font-weight: 500;
//         }

//         .quote-footer {
//           font-size: 0.9rem;
//           color: #6c757d;
//           margin-top: 10px;
//         }

//         .quote-badge {
//           background-color: #d4b2ff;
//           color: #4b006e;
//         }

//         .section-title {
//           font-size: 32px;
//           color: #4b006e;
//           margin-bottom: 40px;
//           font-weight: 600;
//         }

//         .no-quotes {
//           font-size: 1rem;
//           color: #888;
//         }
//       `}</style>

//       <h2 className="text-center section-title">📜 All Quotes</h2>

//       {error && (
//         <div className="alert alert-danger text-center" role="alert">
//           {error}
//         </div>
//       )}

//       <div className="row g-4">
//         {quotes.map((quote) => (
//           <div key={quote.id} className="col-md-6 col-lg-4">
//             <div className="quote-card h-100">
//               <blockquote className="blockquote mb-3">
//                 <p className="quote-text">“{quote.text}”</p>
//               </blockquote>
//               <footer className="quote-footer">
//                 {quote.author || 'Unknown'} &nbsp;|&nbsp;
//                 <span className="badge quote-badge">{quote.category}</span>
//               </footer>
//             </div>
//           </div>
//         ))}
//       </div>

//       {quotes.length === 0 && !error && (
//         <div className="text-center mt-5">
//           <p className="no-quotes">No quotes available.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllQuote;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserHeader from './UserHeader';

const AllQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('https://meditation-backend-1.onrender.com/api/quotes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to fetch quotes. Please try again later.');
      });
  }, []);

  return (
    <div className="all-quotes-container">
            <UserHeader />

      <style>{`
        .all-quotes-container {
          padding: 60px 20px;
          width: 100%;
          background-color: #fef5ff;
          font-family: 'Segoe UI', sans-serif;
          min-height: 100vh;
        }

        .quote-card {
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
          padding: 20px;
          transition: transform 0.2s ease-in-out;
          height: 100%;
        }

        .quote-card:hover {
          transform: translateY(-5px);
        }

        .quote-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 15px;
        }

        .quote-text {
          font-size: 1.1rem;
          color: #4b006e;
          font-weight: 500;
        }

        .quote-footer {
          font-size: 0.9rem;
          color: #6c757d;
          margin-top: 10px;
        }

        .quote-badge {
          background-color: #d4b2ff;
          color: #4b006e;
        }

        .section-title {
          font-size: 32px;
          color: #4b006e;
          margin-bottom: 40px;
          font-weight: 600;
        }

        .no-quotes {
          font-size: 1rem;
          color: #888;
        }
      `}</style>

      <h2 className="text-center section-title">📜 All Quotes</h2>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      <div className="row g-4">
        {quotes.map((quote) => (
          <div key={quote.id} className="col-md-6 col-lg-4">
            <div className="quote-card h-100">
              {quote.imageUrl && (
                <img
                  src={quote.imageUrl}
                  alt="Quote"
                  className="quote-image"
                  
                />
              )}
              <blockquote className="blockquote mb-3">
                <p className="quote-text">“{quote.text}”</p>
              </blockquote>
              <footer className="quote-footer">
                {quote.author || 'Unknown'} &nbsp;|&nbsp;
                <span className="badge quote-badge">{quote.category}</span>
              </footer>
            </div>
          </div>
        ))}
      </div>

      {quotes.length === 0 && !error && (
        <div className="text-center mt-5">
          <p className="no-quotes">No quotes available.</p>
        </div>
      )}
    </div>
  );
};

export default AllQuote;
