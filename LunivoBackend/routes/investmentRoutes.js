import express from "express";
import { addInvestment, getInvestments, deleteInvestments } from "../controllers/investmentController.js";


const router = express.Router();

router.post("/", addInvestment);
router.get("/", getInvestments);
router.delete("/:id", deleteInvestment);

export default router;
