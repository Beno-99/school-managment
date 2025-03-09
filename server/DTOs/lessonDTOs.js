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
    this.name = name;
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.subjectId = subjectId;
    this.classId = classId;
    this.teacherId = teacherId;
  }
}
export default LessonDto;
