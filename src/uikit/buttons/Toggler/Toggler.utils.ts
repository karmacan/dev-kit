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

  const {
    width,
    paddingRight,
    paddingLeft,
    height,
    paddingTop,
    paddingBottom,
  } = getComputedStyle(toElem);
  const indent = getComputedStyle(caretElem).getPropertyValue('--indent');
  const { borderWidth } = getComputedStyle(caretElem);

  if (orientation === 'horizontal') {
    caretElem!.style.left = toElem?.offsetLeft + 'px';
    caretElem!.style.width =
      unpx(width) + unpx(paddingRight) + unpx(paddingLeft) + 'px';
  }

  if (orientation === 'vertical') {
    caretElem!.style.top = toElem?.offsetTop - unpx(indent) + 'px';
    caretElem!.style.height =
      unpx(height) + unpx(paddingTop) + unpx(paddingBottom) + 'px';

    caretElem!.style.left =
      toElem?.offsetLeft + unpx(indent) + unpx(borderWidth) * 2 + 'px';
    caretElem!.style.width =
      unpx(width) + 'px';
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
