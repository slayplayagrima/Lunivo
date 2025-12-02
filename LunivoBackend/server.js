import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import googleAuthRoutes from "./routes/googleAuthRoutes.js";
import investmentRoutes from "./routes/investmentRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Auth
app.use("/auth", authRoutes);
app.use("/auth", googleAuthRoutes);

// INVESTMENTS — must come AFTER express.json()
app.use("/api/investments", authMiddleware, investmentRoutes);

app.get("/", (req, res) => {
  res.send("Lunivo Backend Running");
});

app.get("/healthz", (req, res) => res.status(200).send("OK"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
