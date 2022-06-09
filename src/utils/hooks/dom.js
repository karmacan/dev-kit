import React from 'react';

export const useElementOutsideClick = (el, handleOutsideClick) => {
  const handleDocumentClick = ev => {
    !el.contains(ev.target) && handleOutsideClick && handleOutsideClick(ev);
  };

  React.useEffect(() => {
    if (!el) return;
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [el]);
};

export const useWindowScroll = handleScroll => {
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
