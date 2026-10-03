'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (begin, end) => {
  const len = end - begin;
  if (len < 0) return [];
  const array = new Array(len + 1);
  for (let i = 0; i <= len; i++) {
    array[i] = begin + i;
  }
  return array;
};

module.exports = { range };
