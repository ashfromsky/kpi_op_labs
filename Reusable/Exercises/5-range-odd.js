'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start = 15, end = 30) => {
  if (start > end) return [];

  const first = start % 2 !== 0 ? start : start + 1;
  const last = end % 2 !== 0 ? end : end - 1;

  if (first > last) return [];

  const len = (last - first) / 2 + 1;
  const array = new Array(len);

  for (let i = 0, n = first; n <= last; n += 2) {
    array[i++] = n;
  }
  return array;
};

module.exports = { rangeOdd };
