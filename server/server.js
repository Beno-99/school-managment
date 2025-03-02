import teacherRouter from "./routers/teacherRout.js";
import express from "express";
import cors from "cors";
import prisma from "./database.js";

const app = express();
const PORT = 3002;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/teacher", teacherRouter);
