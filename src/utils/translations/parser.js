let lg = '';
let texts = {};

export const parseDictionary = (dictionary, language = 'ru') => {
  lg = language;
  texts = dictionary; // crutial assignment for escaping undefined keys error and skiping non language keys
  setDeepObject(dictionary);
  return texts;
};

const setDeepObject = (obj, path = '') => {
  for (let propKey in obj) {
    // Prop is object
    if (isObject(obj[propKey])) {
      setDeepObject(obj[propKey], `${path}${propKey}.`);
    }
    // Prop is array with objects
    else if (Array.isArray(obj[propKey]) && propKey !== lg) {
      for (let i = 0; i < obj[propKey].length; i++) {
        setDeepObject(obj[propKey][i], `${path}${propKey}[${i}].`);
      }
    }
    // Prop is target
    else {
      // Prop contains translation
      if (obj.hasOwnProperty(lg)) {
        setObjectByPropPath(texts, sliceLastChar(path), obj[lg]);
      }
      // Prop doesnt contain translation, set with default
      else if (obj.hasOwnProperty('ru') && !isObject(obj['ru'])) {
        setObjectByPropPath(texts, sliceLastChar(path), obj['ru']);
      }
    }
  }
};

const sliceLastChar = (text) => text.slice(0, -1); // slices excessive last dot in path
const isObject = variable => typeof variable === 'object' && !Array.isArray(variable);

const setObjectByPropPath = (obj, path, value) => {
  path = path.split('.');
  for (let i = 0; i < path.length - 1; i += 1) {
    const match = path[i].match(/([a-zA-Z]+\d*)(\[(\d)\])+/); // matches itemX[N]
    obj = match !== null ? obj[match[1]][match[3]] : obj[path[i]]; // match[1] - item, match[3] - N
  }
  obj[path[path.length - 1]] = value;
};