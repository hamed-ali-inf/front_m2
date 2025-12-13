import { Link, useParams } from "react-router-dom";

export function News() {
  const { id } = useParams(); // Get the news ID from the URL

  // Mock full articles for each news ID (expand with real data/API)
  const articles = {
    1: {
      title: "A Major Technology Company Announces New Processor",
      category: "Technology",
      timeAgo: "2h ago",
      imageUrl: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=600&q=80",
      content: `
        In a groundbreaking announcement, a leading tech giant unveiled its latest processor, promising unprecedented performance and efficiency. 
        The new chip, codenamed "QuantumCore," integrates advanced AI capabilities directly into the hardware, enabling faster computations for machine learning tasks. 
        Experts predict this could revolutionize industries from gaming to autonomous vehicles. 
        Early benchmarks show a 40% improvement in speed compared to previous models. 
        The company plans to release developer kits next quarter, with consumer devices following in the new year.
      `,
    },
    2: {
      title: "Amazon Plans to Cut Jobs Due to AI Advancements",
      category: "Business",
      timeAgo: "4h ago",
      imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=600&q=80",
      content: `
        E-commerce giant Amazon has announced plans to reduce its workforce by 10% as it shifts focus toward AI-driven automation. 
        The move is expected to affect thousands of employees in logistics and customer service roles. 
        CEO Jeff Bezos stated that AI tools will streamline operations, allowing the company to invest more in innovation. 
        Critics argue this could lead to job losses in the retail sector, while supporters see it as a necessary step for competitiveness. 
        Amazon has pledged to provide severance packages and retraining programs for affected workers.
      `,
    },
    3: {
      title: "Algerian Team Qualifies for World Cup",
      category: "Sport",
      timeAgo: "6h ago",
      imageUrl: "https://images.unsplash.com/photo-1505842677478-0c39fbe0e58b?auto=format&fit=crop&w=600&q=80",
      content: `
        In an exhilarating match, the Algerian national football team secured their spot in the upcoming World Cup with a decisive victory. 
        The team's star striker scored twice, leading to a 3-1 win against their rivals. 
        This qualification marks Algeria's return to the global stage after a decade-long absence. 
        Fans across the nation celebrated in the streets, with hopes high for a strong performance. 
        Coach Ahmed praised the team's resilience and teamwork, stating, "This is just the beginning." 
        Preparations for the tournament are underway, with focus on training and strategy.
      `,
    },
  };

  const article = articles[id];

  if (!article) {
    return (
      <>
        <style>{`
          .news-page { display: flex; justify-content: center; align-items: center; height: 100vh; background: #f7f7f7; }
          .not-found { text-align: center; color: #666; }
        `}</style>
        <div className="news-page">
          <div className="not-found">
            <h1>Article Not Found</h1>
            <p>The requested news article does not exist.</p>
            <Link to="/" style={{ color: '#007bff' }}>Back to Home</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        /* Styles for News page */
        .news-page {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          background: #70a1ff;
          min-height: 100vh;
        }
        .news-card {
          max-width: 800px;
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.1);
        }
        .news-title {
          font-size: 32px;
          font-weight: 700;
          color: #222;
          margin-bottom: 10px;
        }
        .news-meta {
          color: #666;
          margin-bottom: 20px;
        }
        .news-image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .news-content {
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .btn-back {
          display: inline-block;
          text-decoration: none;
          color: #007bff;
          font-weight: 500;
          padding: 10px 20px;
          border: 1px solid #007bff;
          border-radius: 6px;
          transition: background-color 0.3s;
        }
        .btn-back:hover {
          background-color: #007bff;
          color: #fff;
        }
      `}</style>
      <div className="news-page">
        <div className="news-card">
          <h1 className="news-title">{article.title}</h1>
          <p className="news-meta">{article.category} | {article.timeAgo}</p>
          <img src={article.imageUrl} alt={article.category} className="news-image" />
          <div className="news-content">{article.content}</div>
          <Link to="/" className="btn-back">Back to Home</Link>
        </div>
      </div>
    </>
  );
}