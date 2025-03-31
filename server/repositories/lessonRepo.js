import prisma from "../database.js";

class LessonRepository {
  async createNewLesson(data) {
    const newLesson = await prisma.lesson.create({
      data: {
        name: data.name,
        day: data.day,
        startTime: data.startTime,
        endTime: data.endTime,
        subjectId: data.subjectId,
        classId: data.classId,
        teacherId: data.teacherId,
      },
      include: { exams: true, assignments: true, attendances: true },
    });
    return newLesson;
  }
}
export default new LessonRepository();
