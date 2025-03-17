import prisma from "../database.js";
class ClassRepository {
  async createNewClass(data) {
    if (!data.name || !data.capacity || !data.gradeId) {
      return "Missing required fields: name, capacity, or gradeId";
    }
    try {
      return await prisma.class.create({
        data: {
          name: data.name,
          capacity: data.capacity,
          supervisorId: data.supervisorId || null,
          gradeId: data.gradeId,
        },
      });
    } catch (error) {
      return {
        status: 400,
        error: error.message,
      };
    }
  }
}
export default new ClassRepository();
