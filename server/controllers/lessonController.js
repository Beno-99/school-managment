import lessonDTOs from "../DTOs/lessonDTOs.js";
import lessonRepo from "../repositories/lessonRepo.js";

class LessonController {
  async createLessonController(req, res) {
    try {
      const lessonDto = new lessonDTOs(req.body);
      const newLesson = await lessonRepo.createNewLesson(lessonDto);
      req.status(201).json(newLesson);
    } catch (error) {
      res.send(error);
    }
  }
}
export default new LessonController();
