import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = ({ user }) => {
  return (
    <div className="home-container">
      {/* Main Title Section */}
      <header className="main-title-section">
        <h1 className="site-title">SirTheProgrammer Chat Space</h1>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to Our Chat Community</h2>
          <p className="hero-subtitle">A place where ideas flow freely and connections are made</p>
          
          {!user ? (
            /* Only show when NOT logged in */
            <div className="cta-buttons">
              <Link to="/login" className="cta-button login">Login</Link>
              <Link to="/signup" className="cta-button signup">Sign Up</Link>
            </div>
          ) : (
            /* Show when user is logged in */
            <div className="welcome-back">
              <h3>Welcome back, {user.displayName || 'Chat User'}!</h3>
              <p>Ready to continue the conversation?</p>
              <Link to="/chat" className="cta-button enter-chat">
                Enter Chat Room
              </Link>
            </div>
          )}
        </div>
      </main>

      <section className="about-section">
        <h2>Share Your Thoughts</h2>
        <p>
          SirTheProgrammer Chat Space is a platform designed for people to connect,
          share ideas, and engage in meaningful conversations. Whether you're looking
          to discuss programming, technology, art, or just chat with like-minded individuals,
          this is the place for you!
        </p>
        <p>
          Every user has their own identity, making conversations more personal and
          engaging. Join our growing community today and start sharing your thoughts!
        </p>
      </section>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3>Real-time Conversations</h3>
          <p>Chat with other users in real-time, with instant message delivery and typing indicators.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            </svg>
          </div>
          <h3>Personal Identity</h3>
          <p>Every message comes with your username and custom avatar to express your unique personality.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h3>Secure Platform</h3>
          <p>Your conversations and data are protected with top-notch security using Firebase Authentication.</p>
        </div>
      </div>

      <footer className="home-footer">
        <p>© 2025 SirTheProgrammer Chat Space. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home; 