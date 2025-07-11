import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  MenuItem,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Mail,
  Phone,
  ChatBubbleOutline,
  HelpOutline,
  Settings,
  InfoOutlined,
  Info as InfoIcon,
} from "@mui/icons-material";
import "../styles/Support.css";

const supportChannels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    contact: "support@lunivo.com",
    availability: "24/7",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our support team directly",
    contact: "1-800-LUNIVO-1",
    availability: "Mon-Fri 9AM-6PM",
  },
  {
    icon: ChatBubbleOutline,
    title: "Live Chat",
    description: "Get instant help with live chat",
    contact: "Available in app",
    availability: "Mon-Fri 9AM-9PM",
  },
];

const helpCategories = [
  {
    icon: HelpOutline,
    title: "Getting Started",
    description: "Learn the basics of using Lunivo",
    articles: [
      "Setting up your first portfolio",
      "Understanding the dashboard",
      "Adding your first investment",
      "Setting up notifications",
    ],
  },
  {
    icon: Settings,
    title: "Account Management",
    description: "Manage your account and preferences",
    articles: [
      "Updating profile information",
      "Changing password",
      "Subscription management",
      "Privacy settings",
    ],
  },
  {
    icon: InfoOutlined,
    title: "Investment Tracking",
    description: "Learn about portfolio features",
    articles: [
      "Understanding performance metrics",
      "Setting up price alerts",
      "Reading performance charts",
      "Tax reporting features",
    ],
  },
];

const faqData = [
  {
    question: "How do I reset my password?",
    answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email.",
  },
  {
    question: "How do I connect my bank account?",
    answer: "Go to Settings > Connected Accounts and click 'Add Bank Account'.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we use bank-level encryption with 256-bit SSL.",
  },
  {
    question: "How often is my data updated?",
    answer: "Balances and transactions update in real-time. Investments update during market hours.",
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, export CSV or PDF from the Reports section.",
  },
];

export default function Support() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setContactForm({
      name: "",
      email: "",
      category: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="support-container">
      <Navbar />

      <div className="support-header">
        <h1>Support Center</h1>
        <p className="support-subheading">
          Reach out to our team anytime. We’re here to help you succeed.
        </p>
      </div>

      <div className="support-flex">
        {supportChannels.map((channel, index) => (
          <Card key={index} className="support-card">
            <CardHeader
              avatar={<channel.icon size={48} className="support-icon" />}
              title={<Typography variant="h6">{channel.title}</Typography>}
            />
            <CardContent>
              <Typography variant="body2" className="support-description">
                {channel.description}
              </Typography>
              <div className="support-contact">
                <Typography variant="subtitle1" className="support-contact-info">
                  {channel.contact}
                </Typography>
                <Typography variant="body2" className="support-availability">
                  {channel.availability}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth>
                Contact Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      <div className="support-sections-wrapper">
        <div className="support-form-section">
          <Card className="support-form-card">
            <CardHeader title="Contact Support" />
            <CardContent>
              <form onSubmit={handleContactSubmit} className="support-form">
                <div className="support-form-row">
                  <TextField
                    label="Name"
                    fullWidth
                    value={contactForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    value={contactForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <TextField
                  select
                  label="Category"
                  fullWidth
                  value={contactForm.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  required
                >
                  <MenuItem value="technical">Technical Issue</MenuItem>
                  <MenuItem value="account">Account Question</MenuItem>
                  <MenuItem value="billing">Billing Support</MenuItem>
                  <MenuItem value="feature">Feature Request</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>

                <TextField
                  label="Subject"
                  fullWidth
                  value={contactForm.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                />

                <TextField
                  label="Message"
                  multiline
                  rows={5}
                  fullWidth
                  value={contactForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />

                <Button type="submit" variant="contained" fullWidth>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Alert icon={<InfoIcon />} severity="info" className="support-alert">
            For urgent issues affecting your investments, please call our emergency hotline at 1-800-URGENT-1 (available 24/7).
          </Alert>
        </div>

        <div className="support-categories-section">
          <Card className="support-categories-card">
            <CardHeader title="Help Categories" />
            <CardContent>
              {helpCategories.map((category, index) => (
                <div key={index} className="support-category">
                  <div className="support-category-header">
                    <category.icon className="support-category-icon" />
                    <div>
                      <h3 className="support-category-title">{category.title}</h3>
                      <p className="support-category-description">{category.description}</p>
                      <ul className="support-category-list">
                        {category.articles.map((article, idx) => (
                          <li key={idx}>
                            <button className="support-article-link">
                              {article}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="support-faq-section">
        <Card className="support-faq-card">
          <CardHeader title="Frequently Asked Questions" />
          <CardContent>
            {faqData.map((faq, index) => (
              <Accordion key={index} className="faq-item">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="support-status-section">
        <Card className="support-status-card">
          <CardHeader title="System Status" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6} className="status-item">
                <span>Market Data</span>
                <Chip label="Operational" color="success" size="small" />
              </Grid>
              <Grid item xs={6} className="status-item">
                <span>Portfolio Sync</span>
                <Chip label="Operational" color="success" size="small" />
              </Grid>
              <Grid item xs={6} className="status-item">
                <span>Notifications</span>
                <Chip label="Operational" color="success" size="small" />
              </Grid>
              <Grid item xs={6} className="status-item">
                <span>Data Sync</span>
                <Chip label="Operational" color="success" size="small" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
