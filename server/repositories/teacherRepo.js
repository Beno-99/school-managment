import prisma from "../database.js";

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
        subjects: data.subjects ? { connect: data.subjects } : undefined,
        classes: data.classes ? { connect: data.classes } : undefined,
        lessons: data.lessons ? { connect: data.lessons } : undefined,
        birthday: data.birthday, // Must be a valid ISO-8601 DateTime string
      },
    });
  }

  async getAllteacher() {
    try {
      const AllTeachers = await prisma.teacher.findMany({
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
