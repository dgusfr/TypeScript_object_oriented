export const traverseObject = (obj: object): void => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};
