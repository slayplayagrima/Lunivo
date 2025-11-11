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
      image: "https://plus.unsplash.com/premium_photo-1661611255191-f68d5ad06cc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      author: "Sarah Chen",
      date: "2025-01-04",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "ESG Investing: Aligning Values with Returns",
      excerpt:
        "How sustainable investing is consistently delivering both meaningful positive impact and competitive long-term financial performance across global markets.",
      category: "Sustainable Finance",
      image: "https://plus.unsplash.com/premium_photo-1661725036006-f8766c0174b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
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
      image: "https://images.unsplash.com/photo-1642543349642-0d04e91511c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
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
      image: "https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
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
      image: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2155",
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
      image: "https://media.istockphoto.com/id/1898894916/photo/ai-automatically-trading-bot-software-that-analyzes-market-data-and-executes-trades.webp?a=1&b=1&s=612x612&w=0&k=20&c=lUA6CAjPJ9S80pju0x308y5nJ49iOAJ3YvloVx0aD9E=",
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
      image: "https://media.istockphoto.com/id/2171088734/photo/businesswomen-pointing-to-arrow-up-virtual-to-forecast-and-analyze-the-stock-market-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=dbhaJ7_2wXbmS137qFIMcKtf-Er_HOfWl5l4jFjKA94=",
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
      image: "https://plus.unsplash.com/premium_photo-1661443598082-afd740d6d07c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnV0dXJlJTIwb2YlMjBzdG9jayUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
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
      image: "https://plus.unsplash.com/premium_photo-1661434638236-410c530e70a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmluYW5jaWFsJTIwUGxhbm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
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

      {/* HERO SECTION */}
      <div className="hero-container">
        <h1 className="hero-title">Lunivo Insights</h1>
        <p className="hero-description">
          Stay ahead of market trends with expert analysis, strategic insights,
          and actionable investment guidance from industry professionals.
        </p>
      </div>

      {/* INSIGHTS SECTION */}
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

      {/* FEATURED ARTICLE SECTION */}
      {featuredPost && (
        <section className="featured-article">
          <div className="container">
            <div className="section-header">
              <div className="section-bar"></div>
              <h2>Featured Article</h2>
            </div>

            <div className="featured-card">
              <div className="featured-grid">
                <div className="featured-image-wrapper">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="featured-image"
                  />
                  <div className="featured-overlay"></div>
                  <span className="badge featured-badge">Featured</span>
                </div>

                <div className="featured-content">
                  <span className="badge badge-outline">{featuredPost.category}</span>
                  <h3>{featuredPost.title}</h3>
                  <p>{featuredPost.excerpt}</p>

                  <div className="meta-info">
                    <span>{featuredPost.author}</span>
                    <span>{formatDate(featuredPost.date)}</span>
                    <span>{featuredPost.readTime}</span>
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

      {/* LATEST ARTICLES SECTION */}
      <LatestArticles
        posts={filteredPosts}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Footer />
    </>
  );
}
