import { Link } from "react-router-dom";

export function SearchResults() {
  return (
    <>
      <style>{`
        .search-results-page {
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          font-family: Arial, Helvetica, sans-serif;
          color: white;
          box-sizing: border-box;
        }

        .header-bar {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.15);
          padding: 8px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          backdrop-filter: blur(5px);
        }

        .header-left {
          display: flex;
          gap: 20px;
        }

        .header-right {
          display: flex;
          gap: 15px;
        }

        .search-info {
          background-color: white;
          color: #1e40af;
          padding: 6px 16px;
          border-radius: 20px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .tech-news-banner {
          text-align: center;
          margin-top: 30px;
        }

        .tech-news-title {
          font-size: 80px;
          font-weight: bold;
          margin: 0;
          text-shadow: 3px 3px 10px rgba(0,0,0,0.4);
        }

        .tech-image {
          width: 420px;
          max-width: 90%;
          margin: 30px auto;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .tech-news-subtitle {
          font-size: 26px;
          margin: 20px 0 30px;
          opacity: 0.9;
        }

        .quote {
          font-size: 20px;
          font-style: italic;
          margin: 30px 0;
          opacity: 0.85;
        }

        .author {
          font-size: 16px;
          opacity: 0.7;
        }

        .back-home-btn {
          display: inline-block;
          padding: 12px 40px;
          background-color: white;
          color: #1e40af;
          font-size: 18px;
          font-weight: bold;
          text-decoration: none;
          border-radius: 50px;
          margin-top: 30px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        .back-home-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }
      `}</style>

      <div className="search-results-page">
        <div className="header-bar">
          <div className="header-left">
            <span>"Is NEW" site:google.com</span>
            <span>About 1,23,000 results (0.52 seconds)</span>
          </div>
          <div className="header-right">
            <span>Images</span>
            <span>Videos</span>
            <span>News</span>
            <span>Maps</span>
            <span>Shopping</span>
            <span>More</span>
            <span>Settings</span>
            <span>Tools</span>
          </div>
        </div>

        <div className="search-info">
          Search - "Is NEW" site:google.com
        </div>

        <div className="tech-news-banner">
          <h1 className="tech-news-title">TECH NEWS!</h1>

          {/* 🖼️ صورة جاهزة */}
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Tech"
            className="tech-image"
          />

          <p className="tech-news-subtitle">
            A World of News and Information at Your Fingertips
          </p>

          <p className="quote">
            "In the World of News, Stay Informed and Ahead of the Curve!"
          </p>

          <p className="author">- By Effort Efficiency</p>

          <Link to="/" className="back-home-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}