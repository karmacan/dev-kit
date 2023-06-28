import { useRef, useState, useEffect } from 'react';
import { isArray, isObject, isEmpty } from '~src/utils/helpers/script';

export const useComponentMount = (callback) => {
  useEffect(callback, []);
};

export const useComponentDidMount = callback => {
  const [isMount, setIsMount] = useState(false);
  const [wasExecuted, setWasExecuted] = useState(false);

  useEffect(() => {
    if (!wasExecuted) {
      setTimeout(() => {
        setIsMount(true);
      }, 0);
      if (isMount) {
        callback();
        setWasExecuted(true);
      }
    }
  });
};

export const useComponentUpdate = callback => {
  useEffect(callback);
};

export const useComponentUnmount = callback => {
  useEffect(() => {
    return callback;
  }, []);
};

export const useValueUpdate = (callback, variable) => {
  const [prev, setPrev] = useState(variable);

  useEffect(() => {
    callback(prev);
    setPrev(variable);
  }, [variable]);
};

export const useValueDidUpdate = (callback, variable) => {
  const [isMount, setIsMount] = useState(true);
  const [prev, setPrev] = useState(variable);

  useEffect(() => {
    if (isMount) {
      setIsMount(false);
      setPrev(variable);
      return;
    }
    callback(prev);
    setPrev(variable);
  }, [variable]);
};

export const useValueDidAssign = (callback, variable) => {
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    if (isArray(variable) && isEmpty(variable)) return;
    if (isObject(variable) && isEmpty(variable)) return;
    if (variable && !hasValue) {
      callback();
      setHasValue(true);
    }
  }, [variable]);
};

export const useComponentAfterMount = (callback, after = 1000) => {
  const [isMounted, setIsMounted] = useState(false);
  const wasExecutedRef = useRef(false);

  useEffect(() => {
    if (wasExecutedRef.current) {
      return;
    }

    setTimeout(() => {
      setIsMounted(true);
    }, after);

    if (isMounted) {
      callback();
      wasExecutedRef.current = true;
    }
  });
};