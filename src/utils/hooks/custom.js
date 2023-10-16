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

export const useElementOutsideClick = (target, onOutsideClick) => {
  const handleDocumentClick = ev => {
    const targetElem = target?.current || target;

    if (!targetElem) return;

    !targetElem.contains(ev.target) && onOutsideClick?.(ev);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [target, onOutsideClick]);
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

export const useElementScroll = (target = document?.body, onScroll) => {
  const setElementScrollY = scrollY => {
    if (!target) return;

    target.scrollTop = scrollY;
  };

  const handleScroll = ev => {
    onScroll?.(Math.floor(ev.target.scrollTop));
  };

  useEffect(() => {
    target?.addEventListener('scroll', handleScroll);

    return () => {
      target?.removeEventListener('scroll', handleScroll);
    };
  }, [target, onScroll]);

  return {
    setElementScrollY,
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

export const useElementIntersection = (
  target, // to update useEffect pass target ref if it has one
  onIntersection,
  options = {}
) => {
  const {root = document?.body, triggerMargin = '0px', triggerThreshold = 0} = options;

  useEffect(() => {
    const targetElem = target?.current || target;

    if (!targetElem) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;

        onIntersection?.(targetElem);

        observer.unobserve(targetElem); // unobserve observed target
      },
      {
        root,
        rootMargin: triggerMargin,
        threshold: triggerThreshold, // how much target must be visible for trigger
      }
    );

    observer.observe(targetElem); // set new each time useEffect get new target
  }, [target, onIntersection, root, triggerMargin, triggerThreshold]);
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
