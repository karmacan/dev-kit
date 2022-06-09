export const moveCaretToElement = (el, containerElement) => {
  const left = el.offsetLeft + 'px';
  const {width} = getComputedStyle(el);
  containerElement.style.setProperty('--caret-left', left);
  containerElement.style.setProperty('--caret-width', width);
};