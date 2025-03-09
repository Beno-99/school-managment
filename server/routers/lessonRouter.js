import { Router } from "express";
import lessonController from "../controllers/lessonController.js";
const router = Router();

router.post("/createLesson", lessonController.createLessonController);

export default router;
