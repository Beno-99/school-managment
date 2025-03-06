"use client";
import teacherRouter from "./routers/teacherRout.js";
import classRouter from "./routers/classRouter.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3002;

// Middleware to parse JSON
app.use(express.json());
app.use(cors({ origin: "*" }));

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/teacher", teacherRouter);
app.use("/class", classRouter);
