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
    this.classes = classes.map((classItem) => ({
      connect: { id: classItem.id },
    }));

    // Format lessons for proper connection in Prisma
    this.lessons = lessons.map((lessonItem) => ({
      connect: { id: lessonItem.id },
    }));

    // Format subjects for proper connection in Prisma
    this.subjects = subjects.map((subjectItem) => ({
      connect: { id: subjectItem.id },
    }));
  }
}
export default TeacherDTO;
