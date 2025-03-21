import Class from "../DTOs/classDTOs.js";
import classRepo from "../repositories/classRepo.js";

class ClassController {
  async createClass(req, res) {
    try {
      const classDto = new Class(req.body);
      const newClass = await classRepo.createNewClass(classDto);
      res.status(201).json(newClass);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new ClassController();
