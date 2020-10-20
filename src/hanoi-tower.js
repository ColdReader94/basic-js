const CustomError = require("../extensions/custom-error");

let secondsInhour = 60 * 60 //секунд в 1 часу

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNeed = Math.pow(2, disksNumber) - 1; // ходов понадобится
  let secondsPerTurn = turnsSpeed / secondsInhour; // секунд затрачено на 1 ход
  let timeNeed = Math.floor(turnsNeed / secondsPerTurn); // время понадобится на необходимое количество ходов
  let object = {
      turns: turnsNeed,
      seconds: timeNeed
  };
  console.log(object);
  return object;
}