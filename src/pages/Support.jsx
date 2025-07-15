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
    answer:
      "Click 'Forgot Password' on the login page and follow the instructions sent to your email.",
  },
  {
    question: "How do I connect my bank account?",
    answer:
      "Go to Settings > Connected Accounts and click 'Add Bank Account'.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we use bank-level encryption with 256-bit SSL.",
  },
  {
    question: "How often is my data updated?",
    answer:
      "Balances and transactions update in real-time. Investments update during market hours.",
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

      <header className="support-header">
        <h1>Support Center</h1>
        <p className="support-subheading">
          Get help with Lunivo. Find answers to common questions or contact our
          support team.
        </p>
      </header>

      <section className="support-channels">
        {supportChannels.map((channel, index) => (
          <Card key={index} className="support-channel-card">
            <CardHeader
              avatar={<channel.icon size={48} className="support-icon" />}
              title={<Typography variant="h6">{channel.title}</Typography>}
            />
            <CardContent>
              <Typography variant="body2" className="support-description">
                {channel.description}
              </Typography>
              <div className="support-contact-info">
                <Typography variant="subtitle1">{channel.contact}</Typography>
                <Typography variant="body2">{channel.availability}</Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth>
                Contact Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </section>

      <section className="support-sections">
        <div className="support-form-wrapper">
          <div className="support-form-card">
            <div className="support-form-header">
              <h2>Contact Support</h2>
            </div>
            <div className="support-form-body">
              <form onSubmit={handleContactSubmit} className="support-form">
                <div className="support-form-row">
                  <div className="support-form-field">
                    <label className="contact-label" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={contactForm.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="support-form-field">
                    <label className="contact-label" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="support-form-field">
                  <label className="contact-label" htmlFor="category">Category</label>
                  <select
                    id="category"
                    value={contactForm.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="technical">Technical Issue</option>
                    <option value="account">Account Question</option>
                    <option value="billing">Billing Support</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="support-form-field">
                  <label className="contact-label" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={contactForm.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="support-form-field">
                  <label className="contact-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                  ></textarea>
                </div>
                <button type="submit" className="support-form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <Alert icon={<InfoIcon />} severity="info" className="support-alert">
            For urgent issues affecting your investments, please call our
            emergency hotline at 1-800-URGENT-1 (available 24/7).
          </Alert>
        </div>

        <div className="support-categories">
          <Card className="support-categories-card">
            <CardHeader title="Help Categories" />
            <CardContent>
              {helpCategories.map((category, index) => (
                <div key={index} className="support-category">
                  <div className="support-category-header">
                    <category.icon className="support-category-icon" />
                    <div>
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                      <ul>
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
      </section>

      <section className="support-faq">
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
      </section>

      <section className="support-status">
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
      </section>

      <Footer />
    </div>
  );
}
