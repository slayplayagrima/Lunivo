import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
console.log("Connected DB:", process.env.DATABASE_URL);   

// Initialize Express app
const app=express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Lunivo Backend Running");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});


