import { Router } from "express";
import { protect } from "../middleware/auth.js";
import User from "../models/User.js";

const router = Router();

// GET /api/users/me — current profile
router.get("/me", protect, (req, res) => res.json({ user: req.user }));

// PATCH /api/users/me — update profile
router.patch("/me", protect, async (req, res) => {
  const allowed = ["name", "membership"];
  const updates = {};
  for (const key of allowed) if (key in req.body) updates[key] = req.body[key];

  const user = await User.findByIdAndUpdate(req.user._id, updates, {
    new: true,
    runValidators: true,
  });
  res.json({ user });
});

export default router;
