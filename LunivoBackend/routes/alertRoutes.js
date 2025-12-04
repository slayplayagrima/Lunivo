import express from "express";
import { addAlert, getAlerts } from "../controllers/alertController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Apply auth to every route (POST + GET)
router.use(authMiddleware);

router.post("/", addAlert);
router.get("/", getAlerts);

export default router;
