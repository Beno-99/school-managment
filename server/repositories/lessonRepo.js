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
          subject: data.subject, // Use the subject relation object
          class: data.class, // Use the class relation object
          teacher: data.teacher, // Use the teacher relation object
        },
      });
      return newLesson;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export default new LessonRepository();
