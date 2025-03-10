class LessonDto {
  constructor({
    name,
    day,
    startTime,
    endTime,
    subjectId,
    classId,
    teacherId,
  }) {
    if (!subjectId || subjectId === "") {
      throw new Error("subjectId is required for creating a lesson");
    }
    if (!classId || classId === "") {
      throw new Error("classId is required for creating a lesson");
    }
    if (!teacherId || teacherId === "") {
      throw new Error("teacherId is required for creating a lesson");
    }
    
    this.name = name;
    this.day = day.toUpperCase();
    this.startTime = new Date(`2025-01-01T${startTime}:00`).toISOString();
    this.endTime = new Date(`2025-01-01T${endTime}:00`).toISOString();
    
    // Handle subject relation
    this.subject = {
      connect: { id: parseInt(subjectId, 10) },
    };
    
    // Handle class relation
    this.class = {
      connect: { id: parseInt(classId, 10) },
    };
    
    // Handle teacher relation
    this.teacher = {
      connect: { id: teacherId },
    };
  }
}
export default LessonDto;
