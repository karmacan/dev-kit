export const generateArray = length => {
  return Array.from(Array(length).keys());
};

export const randomInt = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomNumber = (digit = 8) => {
  return Math.floor(1 * Math.pow(10, digit - 1) + Math.random() * 9 * Math.pow(10, digit - 1));
};

export const randomDate = (fromDate, toDate) => {
  return new Date(fromDate.getTime() + Math.random() * (toDate.getTime() - fromDate.getTime()));
};
