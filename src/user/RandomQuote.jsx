
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserHeader from './UserHeader';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://meditation-backend-1.onrender.com/api/quotes/daily", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setQuote(response.data);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setError("Failed to load quote. Please try again later.");
    }
  };

  return (
    <div className="quote-container">
      <style>{`
        .quote-container {
          margin-top: 140px;
          padding: 40px;
          background-color: #e8f8fc;
          font-family: 'Segoe UI', sans-serif;
          min-height: 100vh;
        }

        .quote-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          padding: 30px;
          max-width: 700px;
          margin: auto;
          text-align: center;
        }

        .quote-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .quote-text {
          font-size: 22px;
          font-style: italic;
          color: #222;
          margin-bottom: 20px;
        }

        .quote-author {
          font-weight: bold;
          color: #333;
          font-size: 16px;
        }

        .quote-category {
          display: inline-block;
          margin-top: 10px;
          padding: 6px 14px;
          background-color: #d6f5ff;
          color: #0279a8;
          font-size: 13px;
          border-radius: 20px;
          font-weight: 500;
        }

        .error-message {
          color: red;
          text-align: center;
          margin-top: 20px;
        }
          .button_click {
          display: inline-block;
          padding: 10px 20px;
          background-color: #6a5acd;
          align-items: center;
          margin-left: 45%;
          margin-top: 10px;
          }
      `}</style>
<UserHeader/>
      {error ? (
        <p className="error-message">{error}</p>
      ) : quote ? (
        <div className="quote-card">
          <img src={quote.imageUrl} alt="Quote Visual" className="quote-image" />
          <p className="quote-text">“{quote.text}”</p>
          <p className="quote-author">— {quote.author}</p>
          <div className="quote-category">{quote.category}</div>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>Loading quote...</p>
      )}
      <button onClick={fetchQuote} className="button_click">
        Refresh Quote
      </button>
    </div>
  );
};

export default RandomQuote;

