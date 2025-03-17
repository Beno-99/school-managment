import lessonDTOs from "../DTOs/lessonDTOs.js";
import lessonRepo from "../repositories/lessonRepo.js";

class LessonController {
  async createLessonController(req, res) {
    try {
      const lessonDto = new lessonDTOs(req.body);
      const newLesson = await lessonRepo.createNewLesson(lessonDto);
      res
        .status(200)
        .json({ message: "Lesson created successfully", newLesson });
    } catch (error) {
      res.send(error);
    }
  }
}
export default new LessonController();
