const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = String(n).split('');
  let maxNumber = '';
  let x=0;
  if(digits.length<=2){
    return Math.max(...digits);
  }

  for(let i=0; i<digits.length-1; i++){
    if (digits[i]<digits[i+1]){
      x=i;
    }
  }
  let result = digits.filter((el, i) => {
    if (i !== x) {
      return el;
    }
  })

  for (let j=0; j<result.length; j++){
    maxNumber += result[j];
  }
  return +maxNumber;
}

module.exports = {
  deleteDigit
};
