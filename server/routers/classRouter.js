import express from "express";
import classController from "../controllers/classController";

const router = express.Router();

router.post("/createClass", classController.createClass);
