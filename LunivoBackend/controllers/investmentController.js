import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ADD investment
export const addInvestment = async (req, res) => {
  try {
    const userId = req.user.id; // from middleware
    const { symbol, type, quantity, buyPrice } = req.body;

    // Validate all fields
    if (!symbol || !type || !quantity || !buyPrice) {
      return res.status(400).json({ message: "All fields required" });
    }

    const investment = await prisma.investment.create({
      data: {
        userId,
        symbol,
        type,
        quantity: Number(quantity),
        buyPrice: Number(buyPrice),
      },
    });

    res.status(201).json({ message: "Investment added", investment });
  } catch (error) {
    console.error("Add investment error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET investments
export const getInvestments = async (req, res) => {
  try {
    const userId = req.user.id; // from middleware

    const investments = await prisma.investment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ investments });
  } catch (error) {
    console.error("Get investments error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE investments
export const deleteInvestment = async (req, res) => {
  try {
    const userId = req.user.id;     
    const { id } = req.params;      

    // Check if investment exists and belongs to the user
    const investment = await prisma.investment.findUnique({
      where: { id: Number(id) },
    });

    if (!investment) {
      return res.status(404).json({ message: "Investment not found" });
    }

    if (investment.userId !== userId) {
      return res.status(403).json({ message: "Not allowed" });
    }

    // Delete
    await prisma.investment.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Investment deleted" });
  } catch (error) {
    console.error("Delete investment error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
