/**
 * From leetcode: https://leetcode.com/problems/reverse-words-in-a-string-iii/#/description
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * 
 * Algorithm
 *  Use .split to separate by space
 *  iterate through array of strings
 *    split, reverse, then join each element
 *    add it to new string with ' ' at the end
 *  return the string with last space sliced off
 * 
 * Inputs:  string 
 * Outputs: string with words reversed, but in same order
 * Constraints: None 
 * Edge Cases:  empty string 
 */
var reverseWords = function(s) {
    // split array by spaces.
    let stringArray = s.split(' ');
    
    //variables for returning and work
    let result = '';
    let word = '';
    
    // cache length of array to reduce looukps
    const len = stringArray.length;
    
    // iterate through array to build reverse values and add into result
    for ( let i = 0; i < len; i ++ ) {
      word = stringArray[i].split('').reverse().join('');
      result = result + word + ' ';
    }
    
    
    return result.slice(0, result.length - 1);
};