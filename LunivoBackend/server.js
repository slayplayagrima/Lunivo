import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import googleAuthRoutes from "./routes/googleAuthRoutes.js";
import investmentRoutes from "./routes/investmentRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://lunivo-qz96ws65h-agagrimagusain-gmailcoms-projects.vercel.app",
      "https://lunivo.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Auth
app.use("/auth", authRoutes);
app.use("/auth", googleAuthRoutes);


app.use("/api/investments", authMiddleware, investmentRoutes);

app.get("/", (req, res) => {
  res.send("Lunivo Backend Running");
});

app.get("/healthz", (req, res) => res.status(200).send("OK"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
