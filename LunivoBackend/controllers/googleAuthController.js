import { google } from "googleapis";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL,
  process.env.REDIRECT_URL_PROD 
);

export const handleGoogleAuth = (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ]
  });

  res.redirect(url);
};

export const handleGoogleCallback = async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      version: "v2",
      auth: oauth2Client
    });

    const { data } = await oauth2.userinfo.get();

    // Check if user exists
    let user = await prisma.user.findUnique({ where: { email: data.email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: data.email,
          firstName: data.given_name,
          lastName: data.family_name,
          password: "GOOGLE_USER"  // You can choose null too
        }
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.redirect(`https://lunivo.vercel.app/auth/success?token=${token}`);

  } catch (error) {
    console.error(error);
    res.status(500).send("Google OAuth Failed");
  }
};
