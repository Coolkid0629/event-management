import express from "express";
import { register, login, currentUser } from "../controllers/UserController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("/api/users route is working...");
});

router.post("/register", register);

router.post("/login", login);

router.get("/current", validateToken, currentUser);

export default router;
