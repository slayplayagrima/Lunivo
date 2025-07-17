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
    { name: "Market Analysis", value: "Market Analysis" },
    { name: "AI & Technology", value: "AI & Technology" },
    { name: "Sustainable Finance", value: "Sustainable Finance" },
    { name: "Digital Assets", value: "Digital Assets" },
    { name: "Financial Planning", value: "Financial Planning" },
    { name: "Risk Management", value: "Risk Management" },
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
        <Box sx={{ paddingTop:"0",border: 3, paddingBottom:"1rem",borderColor: "divider", mb: 4 }}>
          <Tabs
            className="custom-tabs"
            value={selectedCategory}
            onChange={(e, newValue) => onCategoryChange(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            {categories.map((category) => (
              <Tab
              className="custom-tab"
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
                sx={{
                  animationDelay: `${index * 0.1}s`,
                  "&:hover": {
                    boxShadow: "0 6px 20px hsl(204, 88%, 66%)", // You can optionally make hover shadow deeper
                  },
                }}
                

              >
                <CardMedia
                  component="img"
                  height="180"
                  image={post.image}
                  alt={post.title}
                />
                <Box sx={{ position: "relative", top: "-40px", left: "16px" }}>
                  <Chip sx={{backgroundColor:"hsl(204, 88%, 66%)"}} label={post.category} color="primary" />
                </Box>
                <CardHeader title={post.title} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:"space-around",
                      mt: 2,
                      fontSize: "0.75rem",
                      paddingTop:"2rem",
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
                <CardActions sx={{
                  display:"flex",
                  justifyContent:"center",
                  paddingBottom:"1.5rem",
                }}>
                  <Button sx={{
                    backgroundColor:"hsl(204, 88%, 66%)",
                    textAlign:"center",
                    color:"white",
                    "&:hover": {
                        backgroundColor:"rgba(54, 70, 74, 0.321)",
                      }
                  }}
                  size="small" endIcon={<ArrowRight size={16} />}>
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
