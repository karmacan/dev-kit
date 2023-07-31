import {useEffect, useRef} from 'react';

export const useWindow = () => {
  const windowRef = useRef(null);

  try {
    windowRef.current = window;
  } catch {}

  return {
    window: windowRef.current,
  };
};

export const useDocument = () => {
  const documentRef = useRef(null);

  try {
    documentRef.current = document;
  } catch {}

  return {
    document: documentRef.current,
  };
};

export const useDocumentMount = callback => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (isMountedRef.current) {
      return;
    }

    if (document) {
      callback();
      isMountedRef.current = true;
    }
  }, [document]);
};

export const useElementOutsideClick = (el, onOutsideClick) => {
  const handleDocumentClick = ev => {
    !el.contains(ev.target) && onOutsideClick && onOutsideClick(ev);
  };

  useEffect(() => {
    if (!el) return;

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [el]);
};

export const useWindowScroll = (onScroll, {isSmooth = false, deps = []} /* options */) => {
  const setWindowScrollY = (scrollY, scrollElem = document.body) => {
    if (!window) return;

    if (scrollElem.scrollHeight + window.innerHeight < scrollY)
      scrollElem.style.height = `${scrollY + window.innerHeight}px`;

    window.scrollTo({top: scrollY, behavior: isSmooth ? 'smooth' : 'auto'});
  };

  const handleWindowScroll = () => {
    onScroll && onScroll(Math.floor(window.scrollY));
  };

  useEffect(() => {
    if (!window) return;

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [window, ...deps]);

  return {
    setWindowScrollY,
  };
};

export const useElementScrolledBottom = (el, onScrolledBottom, /*options*/ {triggerArea = 1}) => {
  const isMountedRef = useRef(false);

  const handleElementScrolledDown = ({target: {scrollTop, clientHeight, scrollHeight}}) => {
    const diff = Math.abs(scrollTop + clientHeight - scrollHeight);
    const isBottom = diff <= triggerArea; // px
    isBottom && onScrolledBottom();
  };

  useEffect(() => {
    if (!el || !onScrolledBottom) return;

    if (!isMountedRef.current) {
      handleElementScrolledDown({target: el});
      isMountedRef.current = true;
    }

    el.addEventListener('scroll', handleElementScrolledDown);

    return () => {
      el.removeEventListener('scroll', handleElementScrolledDown);
    };
  }, [el]);
};

export const useElementViewportIntersecting = (
  /*trigger*/ el,
  onIntersecting,
  {triggerMargin = 0}
) => {
  useEffect(() => {
    if (!el || !onIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;

        onIntersecting();

        // observer.observe(newIntersectionElem);
      },
      {
        rootMargin: triggerMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [el, onIntersecting]);
};
