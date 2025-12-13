import React, { useState } from "react";
export function History() {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([
    { id: 1, title: "React Documentation – Getting Started", time: "5 minutes ago", url: "https://react.dev/learn" },
    { id: 2, title: "Tailwind CSS Framework", time: "15 minutes ago", url: "https://tailwindcss.com" },
    { id: 3, title: "Amazon – Shopping Cart", time: "30 minutes ago", url: "https://amazon.com/cart" },
    { id: 4, title: "Google Calendar", time: "1 hour ago", url: "https://calendar.google.com" },
  ]);
  const deleteItem = (id) => setHistory((prev) => prev.filter((h) => h.id !== id));
  const clearAll = () => setHistory([]);
  const filtered = history.filter((h) =>
    h.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <style>{`
        .history-page {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          background: #f7f7f7;
          min-height: 100vh;
          box-sizing: border-box;
        }
        .history-card {
          width: 520px;
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.06);
        }
        .history-title {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          color: #222;
        }
        .history-sub {
          color: #666;
          margin-bottom: 18px;
        }
        .controls {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }
        .search-input {
          flex: 1;
          padding: 9px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
        }
        .search-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99,102,241,0.1);
          outline: none;
        }
        .clear-all {
          padding: 9px 12px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .history-list {
          list-style: none;
          padding: 0;
        }
        .history-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }
        .item-link {
          font-size: 16px;
          color: #1e40af;
          text-decoration: underline;
        }
        .item-time {
          font-size: 13px;
          color: #6b7280;
          margin-top: 5px;
        }
        .delete-btn {
          padding: 6px 8px;
          border: 1px solid #e5e7eb;
          background: #f3f4f6;
          border-radius: 6px;
          cursor: pointer;
        }
        .delete-btn:hover {
          background: #fee2e2;
          border-color: #fca5a5;
        }
        .empty,
        .no-match {
          text-align: center;
          padding: 20px;
          color: #6b7280;
        }
      `}</style>
      <div className="history-page">
        <div className="history-card">
          <h1 className="history-title">History</h1>
          <p className="history-sub">View and manage your browsing history</p>
          <div className="controls">
            <input
              type="text"
              placeholder="Search history..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="clear-all" onClick={clearAll} disabled={history.length === 0}>
              Clear All
            </button>
          </div>
          <ul className="history-list">
            {filtered.length === 0 && history.length === 0 && (
              <li className="empty">No history items found.</li>
            )}
            {filtered.map((item) => (
              <li key={item.id} className="history-item">
                <div>
                  <a href={item.url} target="_blank" rel="noreferrer" className="item-link">
                    {item.title}
                  </a>
                  <div className="item-time">{item.time}</div>
                </div>
                <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                  ✖
                </button>
              </li>
            ))}
            {filtered.length === 0 && history.length > 0 && (
              <li className="no-match">No results for "{search}"</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}