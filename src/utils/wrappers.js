export function attempt(callback, oncatch) {
  return async function (...args) {
    try {
      if (callback) {
        return await callback.apply(this, args);
      }
    } catch (er) {
      console.error(`! ${er.message} in attempt`);
      if (oncatch) {
        return oncatch.apply(this, [er, ...args]);
      }
    }
  };
}

export const debounce = (callback, delay) => {
  let debouncing;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debouncing);
    debouncing = setTimeout(() => callback.apply(context, args), delay);
  };
};
