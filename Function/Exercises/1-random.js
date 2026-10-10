'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  const lowerBound = Math.ceil(min);
  const maxBound = Math.floor(max);

  return Math.floor(Math.random() * (maxBound - lowerBound + 1)) + lowerBound;
};

module.exports = { random };
