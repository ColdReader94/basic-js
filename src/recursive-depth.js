const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            counter = Math.max(counter, this.calculateDepth(arr[i]));
        }
        counter++;
    }
    return counter;
}
};



