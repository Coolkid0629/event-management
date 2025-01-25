import express from "express";
import dotenv from "dotenv";

import userRouter from "./routes/UserRoutes.js";
import eventRouter from "./routes/EventRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT;

// MiddleWares
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/events", eventRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
