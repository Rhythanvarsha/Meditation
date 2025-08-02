
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserHeader from './UserHeader';

const QuotePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <UserHeader />
      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1502082553048-f009c37129b9")', // Lavender field
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container bg-dark bg-opacity-50 rounded p-5">
          <h1 className="display-4 fw-bold text-light" style={{ color: '#E6E6FA' }}>
            🌸 ZenSpace Quotes
          </h1>
          <p className="lead" style={{ color: '#F8F0FF' }}>
            A soothing collection of motivational quotes to elevate your spirit.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <button
              className="btn btn-light btn-lg px-4 fw-semibold"
              style={{ color: '#6A5ACD' }}
              onClick={() => navigate('/all-quotes')}
            >
              View All Quotes
            </button>
            <button
              className="btn btn-outline-light btn-lg px-4 fw-semibold"
              style={{ borderColor: '#D8BFD8', color: '#cda6edff' }}
              onClick={() => navigate('/random-quote')}
            >
              Show Random Quote
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5 text-center">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: '#F3E8FF' }}>
              <div className="card-body">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1995/1995505.png"
                  alt="Inspiration"
                  width="60"
                  className="mb-3"
                />
                <h5 className="card-title" style={{ color: '#6A5ACD' }}>Daily Dose</h5>
                <p className="card-text text-secondary">
                  Begin your day with a meaningful quote to spark your thoughts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: '#F8F0FF' }}>
              <div className="card-body">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
                  alt="Library"
                  width="60"
                  className="mb-3"
                />
                <h5 className="card-title" style={{ color: '#9370DB' }}>Quote Archive</h5>
                <p className="card-text text-secondary">
                  Explore our growing archive of timeless quotes from thought leaders.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: '#E6E6FA' }}>
              <div className="card-body">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1622/1622063.png"
                  alt="Sharing"
                  width="60"
                  className="mb-3"
                />
                <h5 className="card-title" style={{ color: '#8A2BE2' }}>Share the Spark</h5>
                <p className="card-text text-secondary">
                  Share a quote you love with others via social media or messaging apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 border-top" style={{ backgroundColor: '#F3E8FF', color: '#6A5ACD' }}>
        <small>© 2025 ZenSpace Quotes — Made with 💜 for mindful living</small>
      </footer>
    </div>
  );
};

export default QuotePage;
