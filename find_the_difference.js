/**
 * Given two strings s and t which consist of only lowercase letters.
 * String t is generated by random shuffling string s and then add one more letter at a random position.
 * Find the letter that was added in t.
 *
 * @param {string} s
 * @param {string} t
 * @return {character}
 * 
 * Algorithm
 * split and sort s and t
 *   iterate through t
 *   if current character doesn't match s, return it.
 * 
 */
var findTheDifference = function(s, t) {
  //store t's length to reduce lookups
  let len = t.length;
  
  //sort s and t
  let sArr = s.split('').sort();
  let tArr = t.split('').sort();
  
  //iterate through t 
  for ( let i = 0; i < len; i ++) {
     //if letter doesn't exist in s, return it 
     if ( tArr[i] != sArr[i] ) {
       return tArr[i];
     }
  }
  