import prisma from "../database";
class ClassRepository{
    async createNewClass(data){
        return await prisma.class.create({
            data: {
        name: data.name,
        capacity: data.capacity,
        supervisorId: data.supervisorId || null,
        gradeId: data.gradeId,
        },
        })
    }
}
export default new ClassRepository