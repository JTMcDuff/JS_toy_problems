/**
 * @param {number} n
 * @return {string[]}
 */
 
 /**
  * Instantiate results array.
  * Instantiate string as empty string
  * 
  * Loop from 1 to n
  *  set string to empty string.
  *  if number is divisible by 3, add 'Fizz' to string
  *  if number is divisble by 5, add 'Buzz' to string
  *  if string length is zero, add the number to it
  *  push string into results array
  * 
  * return results array
  */
 
var fizzBuzz = function(n) {
    //results for returning and string for evaluating individual numbers
    let results = [];
    let string = '';
    let i = 1;
    
    //iterate from 1 to n 
    while ( i <= n) {
      if ( i % 3 === 0) { string = 'Fizz'; }
      if ( i % 5 === 0) { string += 'Buzz'; }
      if (!string) { string += i; }
      results.push(string);
      string = '';
      i++
    }
    
    return results;
};