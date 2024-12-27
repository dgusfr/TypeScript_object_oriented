import studentsData from "./students.JSON";

type Student = {
  id: number;
  name: string;
  age: number;
  courses: string[];
};

export const getAllStudents = (): Student[] => studentsData as Student[];

export const findStudentById = (id: number): Student | undefined => {
  return getAllStudents().find((student) => student.id === id);
};
