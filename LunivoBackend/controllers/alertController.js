import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addAlert = async (req, res) => {
  try {
    const userId = req.user.id;
    const { symbol, direction, targetPrice } = req.body;

    if (!symbol || !direction || !targetPrice) {
      return res.status(400).json({ message: "All fields required" });
    }

    const alert = await prisma.priceAlert.create({
      data: {
        userId,
        symbol,
        direction,
        targetPrice: Number(targetPrice),
      },
    });

    res.json({ message: "Alert created", alert });
  } catch (err) {
    console.error("ADD ALERT ERROR:", err.message, err);
    res.status(500).json({ message: "Server error" });
  }
};

// export const getAlerts = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const alerts = await prisma.priceAlert.findMany({
//       where: { userId },
//       orderBy: { createdAt: "desc" }
//     });

//     res.json({ alerts });
//   } catch (err) {
//     console.error("GET ALERTS ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

