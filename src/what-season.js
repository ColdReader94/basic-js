const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {  
    if(typeof(date) !== 'string' || 'number') throw Error('FAIL');
    let value = new Date(date);    
    if(typeof(value) !== Date) return 'Unable to determine the time of year!';
    
    
    let month = value.getMonth();
    if(month <= 2) return 'winter';
    if(month <= 5) return 'spring';
    if(month <= 8) return 'summer';
    if(month <= 11) return 'autumn';
};
