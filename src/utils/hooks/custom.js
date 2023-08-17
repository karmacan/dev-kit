import React, {useRef, useState, useEffect} from 'react';

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

export const useWindowScroll = (onScroll, /*options*/ {isSmooth = false, deps = []}) => {
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

export const useElementIntersectingViewport = (
  /*trigger*/ el,
  onIntersecting,
  {triggerOnlyOnEntry = false, triggerMargin = '0px', threshold = 0}
) => {
  useEffect(() => {
    if (!el || !onIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (triggerOnlyOnEntry && !entry.isIntersecting) return; // continue only on element enter viewport

        onIntersecting();

        observer.unobserve(el); // unobserve observed el
      },
      {
        rootMargin: triggerMargin,
        threshold, // how much trigger element must be visible for trigger
      }
    );

    observer.observe(el); // set new each time useEffect get new element
  }, [el, onIntersecting]);
};

export const useWindowResize = (props = {}) => {
  const {onResize, breakpoints = []} = props;
  const breakpoints_ = breakpoints.sort((a, b) => (a < b ? -1 : 1));

  const prevWidthRef = useRef();
  const [windowWidth, setWindowWidth] = useState();

  const handleWindowResize = () => {
    onResize && onResize(window.innerWidth);

    if (!breakpoints_.length) {
      // Update state on every change
      setWindowWidth(window.innerWidth);
    } else {
      // Update state only on passing breakpoints
      const breakpoint = breakpoints_.find(
        br =>
          (window.innerWidth <= br && br < prevWidthRef.current) ||
          (prevWidthRef.current <= br && br < window.innerWidth)
      );

      if (prevWidthRef.current !== window.innerWidth) prevWidthRef.current = window.innerWidth;

      breakpoint && setWindowWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    prevWidthRef.current = window.innerWidth;
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    width: windowWidth,
  };
};
