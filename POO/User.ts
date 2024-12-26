export default class User {
  #name: string;
  #email: string;
  #birthDate: string;
  #role: string;
  #active: boolean;

  constructor(name: string, email: string, birthDate: string, role: string = 'student', active: boolean = true) {
    this.#name = name;
    this.#email = email;
    this.#birthDate = birthDate;
    this.#role = role;
    this.#active = active;
  }

  // Getters
  get name(): string {
    return this.#name;
  }

  get email(): string {
    return this.#email;
  }

  get birthDate(): string {
    return this.#birthDate;
  }

  get role(): string {
    return this.#role;
  }

  get active(): boolean {
    return this.#active;
  }

  // Setters with validation
  set name(newName: string) {
    if (!newName.trim()) {
      throw new Error("Name format is not valid");
    }
    this.#name = newName;
  }

  set email(newEmail: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      throw new Error("Email format is not valid");
    }
    this.#email = newEmail;
  }

  set birthDate(newBirthDate: string) {
    const date = new Date(newBirthDate);
    if (isNaN(date.getTime())) {
      throw new Error("Birth date is not a valid date");
    }
    const age = this.calculateAge(date);
    if (age < 13) {
      throw new Error("User must be at least 13 years old");
    }
    this.#birthDate = newBirthDate;
  }

  set role(newRole: string) {
    const validRoles = ["student", "teacher", "admin"];
    if (!validRoles.includes(newRole.toLowerCase())) {
      throw new Error("Role is not valid");
    }
    this.#role = newRole.toLowerCase();
  }

  set active(status: boolean) {
    if (typeof status !== "boolean") {
      throw new Error("Active status must be a boolean");
    }
    this.#active = status;
  }

  // Method to calculate age
  private calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  displayInfo(): string {
    return `${this.name}, ${this.email}, Role: ${this.role}`;
  }
}

// Example usage 
const newUser = new User("Juliana", "j@j.com", "2000-01-01");
console.log(newUser.displayInfo());