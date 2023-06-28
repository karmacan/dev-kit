export const isString = (variable) => {
  return typeof variable === "string";
};

export const isNumber = (variable) => {
  return typeof variable === "number";
};

export const isArray = (variable) => {
  return Array.isArray(variable);
};

export const isObject = (variable) => {
  return (
    typeof variable === "object" &&
    !Array.isArray(variable) &&
    variable !== null
  );
};

// / array + object

export const isEmpty = (variable) => {
  if (isArray(variable)) {
    return !variable.length;
  }
  if (isObject(variable)) {
    return Object.is(variable, {});
  }
};

export const addTo = (variable, value) => {
  if (isArray(variable)) {
    return [...variable, value];
  }
};

export const removeFrom = (variable, value) => {
  if (isArray(variable)) {
    return variable.filter((val) => val !== value);
  }
};
