const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let newArr = [...arr];
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  for(let i=0; i<newArr.length; i++){
    if(newArr[i] === discardNext){
      if(i<newArr.length-1){
        newArr[i+1]=null;
        newArr.splice(i, 1);
      } else{
        newArr.splice(i, 1);
      }
    }
    if(newArr[i] === discardPrev){
      if(i>0){
        newArr.splice(i-1, 2);
        i--;
      }else{
        newArr.splice(i, 1);
      }
    }
    if(newArr[i]===doubleNext){
      if(i<newArr.length - 1){
        newArr[i]=newArr[i+1];
      }else{
        newArr.splice(i, 1);
      }
    }
    if(newArr[i]=== doublePrev){
      if(i<1 || i===null){
        newArr.splice(i, 1);
      }else{
        newArr[i]= newArr[i-1];
      }
    }
  }
  for(let j=0; j<newArr.length; j++){
    if(newArr[j]===null){
      newArr.splice(j, 2);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
