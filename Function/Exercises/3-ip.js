'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  // ip -> str list -> num list -> згортання через бітовий зсув -> int32
  ip
    .split('.')
    .map(Number)
    .reduce((acc, byte) => (acc << 8) + byte, 0);
    // acc << 8 звільняє місце під байт, + byte дописує його → збираємо 4 октети в одне число
;

module.exports = { ipToInt };
