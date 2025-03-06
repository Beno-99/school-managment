import express from "express";
import classController from "../controllers/classController.js";

const router = express.Router();

router.post("/createClass", classController.createClass);
export default router;
