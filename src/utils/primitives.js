export const isString = (varb) => {
  return typeof varb === "string";
};

export const isNumber = (varb) => {
  return typeof varb === "number";
};

export const isArray = (varb) => {
  return Array.isArray(varb);
};

export const isObject = (varb) => {
  return (
    typeof varb === "object" &&
    !Array.isArray(varb) &&
    varb !== null
  );
};

// / array + object

export const isEmpty = (ref) => {
  if (isArray(ref)) {
    return !ref.length;
  }
  if (isObject(ref)) {
    return Object.is(ref, {});
  }
};

export const addTo = (arr, val) => isArray(arr) && [...arr, val];

export const deleteFrom = (arr, val) => isArray(arr) && arr.filter((v) => val !== v);

export const uniq = (arr) => isArray(arr) && [...new Set(arr)];
