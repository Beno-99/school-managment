import lessonDTO from "../DTOs/lessonDTO.js";
import lessonRepo from "../repositories/lessonRepo.js";

class LessonController {
  async createLessonController(req, res) {
    try {
      const lessonDto = new lessonDTOs(req.body);
      const newLesson = await lessonRepo.createNewLesson(lessonDto);
      req.status(201).json(newLesson);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
export default new LessonController();
