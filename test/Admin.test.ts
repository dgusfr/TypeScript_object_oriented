import Admin from '../POO/Admin';

describe('Admin Class', () => {
  test('should create an admin with valid data', () => {
    const admin = new Admin("Diego", "d@d.com", "1985-05-15");
    expect(admin.name).toBe("Diego");
    expect(admin.email).toBe("d@d.com");
    expect(admin.birthDate).toBe("1985-05-15");
    expect(admin.role).toBe("admin");
    expect(admin.active).toBe(true);
  });

  test('should create a course with valid data', () => {
    const admin = new Admin("Diego", "d@d.com", "1985-05-15");
    expect(admin.createCourse("JavaScript", 20)).toBe('Course "JavaScript" created with 20 vacancies.');
  });

  test('should throw an error for empty course name', () => {
    const admin = new Admin("Diego", "d@d.com", "1985-05-15");
    expect(() => {
      admin.createCourse("", 10);
    }).toThrow("Course name cannot be empty");
  });

  test('should throw an error for invalid vacancies', () => {
    const admin = new Admin("Diego", "d@d.com", "1985-05-15");
    expect(() => {
      admin.createCourse("Python", -5);
    }).toThrow("Vacancies must be a positive integer");
  });
});