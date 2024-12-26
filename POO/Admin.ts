import User from "./User";

export default class Admin extends User {
  constructor(name: string, email: string, birthDate: string, role: string = "admin", active: boolean = true) {
    super(name, email, birthDate, role, active);
  }

  createCourse(courseName: string, vacancies: number): string {
    if (!courseName.trim()) {
      throw new Error("Course name cannot be empty");
    }
    if (!Number.isInteger(vacancies) || vacancies <= 0) {
      throw new Error("Vacancies must be a positive integer");
    }
    return `Course "${courseName}" created with ${vacancies} vacancies.`;
  }
}