import express from "express";
import { addInvestment } from "../controllers/investmentController.js";
import { getInvestments } from "../controllers/investmentController.js";

const router = express.Router();

router.post("/", addInvestment);
router.get("/", getInvestments);

export default router;
