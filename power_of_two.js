/**
 * Inputs:  int n 
 * Outputs: boolean 
 * Constraints None 
 * Edge Cases:  1, 0, negative numbers
 * 
 *  Algorithm
 *  recursive
 *  base cases
 *   if n < 2  === false
 *   if n === 2 === true
 *   if n % 2 has value, false
 *  else call function on n / 2
 */
var isPowerOfTwo = function(n) {
  // edge and base cases 
  if ( n < 2 ) { return false; }
  if ( n === 2 ) {return true; }
  if ( n % 2 > 0 ) {return false; }
  
  return isPowerOfTwo( n / 2);
};