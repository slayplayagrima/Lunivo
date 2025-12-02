import express from "express";
import { addInvestment } from "../controllers/investmentController.js";

const router = express.Router();

router.post("/", addInvestment);

export default router;
