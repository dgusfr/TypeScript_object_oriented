import Teacher from '../POO/Teacher';

describe('Teacher Class', () => {
  test('should create a teacher with valid data', () => {
    const teacher = new Teacher("Ana", "a@a.com", "1990-08-22");
    expect(teacher.name).toBe("Ana");
    expect(teacher.email).toBe("a@a.com");
    expect(teacher.birthDate).toBe("1990-08-22");
    expect(teacher.role).toBe("teacher");
    expect(teacher.active).toBe(true);
  });

  test('should approve a student with valid data', () => {
    const teacher = new Teacher("Ana", "a@a.com", "1990-08-22");
    expect(teacher.approveStudent("Carlos", "Node.js")).toBe('Student Carlos passed the Node.js course, supervised by Ana.');
  });

  test('should throw an error for empty student name', () => {
    const teacher = new Teacher("Ana", "a@a.com", "1990-08-22");
    expect(() => {
      teacher.approveStudent("", "Node.js");
    }).toThrow("Student name cannot be empty");
  });

  test('should throw an error for empty course name', () => {
    const teacher = new Teacher("Ana", "a@a.com", "1990-08-22");
    expect(() => {
      teacher.approveStudent("Carlos", "");
    }).toThrow("Course name cannot be empty");
  });
});