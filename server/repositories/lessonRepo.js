import prisma from "../database.js";

class LessonRepository {
  async createNewLesson(data) {
    try {
      // Validate input data
      if (
        !data.name ||
        !data.day ||
        !data.startTime ||
        !data.endTime ||
        !data.subjectId ||
        !data.classId ||
        !data.teacherId
      ) {
        throw new Error("Missing required fields");
      }
      const newLesson = await prisma.lesson.create({
        data: {
          name: data.name,
          day: data.day,
          startTime: new Date(data.startTime), // Ensure this is a valid DateTime
          endTime: new Date(data.endTime), // Ensure this is a valid DateTime
          subjectId: data.subjectId,
          classId: data.classId,
          teacherId: data.teacherId,
        },
        include: { exams: true, assignments: true, attendances: true },
      });
      return newLesson;
    } catch (error) {
      console.error("Error creating lesson:", error);
      throw error;
    }
  }
}
export default new LessonRepository();
