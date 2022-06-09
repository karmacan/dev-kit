export const isNumber = variable => {
  return typeof variable === 'number';
};

export const isString = variable => {
  return typeof variable === 'number';
};

export const isArray = variable => {
  return Array.isArray(variable);
};

export const isObject = variable => {
  return typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
};

export const isEmpty = variable => {
  if (isArray(variable)) return !variable.length;
  else if (isObject(variable)) return !Object.keys(variable).length;
};

export const getRandom = (digit = 8) =>
  Math.floor(1 * Math.pow(10, digit - 1) + Math.random() * 9 * Math.pow(10, digit - 1));
