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

    this.classes = classes.map((classItem) => ({ id: classItem.id }));
    this.lessons = lessons.map((lessonItem) => ({ id: lessonItem.id }));
    this.subjects = subjects.map((subjectItem) => ({ id: subjectItem.id }));
  }
}
export default TeacherDTO;
