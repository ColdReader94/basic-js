const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
if (typeof sampleActivity !== 'string') return false;
let currentActivity = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
let age = Math.ceil(currentActivity / K);
if(Number.isInteger(age) && age >= 0) {
    return age;
} else return false;
};
