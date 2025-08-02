import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <style>{`
        .footer {
          background-color: #cc9ef1ff;
          color: #27073dff;
          text-align: center;
          font-family: 'Segoe UI', sans-serif;
          font-size: 14px;
          position: fixed;
          bottom: 0;
          width: 100%;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          left:0;
          box-shadow: 0 -2px 8px rgba(0,0,0,0.2);
          z-index: 1000;
        }

        .footer a {
          color: #240525ff;
          text-decoration: none;
          margin: 0 8px;
          transition: color 0.3s ease;
        }

        .footer a:hover {
          color: #df5eeeff;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          justify-content: center;
          font-size: 18px;
        }

        .footer-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer {
            font-size: 12px;
            padding: 12px 10px;
          }

          .footer-links, .social-icons {
            gap: 10px;
            flex-direction: column;
          }
        }
      `}</style>

      

      <div className="footer-links">
        
      <a href="mailto:rhythanvarsha23@gmail.com">Contact Us</a>


      </div>

      <p>© {new Date().getFullYear()} Rhythan Varsha J. All rights reserved.</p>
    </div>
  );
};

export default Footer;








 