import { isArray, isObject, isString } from "./primitives";

export const parseOptions = (...from) => {
  if (isArray(from[0])) {
    [from] = from;
  }
  return isObject(from[0])
    ? // From array of objects
      from.map((item, i) => ({ i, ...item }))
    : // From array of strings
      from.map((text, i) => ({ i, text }));
};

export const unpx = (px) => parseInt(px, 10);

export const markupMatchedText = (match) => {
  const matched = match.shift();
  const { index: start, input: text } = match;
  const left = text.substring(0, start); // remove after matched
  const right = text.substring(text.indexOf(matched) + matched.length); // remove before matched
  return `${left}<b>${matched}</b>${right}`; // murkup matched text
};

export const parseDate = (date) => {
  if (!date) {
    return;
  }

  if (isString(date)) {
    const match = date.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    if (match) {
      let [_, dd, mm, yyyy] = match;
      dd = dd.length === 1 ? `0${dd}` : dd;
      mm = mm.length === 1 ? `0${mm}` : mm;
      return new Date(`${yyyy}-${mm}-${dd}`);
    }
  }
};

export const parseHtml = (text = "") => {
  if (!text) {
    return;
  }

  text = text.replace(/&lt;/g, "<");
  text = text.replace(/&gt;/g, ">");
  return text;
};

export const inclineNoun = (count, words /* [1 яблоко, 2 яблока, 5 яблок] */) => {
  const { length } = words;

  if (!words || !length) return;

  const cases = length > 2 ? [2, 0, 1, 1, 1, 2] : [1, 0, 1, 1, 1, 1];

  return words[
    count % 100 > 4 && count % 100 < 20
      ? length - 1
      : cases[count % 10 < 5 ? count % 10 : 5]
  ];
};

export const inclineVerb = (words, count) => {
  // остался 1 осталось 2

  const { length } = words;

  if (!length) return;

  return words[count === 1 ? 0 : 1];
};
