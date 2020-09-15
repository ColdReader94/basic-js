const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    
membername = /[a-z\s][\w\s]{1,}/i;
firstLetter = /[a-z]/i;
let secretName = '';
 
 if(Array.isArray(members) !== true) {
    return false;
 }
 
 for (let i = 0; i < members.length; i++) { 
    if(typeof(members[i]) !== 'string') continue;
    if(membername.test(members[i]) !== true) return false;
    secretName += members[i].match(firstLetter);      
 }
 
 return secretName.toLocaleUpperCase().split('').sort().join('');
};




