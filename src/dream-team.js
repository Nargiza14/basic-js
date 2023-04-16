const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }

  let elements=0;
  let isUpperCase;

  members.forEach(value => {
    if(typeof value=='string'){
      elements++;
    }else{
      return false;
    }
  })

  if (elements<0){
    return false;
  }

  let realMembers = members.map(value=>{
    if(typeof (value)=='string'){
      for (let i=0; i<value.length; i++){
        if(value[i] != ''){
          return value[i].toUpperCase();
        }
      }
    }
  })

  realMembers = realMembers.sort().join('');
  
  return realMembers;
}


module.exports = {
  createDreamTeam
};
