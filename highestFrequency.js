/*

In a lowercase, all-character string, find the most common character.
If any characters tie, return them all in alphabetical order.

Input:  string of lowercase characters
Output:  string of the most common
Constraints:  Try for linear time complexity.
Edge Cases:  None known, possible empty string.

Algo
  *** Updated to work in one loop ***

  Declare hashMap.
  Declare results array.
  Declare most
  
  Iterate through .
    If character doesn't exist in hashMap
      add it
    else increment the value.
      if current value is higher than previous
      clear results array
      add character to results array
    if it's equal
      add character to results array
    ( if less, we do nothing)
  
    
  return sorted, joined array.
*/

function highestFreq (str) {
  let hashMap = {};
  let results = [];
  let high = 0;
  let char;
  
  // Cache string length to save lookups
  let len = str.length;
  
  // Create hashMap
  for ( let i = 0; i < len; i ++ ) {
    char = str.charAt(i);
    if ( char in hashMap ) {
      hashMap[char] ++;
    }
    else {
      hashMap[char] = 1;
    }
    
    // If we find a new high, update results and high
    if ( hashMap[char] > high ) {
      high = hashMap[char];
      results = [char];
    }
    else { // If they are equal add it to the results array.
      if ( hashMap[char] === high ) {
        results.push(char);
      }
    }
  }

// Original code needed two loops.
/*
  // Iterate through hashMap and find most common
  for ( let key in hashMap ) {
    // If we found a new common, update value and results
    if ( hashMap[key] > most ) {
      most = hashMap[key];
      results = [key];
    }
    else { // If they are equal add it to the results array.
      if ( hashMap[key] === most ) {
        results.push(key);
      }
    }
  }
*/

  // Return our results
  return results.sort().join('');
  
}
