const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
	let number = 0;
	for(let i = 0; i < backyard.length; i++) {
		let subArr = backyard[i];
			
		for(let n = 0; n < backyard[i].length; n++) {
			if (subArr[n] == "^^") {
			  number++;
			}
		}  
	}
	return number;
};