import User from "../models/User.js";
import { signToken } from "../middleware/auth.js";

export async function register(req, res) {
  const { name, email, password, plan, phone, age, gender, goal } = req.body || {};

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email and password are required" });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  // Check if email already exists
  const exists = await User.findOne({ email: email.toLowerCase() });
  if (exists) return res.status(409).json({ message: "Email already registered" });

  // Create user (password will be hashed by pre-save hook in User.js)
  const user = await User.create({
    name,
    email,
    password,
    membership: { plan: plan || "none", since: new Date() },
    phone,
    age,
    gender,
    goal,
  });

  const token = signToken(user._id);

  res.status(201).json({ user, token });
}

export async function login(req, res) {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = signToken(user._id);
  res.json({ user: user.toJSON(), token });
}

export async function me(req, res) {
  res.json({ user: req.user });
}
