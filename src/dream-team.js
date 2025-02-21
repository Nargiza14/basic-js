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
  if (Array.isArray(members)){
    let name = "";
    let realMembers=[];
    for(let i=0; i< members.length; i++){
      if(typeof members[i] === 'string'){
        realMembers.push(members[i].trim().toUpperCase());
      }
    }
    realMembers = realMembers.sort();
    for(let j=0; j<realMembers.length; j++){
      let elem= realMembers[j];
      if (typeof elem === 'string'){
        name += elem[0];
      }
    }
    return name;
  }
  return false;
}


module.exports = {
  createDreamTeam
};
