import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("/api/events route is working...");
});

export default router;
