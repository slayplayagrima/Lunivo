import React, { useState, useMemo } from "react";
import { BookOpen, TrendingUp, Lightbulb, Target } from "lucide-react";
import "../styles/Blog.css";
import "../styles/latest-articles.css";
import Navbar from "../components/Navbar";
import LatestArticles from "../components/LatestArticles";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allPosts = [
    {
      id: 1,
      title: "The Future of Investment: AI-Powered Portfolio Management",
      excerpt:
        "Discover how artificial intelligence is revolutionizing investment strategies and helping investors achieve superior returns through data-driven insights.",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      author: "Sarah Chen",
      date: "2025-01-08",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Market Trends to Watch in 2025",
      excerpt: "Analyze the upcoming market shifts and trends that every investor should know about.",
      category: "Market Analysis",
      image: "https://source.unsplash.com/random/800x600",
      author: "Alice Smith",
      date: "2025-02-15",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Sustainable Finance Guide",
      excerpt: "How sustainable investing can reshape your portfolio and long-term goals.",
      category: "Sustainable Finance",
      image: "https://source.unsplash.com/random/800x601",
      author: "Bob Johnson",
      date: "2025-03-10",
      readTime: "6 min read",
    },
  ];

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const featuredPost = allPosts.find((post) => post.featured);

  const insights = [
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time analysis of market trends and investment opportunities",
    },
    {
      icon: Lightbulb,
      title: "Expert Insights",
      description: "Professional commentary from seasoned financial advisors",
    },
    {
      icon: Target,
      title: "Strategic Guidance",
      description: "Actionable investment strategies for every market condition",
    },
  ];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") return allPosts;
    return allPosts.filter((post) =>
      post.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);

  return (
    <>
      <Navbar />

      {/* ===========================
          HERO SECTION
      ============================ */}
      <div className="hero-container">
        <h1 className="hero-title">Lunivo Insights</h1>
        <p className="hero-description">
          Stay ahead of market trends with expert analysis, strategic insights,
          and actionable investment guidance from industry professionals.
        </p>
      </div>

      {/* ===========================
          INSIGHTS CARDS SECTION
      ============================ */}
      <section className="insights-section">
        <div className="container">
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="insight-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="insight-card-header">
                  <div className="insight-icon">
                    <insight.icon size={24} />
                  </div>
                  <h3>{insight.title}</h3>
                </div>
                <div className="insight-card-content">
                  <p>{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          FEATURED ARTICLE SECTION
      ============================ */}
      {featuredPost && (
        <section className="featured-article">
          <div className="container">
            <div className="section-header">
              <div className="section-bar"></div>
              <h2>Featured Article</h2>
            </div>

            <div className="featured-card">
              <div className="featured-grid">
                {/* Featured Image */}
                <div className="featured-image-wrapper">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="featured-image"
                  />
                  <div className="featured-overlay"></div>
                  <span className="badge featured-badge">Featured</span>
                </div>

                {/* Featured Content */}
                <div className="featured-content">
                  <span className="badge badge-outline">{featuredPost.category}</span>
                  <h3>{featuredPost.title}</h3>
                  <p>{featuredPost.excerpt}</p>

                  <div className="meta-info">
                    <span>
                      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {featuredPost.author}
                    </span>
                    <span>
                      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {formatDate(featuredPost.date)}
                    </span>
                    <span>
                      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <button className="read-more">
                    Read Full Article
                    <svg className="icon arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===========================
          LATEST ARTICLES SECTION
      ============================ */}
      <LatestArticles
        posts={filteredPosts}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </>
  );
}
