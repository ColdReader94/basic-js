const CustomError = require("../extensions/custom-error");


const chainMaker = {
 arr: [],
 string: '',
  getLength() {
    return this.arr.length;
  },
  addLink(value) {       
     this.arr.push("( " + value + " )");
     return this;
  },
  removeLink(position) {
      if(!this.arr[position]) { 
         this.arr = [];
         throw new Error('Out of range');
      }
      this.arr.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.arr.reverse();
      return this;
  },
  finishChain() {
   this.string = this.arr.join('~~');
   this.arr = [];
   return this.string;
  }  
};

module.exports = chainMaker;
