import express from "express";
import { google } from "googleapis";

const router = express.Router();

// Create OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://lunivo.onrender.com/auth/google/callback"
  // backend callback URL
);

// SCOPES
const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
];

// 1️⃣ Google Login URL
router.get("/google", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });

  res.redirect(url);
});

// 2️⃣ Google Callback Route
router.get("/google/callback", async (req, res) => {
  const { code } = req.query;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Get user profile
    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });

    const { data } = await oauth2.userinfo.get();

    console.log("GOOGLE USER:", data);

    res.json({
      message: "Google login successful",
      user: data,
    });

  } catch (err) {
    console.error("Google login error:", err);
    res.status(500).json({ message: "Google auth failed" });
  }
});

export default router;
