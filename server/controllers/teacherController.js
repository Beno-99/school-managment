import TeacherDTOs from "../DTOs/teacherDTOs.js";
import teacherRepo from "../repositories/teacherRepo.js";

class TeacherController {
  async createTeacher(req, res) {
    try {
      const {
        username,
        name,
        surname,
        email,
        phone,
        address,
        img,
        bloodType,
        sex,
        birthday,
        subjects,
        classes,
        lessons,
      } = req.body;

      if (
        !username ||
        !name ||
        !surname ||
        !email ||
        !phone ||
        !address ||
        !bloodType ||
        !sex ||
        !birthday ||
        !subjects ||
        !classes ||
        !lessons
      ) {
        return res
          .status(400)
          .json({ error: "All required fields must be provided" });
      }

      const teacherData = new TeacherDTOs(req.body); // Only proceed after validation
      const newTeacher = await teacherRepo.createNewTeacher(teacherData);
      res.status(201).json(newTeacher);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getTeachers(req, res) {
    try {
      const page = parseInt(req.query.page);
      const teachers = await teacherRepo.getAllteacher(page);
      res.status(201).json({ status: "success", teachers: teachers });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async getTeacherId(req, res) {
    try {
      const { id } = req.query; // Use req.query if you're sending id as a query parameter

      if (!id) {
        return res.status(400).json({ error: "Teacher ID is required" });
      }

      const teacherById = await teacherRepo.getTeacherById(id);
      if (!teacherById) {
        return res.status(404).json({ error: "Teacher not found" });
      }

      res.status(200).json({ status: "success", teacher: teacherById });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
export default new TeacherController();
