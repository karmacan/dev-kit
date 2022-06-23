import {isArray, isObject, isDate} from '~src/utils/helpers/script';

export const parseOptions = from => {
  if (!isArray(from)) return;
  return isObject(from[0])
    // From array of objects
    ? from.map((item, idx) => ({idx, ...item}))
    // From array of strings
    : from.map((text, idx) => ({idx, text}));
};

export const markupMatchedText = match => {
  const matched = match.shift();
  const {index: start, input: text} = match;
  const left = text.substring(0, start); // remove after matched
  const right = text.substring(text.indexOf(matched) + matched.length); // remove before matched
  return `${left}<b>${matched}</b>${right}`; // murkup matched text
};

export const toString = (from) => {
  if (isDate(from)) {
    return from.toISOString().split('T')[0]; // YYYY-MM-DD
  } else {
    return '' + from;
  }
}