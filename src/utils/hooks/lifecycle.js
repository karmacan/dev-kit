import React from 'react';
import {isArray, isObject, isEmpty} from '@src/utils/helpers/script';

export const useComponentMount = callback => {
  React.useEffect(callback, []);
};

export const useComponentDidMount = callback => {
  const [isMount, setIsMount] = React.useState(false);
  const [wasExecuted, setWasExecuted] = React.useState(false);
  React.useEffect(() => {
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
  React.useEffect(callback);
};

export const useComponentUnmount = callback => {
  React.useEffect(() => {
    return callback;
  }, []);
};

export const useValueUpdate = (callback, variable) => {
  const [prev, setPrev] = React.useState(variable);

  React.useEffect(() => {
    callback(prev);
    setPrev(variable);
  }, [variable]);
};

export const useValueDidUpdate = (callback, variable) => {
  const [isMount, setIsMount] = React.useState(true);
  const [prev, setPrev] = React.useState(variable);

  React.useEffect(() => {
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
  const [hasValue, setHasValue] = React.useState(false);
  React.useEffect(() => {
    if (isArray(variable) && isEmpty(variable)) return;
    if (isObject(variable) && isEmpty(variable)) return;
    if (variable && !hasValue) {
      callback();
      setHasValue(true);
    }
  }, [variable]);
};
