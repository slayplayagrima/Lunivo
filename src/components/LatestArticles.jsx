import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  Tabs,
  Tab,
  Chip,
  Box,
} from "@mui/material";
import { ArrowRight, Clock, User } from "lucide-react";
import "../styles/latest-articles.css";

export default function LatestArticles({
  posts,
  selectedCategory,
  onCategoryChange,
}) {
  const categories = [
    { name: "All Articles", value: "all" },
    { name: "Market Analysis", value: "market" },
    { name: "AI & Technology", value: "technology" },
    { name: "Sustainable Finance", value: "sustainable" },
    { name: "Digital Assets", value: "crypto" },
    { name: "Financial Planning", value: "planning" },
    { name: "Risk Management", value: "risk" },
  ];

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className="articles-section">
      <div className="articles-container">
        {/* Section Header */}
        <div className="articles-header">
          <div className="articles-accent-line"></div>
          <h2 className="articles-title">Latest Articles</h2>
        </div>

        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={(e, newValue) => onCategoryChange(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            {categories.map((category) => (
              <Tab
                key={category.value}
                label={category.name}
                value={category.value}
              />
            ))}
          </Tabs>
        </Box>

        {/* Articles Grid */}
        <div className="articles-grid">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Card
                key={post.id}
                className="article-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={post.image}
                  alt={post.title}
                />
                <Box sx={{ position: "relative", top: "-40px", left: "16px" }}>
                  <Chip label={post.category} color="primary" />
                </Box>
                <CardHeader title={post.title} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                      fontSize: "0.75rem",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <User size={12} /> {post.author}
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Clock size={12} /> {post.readTime}
                      </Box>
                    </Box>
                    <span>{formatDate(post.date)}</span>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" endIcon={<ArrowRight size={16} />}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography variant="body2">No articles found.</Typography>
          )}
        </div>
      </div>
    </section>
  );
}
