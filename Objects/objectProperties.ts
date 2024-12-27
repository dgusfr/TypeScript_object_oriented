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

type Product = {
  id: number;
  name: string;
  price: number;
};

export const filterProducts = (products: Product[], maxPrice: number): Product[] => {
  return products.filter((product) => product.price <= maxPrice);
};

type Product = {
  id: number;
  name: string;
  price: number;
};

export const sortProducts = (products: Product[], key: keyof Product): Product[] => {
  return [...products].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};
export const deepCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

type GenericObject = Record<string, any>;

export const updateObjectProperty = (obj: GenericObject, key: string, value: any): GenericObject => {
  return { ...obj, [key]: value };
};

type GenericObject = Record<string, any>;

export const hasProperty = (obj: GenericObject, key: string): boolean => {
  return obj.hasOwnProperty(key);
};

export const areObjectsEqual = (obj1: object, obj2: object): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
type GenericObject = Record<string, any>;

export const cloneProperties = (target: GenericObject, source: GenericObject, keys: string[]): GenericObject => {
  keys.forEach((key) => {
    if (key in source) {
      target[key] = source[key];
    }
  });
  return target;
};
export const mapObjectValues = <T extends object, U>(obj: T, callback: (value: T[keyof T]) => U): Record<keyof T, U> => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, callback(value)])) as Record<keyof T, U>;
};
