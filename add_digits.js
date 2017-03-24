/**
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * @param {number} num
 * @return {number}
 * 
 * Algorithm
 *  If num is zero, return 0
 *  If num % 9 === 0, return 9
 *  return num % 9
 */
var addDigits = function(num) {
  //if it's zero, return zero
  if ( num === 0 ) {
      return 0;
  }  
  if ( num % 9 === 0 ) {
      return 9;
  }
  return num % 9;
};