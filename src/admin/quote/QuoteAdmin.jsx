import React, { useState } from 'react';
import axios from 'axios';
import HomeHeader from '../HomeHeader';
import Footer from '../manageUser/Footer';

const PostQuoteAdmin = () => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post(
        'https://meditation-backend-1.onrender.com/api/quotes',
        {
          author,
          text,
          category,
          imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('✅ Quote successfully posted!');
      setAuthor('');
      setText('');
      setCategory('');
      setImageUrl('');
    } catch (error) {
      console.error('❌ Failed to post quote:', error);
      setMessage('❌ Failed to post quote. Please try again.');
    }
  };

  return (
    <div className="quote-post-wrapper">
      <HomeHeader />
      <style>{`
        .quote-post-wrapper {
        margin-top: 70px;
        
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #f3e8ff, #e4d4ff);
          min-height: 100vh;
          padding: 100px 20px 40px;
        }

        .form-container {
          max-width: 650px;
          margin: auto;
          background: #ffffff;
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(168, 145, 255, 0.2);
          border: 2px solid #d3bfff;
        }

        .form-container h2 {
          text-align: center;
          color: #7B61FF;
          margin-bottom: 24px;
        }

        .form-container input,
        .form-container textarea {
          width: 100%;
          padding: 12px 16px;
          margin-bottom: 20px;
          border-radius: 10px;
          border: 1px solid #c9b9f7;
          font-size: 16px;
          background-color: #f9f5ff;
          color: #3f3f3f;
        }

        .form-container input::placeholder,
        .form-container textarea::placeholder {
          color: #a58ce0;
        }

        .form-container button {
          width: 100%;
          padding: 12px;
          font-size: 18px;
          background-color: #7B61FF;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .form-container button:hover {
          background-color: #957dff;
        }

        .message {
          text-align: center;
          margin-top: 20px;
          font-weight: 600;
          color: #6a0dad;
        }
      `}</style>

      <div className="form-container">
        <h2>📝 Add New Quote</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <textarea
            placeholder="Quote text"
            rows="4"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Category (e.g., Motivation, Life)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit">Post Quote</button>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
      <Footer />
    </div>
  );
};

export default PostQuoteAdmin;
