type GenericObject = Record<string, any>;

export const addObjectProperty = (obj: GenericObject, key: string, value: any): GenericObject => {
  obj[key] = value;
  return obj;
};

export const removeObjectProperty = (obj: GenericObject, key: string): GenericObject => {
  delete obj[key];
  return obj;
};
