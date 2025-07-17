import React, { useState, useMemo } from "react";
import { BookOpen, TrendingUp, Lightbulb, Target } from "lucide-react";
import "../styles/Blog.css";
import "../styles/latest-articles.css";
import Navbar from "../components/Navbar";
import LatestArticles from "../components/LatestArticles";
import Footer from "../components/Footer";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allPosts = [
    {
      id: 1,
      title: "The Future of Investment: AI-Powered Portfolio Management",
      excerpt:
        "Discover how artificial intelligence is revolutionizing investment strategies and helping investors achieve superior returns through data-driven insights.",
      category: "AI & Technology",
      image: "src/assets/card1.png",
      author: "Sarah Chen",
      date: "2025-01-04",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "ESG Investing: Aligning Values with Returns",
      excerpt: "How sustainable investing is consistently delivering both meaningful positive impact and competitive long-term financial performance across global markets.",
      category: "Sustainable Finance",
      image: "src/assets/card2.png",
      author: "Emma Thompson",
      date: "2025-01-06",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Building a Comprehensive Financial Plan for the Decade",
      excerpt:
        "Craft a detailed, long-term financial roadmap that aligns closely with your evolving life goals and adapts to shifting economic changes and market trends.",
      category: "Financial Planning",
      image: "src/assets/card3.png",
      author: "Lena Walsh",
      date: "2025-01-08",
      readTime: "6 min read",
      featured: true,
    },
    {
      id: 4,
      title: "Market Volatility: Strategic Approaches for 2025",
      excerpt:
        "Navigate market uncertainty with proven strategies that protect and grow your wealth during volatile periods.",
      category: "Market Analysis",
      image: "src/assets/card4.png",
      author: "Michael Rodriguez",
      date: "2025-01-22",
      readTime: "6 min read",
      featured: true,
    },
    {
      id: 5,
      title: "Risk Assessment Techniques for High-Net-Worth Portfolios",
      excerpt:
        "Learn to identify and mitigate portfolio risks using modern tools and diversification models tailored for high-net-worth individuals.",
      category: "Risk Management",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
      author: "Sophie Allen",
      date: "2025-02-12",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Cryptocurrency Portfolio Integration",
      excerpt:
        "Explore strategic approaches to integrating digital assets into traditional investment portfolios while balancing growth and risk.",
      category: "Digital Assets",
      image: "src/assets/card6.png",
      author: "David Kim",
      date: "2025-02-14",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 7,
      title: "Global Market Trends to Watch in 2025",
      excerpt:
        "Analyze key indicators and macroeconomic trends shaping global markets and investor behavior this year.",
      category: "Market Analysis",
      image: "src/assets/card7.png",
      author: "Linda Zhao",
      date: "2025-03-01",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 8,
      title: "AI-Powered Investing: The Future of Asset Management",
      excerpt:
        "Discover how artificial intelligence is revolutionizing portfolio strategies and decision-making in finance.",
      category: "AI & Technology",
      image: "src/assets/card8.png",
      author: "Raj Patel",
      date: "2025-03-12",
      readTime: "4 min read",
      featured: true,
    },
    {
      id: 9,
      title: "Aligning ESG Goals with Financial Returns",
      excerpt:
        "Learn how sustainable investing is driving long-term performance while meeting environmental and social goals.",
      category: "Sustainable Finance",
      image: "src/assets/card9.png",
      author: "Sofia Mendes",
      date: "2025-02-20",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 10,
      title: "Tokenization and the Future of Real Assets",
      excerpt:
        "Understand how tokenized real estate and commodities are expanding access and transforming asset ownership.",
      category: "Digital Assets",
      image: "src/assets/card10.png",
      author: "Chris Lang",
      date: "2025-01-29",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 11,
      title: "Financial Planning Milestones in Your 30s and 40s",
      excerpt:
        "Create a plan that evolves with life changes—from growing your family as well as advancing in your career goals.",
      category: "Financial Planning",
      image: "src/assets/card11.png",
      author: "Emily Torres",
      date: "2025-03-18",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 12,
      title: "Techniques for Managing Risk in Volatile Markets",
      excerpt:
        "Use diversification strategies to protect your portfolio against downside during unpredictable market cycles to maintain financial balance.",
      category: "Risk Management",
      image: "src/assets/card12.png",
      author: "Oliver Brooks",
      date: "2025-02-09",
      readTime: "5 min read",
      featured: false,
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
      <Footer/>
    </>
  );
}
