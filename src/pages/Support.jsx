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
    question: "Can I set up price alerts for my investments?",
    answer:
      "Yes! In your Portfolio, click on any investment and select 'Set Alert'. You can set alerts for price increases, decreases, or percentage changes. We'll notify you via email and in-app notifications.",
  },
  {
    question: "How often is market data updated?",
    answer:
      "Market data is updated in real-time during trading hours (9:30 AM - 4:00 PM EST). After-hours data is updated every 15 minutes. Historical data is updated daily after market close.",
  },
  {
    question: "What types of investments can I track?",
    answer:
      "You can track stocks, ETFs, mutual funds, bonds, and other securities. We support most major exchanges including NYSE, NASDAQ, and international markets.",
  },
  {
    question: "How are portfolio returns calculated?",
    answer:
      "Returns are calculated using the formula: (Current Value - Initial Investment) / Initial Investment × 100. We factor in dividends, capital gains, and any fees to provide accurate performance metrics.",
  },
  {
    question: "How do I export my portfolio data?",
    answer:
      "Go to Portfolio > Settings > Export Data. You can export to CSV, Excel, or PDF formats. This includes transaction history, performance metrics, and tax documents.",
  },
  {
    question: "How do I add a new investment to my portfolio?",
    answer:
      "Go to the Portfolio page and click 'Add Investment'. Select the type (stock, mutual fund, or bond), enter the ticker symbol, quantity, and purchase price. The system will automatically fetch current market data.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, we use bank-level encryption (256-bit SSL) and never store your actual account credentials. We're SOC 2 compliant and follow strict data protection protocols.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Go to Account Settings > Subscription. You can cancel anytime with no penalties. Your access continues until the end of your current billing period.",
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
    <>
      <Navbar />
      <div className="support-container">
        {/* Header Section */}
        <header className="support-header">
          <h1>Support Center</h1>
          <p className="support-subheading">
            Get help with Lunivo. Find answers to common questions or contact our support team.
          </p>
        </header>

        {/* Support Channels Section */}
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

        {/* Contact Form & Help Categories Section */}
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
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="support-form-field">
                      <label className="contact-label" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={contactForm.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="support-form-field support-form-field-category">
                    <label className="contact-label" htmlFor="category">Category</label>
                    <select
                      id="category"
                      value={contactForm.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
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
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>
                  <div className="support-form-field">
                    <label className="contact-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      value={contactForm.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="support-form-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
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
                              <button className="support-article-link">{article}</button>
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

          <Alert icon={<InfoIcon />} severity="info" className="support-alert">
            For urgent issues affecting your investments, please call our emergency hotline at 1-800-URGENT-1 (available 24/7).
          </Alert>
        </section>

        {/* FAQ Section */}
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

        <Footer />
      </div>
    </>
  );
}
