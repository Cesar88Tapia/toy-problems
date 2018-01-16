
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
/* START SOLUTION */
  /* END SOLUTION */
  var num = 0;
  translateRomanNumeral.prototype = Object.create(DIGIT_VALUES);
  for(var key in this.DIGIT_VALUES){
    if(romanNumeral[0] < romanNumeral[1]){
      romanNumeral[1] - romanNumeral[0];
      return num;
    }else if(romanNumeral[0] > romanNumeral[1]){
      num = romanNumeral;
      return num;
    }else{
      return null;
    }
  }
};
