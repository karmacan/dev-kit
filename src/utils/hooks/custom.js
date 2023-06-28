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

export const useDocumentMount = (callback) => {
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

export const useElementScrolledBottom = (el, onScrolledBottom, {triggerArea = 1} /* options */) => {
  const isMountedRef = useRef(false);
  const doScrollOnceRef = useRef(false);

  const handleElementScrolledDown = ev => {
    const {target} = ev;
    const diff = Math.abs(target.scrollTop + target.clientHeight - target.scrollHeight);
    const isBottom = diff <= triggerArea; // px
    isBottom && onScrolledBottom && onScrolledBottom();
  };

  useEffect(() => {
    if (!el) return;

    if (!isMountedRef.current) {
      // If user scrolled before el ref was mapped
      doScrollOnceRef.current = true;
      isMountedRef.current = true;
    }

    if (doScrollOnceRef.current) {
      handleElementScrolledDown({target: el});
      doScrollOnceRef.current = false;
    }

    el.addEventListener('scroll', handleElementScrolledDown);

    return () => {
      el.removeEventListener('scroll', handleElementScrolledDown);
      isMountedRef.current = false;
    };
  }, [el]);
};

export const useElementViewportIntersecting = (el /* trigger */, onIntersecting) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([event]) => {
        event.intersectionRatio > 0 && onIntersecting();
      },
      {
        threshold: 1.0, // how much a target element is visible
      }
    );

    el && observer.observe(el);

    return () => {
      el && observer.unobserve(el);
    };
  }, [el, onIntersecting]);
};
