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
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.img = img;
    this.bloodType = bloodType;
    this.sex = sex;
    this.birthday = birthday;
    this.classes = classes.map((className) => ({
      name: className,
      capacity: 20,
    })); // Default capacity
    this.lessons = lessons.map((lessonName) => ({
      name: lessonName,
      capacity: 40,
    })); // Default capacity
    this.subjects = subjects.map((subjectName) => ({
      name: subjectName,
      capacity: 30,
    })); // Default capacity
  }
}
export default TeacherDTO;
