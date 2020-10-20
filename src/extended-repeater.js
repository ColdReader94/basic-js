const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // присваиваем переменным значения options
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  //Если переданное обязательное значение не строка - то делаем строкой
  if(typeof str !== String) {
    str = String(str);
  }

//Присваиваем значения по умолчанию
if (repeatTimes == undefined) {
  repeatTimes = 1;
}

if (separator == undefined) {
  separator = '+';
}

//При этом если дополнение для строки задано но не является строкой то тоже преобразуем к типу строки
if(typeof addition !== String && addition !== undefined) {
  addition = String(addition);
} 

//Если количество повторение дополнения строки не задано, но само дополнение задано то задаем повторение дополнения по умолчанию = 1
if (additionRepeatTimes == undefined && addition !== undefined) {
  additionRepeatTimes = 1;
}

if (additionSeparator == undefined) {
  additionSeparator = '|';
}

let string = "";


//проходим циклом сколько раз задано в повторении основной строки
for (let i = 0; i < repeatTimes; i++) {
  //добавляем +1 раз основную часть строки 
  string += str;
  //если есть дополнение - входим во второй цикл
  if(addition !== '') {
  for(let n = 0; n < additionRepeatTimes; n++) {
    // если вошли - смотрим не последнее ли дополнение добавляем, если не последнее - то добавляем дополнение + дополнительный разделитель
    if(n != additionRepeatTimes - 1) {
    string += addition + additionSeparator; 
    }
    // если добавляем последнее дополнение - разделитель уже не добавляем
    else  string += addition;   
  }
}
  //возвращаемся во внешний цикл и тоже смотрим добавляем ли последнюю основную часть строки
  if(i !== repeatTimes - 1) string += separator;
}
return string;
};