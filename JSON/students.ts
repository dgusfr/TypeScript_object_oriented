import studentData from "./students.json";

type Student = {
  id: number;
  name: string;
  age: number;
  courses: string[];
};

export const getStudent = (): Student => studentData as Student;