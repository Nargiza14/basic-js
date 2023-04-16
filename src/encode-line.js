const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i=0; i<str.length; i++){
    let n=1;
    while (str[i] === str[i+1]){
      n++;
      i++;
    }
    result+=(n === 1 ? '' : n) + str[i];
  }
  return result;
}

module.exports = {
  encodeLine
};
