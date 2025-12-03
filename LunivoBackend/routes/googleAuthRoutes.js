import express from "express";
import { google } from "googleapis";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// OAuth2 Client
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL ,
  process.env.REDIRECT_URL_PROD  // MUST MATCH GOOGLE CONSOLE
);

// STEP 1: Redirect user to Google Login Page
router.get("/google", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });

  res.redirect(url);
});

// STEP 2: Google redirects user to this callback route
router.get("/google/callback", async (req, res) => {
  try {
    const { code } = req.query;

    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Fetch user info
    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });

    const userInfo = await oauth2.userinfo.get();
    const { email, name, picture } = userInfo.data;

    // Save or find user in DB
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          firstName: name?.split(" ")[0] || "",
          lastName: name?.split(" ")[1] || "",
          password: "", // not needed for Google users
          profileImg: picture,
        },
      });
    }

    // Create JWT for frontend
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Redirect to frontend with token
    return res.redirect(
      `https://lunivo.vercel.app/login-success?token=${token}`
    );

  } catch (err) {
    console.error("Google OAuth Error:", err);
    res.status(500).send("Authentication Failed");
  }
});

export default router;
