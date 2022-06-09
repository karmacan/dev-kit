import {isArray, isObject} from '@src/utils/helpers/script';

export const parseOptions = from => {
  if (!from || !isArray(from)) return;
  return isObject(from[0])
    ? from.map((item, idx) => ({idx, ...item})) // from array of objects
    : from.map((text, idx) => ({idx, text})); // from array of strings
};

export const markupMatchedText = match => {
  const matched = match.shift();
  const {index: start, input: text} = match;
  const left = text.substring(0, start); // remove after matched
  const right = text.substring(text.indexOf(matched) + matched.length); // remove before matched
  return `${left}<b>${matched}</b>${right}`;
};
