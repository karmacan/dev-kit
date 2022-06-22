export const isNumber = variable => {
  return typeof variable === 'number';
};

export const isString = variable => {
  return typeof variable === 'string';
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

export const isDate = variable => {
  return typeof variable.getDate === 'function';
}