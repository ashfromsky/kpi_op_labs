'use strict';

/* eslint-disable no-var, no-use-before-define */

const fn = () => {
  console.log(v);
  var v = 5;
};

module.exports = { fn };
