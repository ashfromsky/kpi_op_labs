'use strict';


const generateKey = (length, possible) => {
  let generatedString = '';
  const charactersLength = possible.length;

  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charactersLength);
    generatedString += possible[randIndex];
  }
  return generatedString;
};

module.exports = { generateKey };
