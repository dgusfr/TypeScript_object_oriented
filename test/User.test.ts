import User from '../POO/User';

describe('User Class', () => {
  test('should create a user with valid data', () => {
    const user = new User("Juliana", "j@j.com", "2000-01-01");
    expect(user.name).toBe("Juliana");
    expect(user.email).toBe("j@j.com");
    expect(user.birthDate).toBe("2000-01-01");
    expect(user.role).toBe("student");
    expect(user.active).toBe(true);
  });

  test('should throw an error for invalid email', () => {
    expect(() => {
      new User("Juliana", "invalidemail", "2000-01-01");
    }).toThrow("Email format is not valid");
  });

  test('should throw an error for underage user', () => {
    const today = new Date();
    const recentBirthDate = `${today.getFullYear() - 10}-01-01`; // 10 years ago
    expect(() => {
      new User("Juliana", "j@j.com", recentBirthDate);
    }).toThrow("User must be at least 13 years old");
  });

  test('should update name with a valid value', () => {
    const user = new User("Juliana", "j@j.com", "2000-01-01");
    user.name = "Juliana Silva";
    expect(user.name).toBe("Juliana Silva");
  });

  test('should throw an error when setting an invalid name', () => {
    const user = new User("Juliana", "j@j.com", "2000-01-01");
    expect(() => {
      user.name = "";
    }).toThrow("Name format is not valid");
  });
});