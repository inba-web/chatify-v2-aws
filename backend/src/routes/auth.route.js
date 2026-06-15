import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
const router = express.Router();

// router.use(arcjetProtection);

// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/logout", logout);

router.post("/signup", signup);
router.post("/login", login);

router.post("/logout", protectRoute, logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) => {
  return res.status(200).json(req.user);
});

console.log("Auth routes loaded");

export default router;
