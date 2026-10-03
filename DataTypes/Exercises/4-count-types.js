'use strict';

const countTypesInArray = (outerItems) => {
  const counters = {};
  for (const item of outerItems) {
    const itemType = typeof item;
    counters[itemType] = (counters[itemType] || 0) + 1;
  }
  return counters;
};

module.exports = { countTypesInArray };
