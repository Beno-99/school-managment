import prisma from "../database.js";
import { ITEM_PER_PAGE_TEACHERS } from "../lib/settings.js";

class TeacherRepo {
  async createNewTeacher(data) {
    return await prisma.teacher.create({
      data: {
        id: data.id || crypto.randomUUID(), // Ensure id exists
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        bloodType: data.bloodType,
        sex: data.sex,
        subjects: data.subjects,
        classes: data.classes,
        lessons: data.lessons,
        birthday: data.birthday, // Must be a valid ISO-8601 DateTime string
      },
      include: { classes: true, lessons: true, subjects: true },
    });
  }

  async getAllteacher(page) {
    try {
      const AllTeachers = await prisma.teacher.findMany({
        skip: ITEM_PER_PAGE_TEACHERS * (page - 1),
        take: ITEM_PER_PAGE_TEACHERS,
        include: { subjects: true, classes: true, lessons: true },
      });
      return AllTeachers;
    } catch (error) {
      console.log("error :", error);
    }
  }

  async getTeacherById(id) {
    try {
      const Teacher = await prisma.teacher.findUnique({
        where: { id },
        include: { classes: true, lessons: true, subjects: true },
      });
      return Teacher;
    } catch (error) {
      console.log("error :", error);
    }
  }
}
export default new TeacherRepo();
