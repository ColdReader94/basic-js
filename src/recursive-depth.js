const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      this.counter = 0;
 if(!arr instanceof Array) {
      return this.counter;
   } else { 
   this.counter++;
   for (let i = 0; i < arr.length; i++) {       
       if (arr[i] instanceof Array) {
       break;
       this.counter++;       
       this.calculateDepth(arr[i]);     
       }
   }
   };
   return this.counter;
  }
};



