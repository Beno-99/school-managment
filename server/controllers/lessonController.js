import lessonDTO from "../DTOs/lessonDTO.js";
import lessonRepo from "../repositories/lessonRepo.js";

class LessonController {
  async createLessonController(req, res) {
    try {
      const lessonDto = new lessonDTO(req.body);
      const newLesson = await lessonRepo.createLesson(lessonDto);
      res.status(201).json(newLesson);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
export default new LessonController();
