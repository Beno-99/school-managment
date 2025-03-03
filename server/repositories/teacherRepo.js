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
        birthday: new Date(data.birthday), // Ensure valid Date format

        subjects: data.subjects?.length
          ? {
              connect: data.subjects
                .filter((s) => s.id)
                .map((s) => ({ id: s.id })),
            }
          : undefined,

        classes: data.classes?.length
          ? {
              connect: data.classes
                .filter((c) => c.id)
                .map((c) => ({ id: c.id })),
            }
          : undefined,

        lessons: data.lessons?.length
          ? {
              connect: data.lessons
                .filter((l) => l.id)
                .map((l) => ({ id: l.id })),
            }
          : undefined,
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
