export const moveCaretToElement = (el, containerElement) => {
  const left = el.offsetLeft + 'px';
  const {width} = getComputedStyle(el);
  containerElement.style.setProperty('--caret-left', left);
  containerElement.style.setProperty('--caret-width', width);
};

export const flipIcon = (svgElement, isUp) => {
  const svgElements = svgElement.closest('tr').querySelectorAll('svg');
  svgElements.forEach(el => {
    if (el !== svgElement) {
      el.classList.remove('flipped');
    } else {
      isUp ? svgElement.classList.remove('flipped') : svgElement.classList.add('flipped');
    }
  });
};
