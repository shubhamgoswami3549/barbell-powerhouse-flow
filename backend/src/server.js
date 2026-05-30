import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import { errorHandler, notFound } from "./src/middleware/error.js";

dotenv.config();
const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

// Health check
app.get("/api/health", (_req, res) =>
  res.json({ status: "ok", uptime: process.uptime() })
);

// Mount routes
app.use("/api/auth", authRoutes);   // <-- this is critical
app.use("/api/users", userRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Boot
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});
