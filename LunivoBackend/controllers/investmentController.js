import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ADD investment
export const addInvestment = async (req, res) => {
  try {
    const userId = req.user.id; // from auth middleware
    const { symbol, quantity, buyPrice } = req.body;

    if (!symbol || !quantity || !buyPrice) {
      return res.status(400).json({ message: "All fields required" });
    }

    const investment = await prisma.investment.create({
      data: {
        userId,
        symbol,
        quantity: parseFloat(quantity),
        buyPrice: parseFloat(buyPrice),
      },
    });

    res.status(201).json({ message: "Investment added", investment });
  } catch (error) {
    console.error("Add investment error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
