class TeacherDTO {
  constructor({
    username,
    name,
    surname,
    email,
    phone,
    address,
    img,
    bloodType,
    sex,
    birthday,
    classes,
    lessons,
    subjects,
  }) {
    // Generate a unique ID for the teacher
    this.id = `teacher_${username}_${Date.now()}`;
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.img = img;
    this.bloodType = bloodType;
    // Convert sex to uppercase to match the UserSex enum
    this.sex = sex.toUpperCase();
    this.birthday = birthday;

    // Format classes for proper connection in Prisma
    this.classes = {
      connect: classes.map(classItem => ({ id: parseInt(classItem.id) }))
    };

    // Format lessons for proper connection in Prisma
    this.lessons = {
      connect: lessons.map(lessonItem => ({ id: parseInt(lessonItem.id) }))
    };

    // Format subjects for proper connection in Prisma
    this.subjects = {
      connect: subjects.map(subjectItem => ({ id: parseInt(subjectItem.id) }))
    };
  }
}
export default TeacherDTO;
