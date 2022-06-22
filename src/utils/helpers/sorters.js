import {isString} from '~src/utils/helpers/script';

export const sortArray = (array, doUpSort, sortKey) => {
  const x = doUpSort ? -1 : 1;
  return array.sort((curr, next) => {
    if (sortKey) {
      curr = isString(curr[sortKey]) ? curr[sortKey].toUpperCase() : curr[sortKey];
      next = isString(next[sortKey]) ? next[sortKey].toUpperCase() : next[sortKey];
    }
    if (curr < next) return -1 * x;
    else if (curr > next) return 1 * x;
    return 0;
  });
};
