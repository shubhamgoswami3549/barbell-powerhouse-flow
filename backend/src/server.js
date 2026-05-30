import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler, notFound } from "./middleware/error.js";

const app = express();

// ---------- Core middleware ----------
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN?.split(",") ?? "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// ---------- Rate limit on auth ----------
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

// ---------- Routes ----------
app.get("/api/health", (_req, res) =>
  res.json({ status: "ok", uptime: process.uptime() })
);

app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/users", userRoutes);

// ---------- 404 + error ----------
app.use(notFound);
app.use(errorHandler);

// ---------- Boot ----------
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🏋️  Barbell API running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  });
