import prisma from "../database.js";

class TeacherRepo {
  async createNewTeacher(data) {
    return await prisma.teacher.create({
      data: {
        id: data.id, // Unique ID for the teacher
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email, // Optional
        phone: data.phone, // Optional
        address: data.address,
        bloodType: data.bloodType,
        sex: data.sex,
        subjects: data.subjects ? { connect: data.subjects.map(subject => subject.connect) } : undefined,
        classes: data.classes ? { connect: data.classes.map(cls => cls.connect) } : undefined,
        lessons: data.lessons ? { connect: data.lessons.map(lesson => lesson.connect) } : undefined,
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
