const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newArr = [];
    if(!Array.isArray(arr)) {
        throw new Error('Not an array');
    } else if(arr.length == 0) { 
        return newArr;
    };
                
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case '--discard-next': {
                 if(i + 1 < arr.length){
                  i++;
                };
            break;
            }
            case '--discard-prev': {
                if(i - 1 >= 0 && arr[i - 2] !== '--discard-next'){
                newArr.pop();
                }
            break;
            }
            case '--double-next': {
                if(i + 1 < arr.length){
                newArr.push(arr[i + 1]);
                }
            break;
            }
             case '--double-prev': {
                if(i - 1 >= 0 && arr[i - 2] !== '--discard-next'){
                newArr.push(arr[i - 1]);
                }
            break;
            } 
            default: {
                newArr.push(arr[i]);   
            }
        }};
        return newArr;
    };