export type TOption = {
  id: number;
  text?: string;
};

const unpx = (px) => parseInt(px, 10);

export const moveCaretToElement = (
  caretElem: HTMLElement,
  toElem: HTMLElement,
  orientation = 'horizontal'
) => {
  if (!caretElem || !toElem) return;

  if (orientation === 'horizontal') {
    const left = `${toElem?.offsetLeft}px`;
    const { width } = getComputedStyle(toElem);
    caretElem!.style.left = left;
    caretElem!.style.width = width;
  }

  if (orientation === 'vertical') {
    const margin =
      getComputedStyle(caretElem).getPropertyValue('--caret-margin');
    const top = `${toElem?.offsetTop - unpx(margin)}px`;
    const { height, paddingTop, paddingBottom } = getComputedStyle(toElem);
    caretElem!.style.top = top;
    caretElem!.style.height = `${
      unpx(height) + unpx(paddingTop) + unpx(paddingBottom)
    }px`;
  }
};

const isArray = (variable) => Array.isArray(variable);

const isObject = (variable) =>
  typeof variable === 'object' && !Array.isArray(variable) && variable !== null;

export const parseOptions = (...from) => {
  if (isArray(from[0])) {
    [from] = from; // array was passed as argument (standard)
  }

  return !isObject(from[0])
    ? // From array of strings
      from.map((text, i) => ({ id: i, text }))
    : // From array of objects
      from.map((item, i) => ({ id: i, ...item }));
};
