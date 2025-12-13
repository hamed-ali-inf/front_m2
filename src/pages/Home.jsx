import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { Sbar } from "../components/searchBar/Sbar";
import { Nav } from "../components/navbar/Nav";
import { Container } from "../components/Container/Container";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search initiated for: ${searchQuery}`);
    // TODO: Replace with real search logic (e.g., API call)
  };

  const handleReadMore = (newsId) => {
    navigate(`/news/${newsId}`); // Navigate to the full article for this news ID
  };

  const handleWeatherSeeMore = () => {
    navigate("/weather");
  };

  const styles = {
    pageContainer: {
      background: "linear-gradient(135deg, #70a1ff 0%, #4a6dfc 50%, #2f4a9f 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#23232f",
      
    },
    header: {
      padding: "18px 24px",
      borderBottom: "3px solid #a9c7ff",
    },
    headerTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14,
    },
    searchWebLabel: {
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      filter: "drop-shadow(0 0 2px rgba(0,0,0,0.25))",
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
    headerButtons: {
      display: "flex",
      gap: 14,
    },
    headerBtn: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "1px solid #ccd6ff",
      padding: "8px 14px",
      borderRadius: 22,
      fontSize: 14,
      backgroundColor: "#d4e1ff",
      fontWeight: "600",
      color: "#4a4a6f",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgb(180 195 255 / 0.5)",
      transition: "background-color 0.25s ease",
    },
    searchForm: {
      backgroundColor: "#d6e2ff",
      padding: "12px 24px",
      marginTop: 4,
      borderRadius: 12,
      maxWidth: 720,
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: "inset 0 5px 12px #a9c7ff",
      display: "flex",
      gap: 10,
    },
    searchInputWrapper: {
      position: "relative",
      flex: 1,
      borderRadius: 24,
      backgroundColor: "#f4f9ff",
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      width: "100%",
      border: "none",
      padding: "12px 48px 12px 36px",
      borderRadius: 24,
      fontSize: 16,
      fontWeight: "500",
      outline: "none",
      color: "#3a4a7a",
      backgroundColor: "transparent",
    },
    searchBtn: {
      backgroundColor: "#51c1e6ff",
      borderRadius: 24,
      border: "none",
      color: "#fff",
      padding: "10px 26px",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: 16,
      boxShadow: "0 4px 8px rgb(66 99 255 / 0.52)",
      transition: "background-color 0.3s ease",
    },
    mainContent: {
      display: "flex",
      gap: 30,
      justifyContent: "center",
      marginTop: 40,
      flexWrap: "wrap",
      maxWidth: 960,
      marginLeft: "auto",
      marginRight: "auto",
    },
    newsCard: {
      backgroundColor: "#d8e2ff",
      borderRadius: 18,
      padding: 24,
      width: 460,
      boxShadow: "0 8px 20px rgb(0 0 0 / 0.07)",
    },
    sectionHeader: {
      fontWeight: "bold",
      fontSize: 24,
      marginBottom: 18,
      textAlign: "center",
      backgroundColor: "#a9c7ff",
      borderRadius: 12,
      padding: "8px 12px",
      userSelect: "none",
      boxShadow: "0 0 8px rgb(108 148 255 / 0.5)",
    },
    newsItem: {
      display: "flex",
      backgroundColor: "#f3f8ff",
      borderRadius: 16,
      padding: 12,
      boxShadow: "inset 0 0 8px #a9c7ff",
      marginBottom: 16,
      cursor: "pointer",
      transition: "transform 0.15s ease",
    },
    newsImg: {
      width: 80,
      height: 60,
      objectFit: "cover",
      borderRadius: 12,
      marginRight: 12,
      flexShrink: 0,
    },
    newsText: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    newsTop: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
    },
    newsCategory: {
      backgroundColor: "#a3b9fb",
      padding: "4px 14px",
      borderRadius: 24,
      fontSize: 12,
      fontWeight: "600",
      color: "#1c2b75",
      userSelect: "none",
    },
    newsTime: {
      fontSize: 12,
      color: "#555d7a",
    },
    newsTitle: {
      fontSize: 14,
      color: "#23232f",
      fontWeight: "500",
      marginBottom: 6,
      lineHeight: 1.3,
      userSelect: "none",
    },
    readMore: {
      fontSize: 12,
      color: "#4e7cff",
      fontWeight: "700",
      textAlign: "right",
      marginTop: "auto",
      userSelect: "none",
      cursor: "pointer",
    },
    weatherCard: {
      backgroundColor: "#d8e2ff",
      borderRadius: 18,
      padding: 30,
      maxWidth: 300,
      boxShadow: "0 8px 20px rgb(0 0 0 / 0.07)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    weatherHeader: {
      display: "flex",
      alignItems: "center",
      fontSize: 16,
      color: "#23232f",
      marginBottom: 6,
      fontWeight: "700",
    },
    weatherDate: {
      fontSize: 12,
      color: "#555d7a",
      marginBottom: 30,
    },
    weatherMain: {
      display: "flex",
      alignItems: "center",
      marginBottom: 30,
    },
    weatherTemp: {
      fontSize: 64,
      fontWeight: "bold",
      color: "#23232f",
      marginRight: 16,
      userSelect: "none",
      fontFeatureSettings: "'pnum' on, 'lnum' on",
    },
    weatherIcon: {
      fontSize: 62,
      userSelect: "none",
    },
    weatherDetails: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 30,
    },
    weatherDetailBox: {
      backgroundColor: "#bbcaff",
      borderRadius: 12,
      padding: 12,
      width: "30%",
      textAlign: "center",
      fontSize: 13,
      fontWeight: "600",
      color: "#23232f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      boxShadow: "inset 0 4px 6px #a3b9fb",
    },
    seeMoreBtn: {
      padding: "12px 36px",
      backgroundColor: "#7395ff",
      borderRadius: 24,
      border: "none",
      color: "#f0f4ff",
      fontWeight: "bold",
      fontSize: 16,
      cursor: "pointer",
      boxShadow: "0 4px 10px rgb(51 82 255 / 0.85)",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <div style={styles.headerTop}>
          <div style={styles.searchWebLabel}>
            News Search
          </div>
          <div style={styles.headerButtons}>
            <button style={styles.headerBtn} onClick={() => navigate("/login")}>
              Login
            </button>
            <button style={styles.headerBtn} onClick={() => navigate("/history")}>
              History
            </button>
            {/* Add more buttons as needed */}
          </div>
        </div>
        <form style={styles.searchForm} onSubmit={handleSearch}>
          <div style={styles.searchInputWrapper}>
            <input
              style={styles.searchInput}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button style={styles.searchBtn} type="submit">Search</button>
        </form>
      </div>
      <div style={styles.mainContent}>
        <div style={styles.newsCard}>
          <h2 style={styles.sectionHeader}>Latest News</h2>
          <div className="news-list">
            {[
              {
                id: 1,
                category: "Technology",
                timeAgo: "2h ago",
                title: "A major technology company has announced a new processor...",
                imageUrl: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=80&q=80",
              },
              {
                id: 2,
                category: "Business",
                timeAgo: "4h ago",
                title: "Amazon plans to cut jobs due to AI...",
                imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=80&q=80",
              },
              {
                id: 3,
                category: "Sport",
                timeAgo: "6h ago",
                title: "Algerian team qualifies for World Cup...",
                imageUrl: "https://images.unsplash.com/photo-1505842677478-0c39fbe0e58b?auto=format&fit=crop&w=80&q=80",
              },
            ].map((news) => (
              <div
                key={news.id}
                style={styles.newsItem}
                onClick={() => handleReadMore(news.id)}
              >
                <img src={news.imageUrl} alt={news.category} style={styles.newsImg} />
                <div style={styles.newsText}>
                  <div style={styles.newsTop}>
                    <span style={styles.newsCategory}>{news.category}</span>
                    <time style={styles.newsTime}>{news.timeAgo}</time>
                  </div>
                  <p style={styles.newsTitle}>{news.title}</p>
                  <div style={styles.readMore}>Read more...</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.weatherCard}>
          <div style={styles.weatherHeader}>Weather</div>
          <div style={styles.weatherDate}>Today</div>
          <div style={styles.weatherMain}>
            <div style={styles.weatherTemp}>29°C</div>
            <div style={styles.weatherIcon}>☀️</div>
          </div>
          <div style={styles.weatherDetails}>
            <div style={styles.weatherDetailBox}>
              <div>Location</div>
              <div>tindouf</div>
            </div>
            {/* Add more details if available */}
          </div>
          <button style={styles.seeMoreBtn} onClick={handleWeatherSeeMore}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
