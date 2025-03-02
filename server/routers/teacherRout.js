import express from "express";
import teacherController from "../controllers/teacherController.js";

const router = express.Router();

router.post("/createTeacher", teacherController.createTeacher);
router.get("/getAllTeachers", teacherController.getTeachers);
router.get("/getTeacherId", teacherController.getTeacherId);

export default router;
