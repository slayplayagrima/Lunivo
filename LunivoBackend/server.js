import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { google } from "googleapis";  

dotenv.config();

// Initialize Express app
const app=express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Lunivo Backend Running");
// });

// lab method

// const oauth2Client = new google.auth.OAuth2(
//   process.env.CLIENTCLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URL
// );

// const scopes = [
//   'https://www.googleapis.com/auth/userinfo.email',
//   'https://www.googleapis.com/auth/userinfo.profile'
// ];

// const authorizationUrl = oauth2Client.generateAuthUrl({
//   access_type: 'offline',
//   scope: scopes,
// });
// app.get("/", (req, res) => {
//   res.send(`<a href="${authorizationUrl}">Authenticate with Google</a>`);
// })
// app.get("/profile", (req, res) => {
//   res.send("Profile route")
// })

// console.log('Authorization URL:', authorizationUrl);

// console.log("Connected DB:", process.env.DATABASE_URL);   

// app.get("/profile", async (req, res) => {
//   const {code}= req.query;
//   let {tokens} = await oauth2Client.getToken(code);
//   console.log("Tokens:", tokens);
//   oauth2Client.setCredentials(tokens);
  
//   const oauth2 =await google.oauth2({       // user object info
//     auth: oauth2Client,
//     version: 'v2'
//   });
//  console.log("OAuth2 Object:", oauth2);
//  return res.send("Profile route");
// });

app.get("/healthz", (req, res) => res.status(200).send("OK"));



// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});


