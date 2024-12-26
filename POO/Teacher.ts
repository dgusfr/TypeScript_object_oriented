import User from "./User";

export default class Teacher extends User {
  constructor(name: string, email: string, birthDate: string, role: string = "teacher", active: boolean = true) {
    super(name, email, birthDate, role, active);
  }

  approveStudent(student: string, course: string): string {
    if (!student.trim()) {
      throw new Error("Student name cannot be empty");
    }
    if (!course.trim()) {
      throw new Error("Course name cannot be empty");
    }
    return `Student ${student} passed the ${course} course, supervised by ${this.name}.`;
  }
}