export const parseJSON = (jsonString: string): object | null => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return null;
  }
};

export const stringifyJSON = (data: object): string => {
  try {
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Unable to stringify object:", error);
    return "";
  }
};
