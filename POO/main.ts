import User from "./User";
import Admin from "./Admin";
import Teacher from "./Teacher";

try {
  const newUser = new User("Juliana", "j@j.com", "2000-01-01");
  console.log(newUser.displayInfo());

  // Updating name with a valid value
  newUser.name = "Juliana Silva";
  console.log(newUser.name);

  // Attempting to update name with an invalid value (commented out)
  // newUser.name = ""; // This would throw an error

  const newAdmin = new Admin("Diego", "d@d.com", "1985-05-15");
  console.log(newAdmin.displayInfo());
  console.log(newAdmin.createCourse("JavaScript", 20));

  const newTeacher = new Teacher("Ana", "a@a.com", "1990-08-22");
  console.log(newTeacher.displayInfo());
  console.log(newTeacher.approveStudent("Carlos", "Node.js"));

} catch (error) {
  console.error(`Error: ${(error as Error).message}`);
}