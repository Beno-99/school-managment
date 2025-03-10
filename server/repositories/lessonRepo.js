import prisma from "../database.js";

class LessonRepository {
  async createLesson(data) {
    try {
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
      });
      return newLesson;
    } catch (error) {
      return error.message;
    }
  }
}
export default LessonRepository;
