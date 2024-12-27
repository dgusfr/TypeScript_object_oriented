type Person = {
  name: string;
  age: number;
  occupation?: string;
};

export const person: Person = {
  name: "Alice",
  age: 30,
};

export const updatePersonAge = (newAge: number): void => {
  person.age = newAge;
};
