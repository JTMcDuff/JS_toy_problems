/*
  Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.
  Inputs:  Array of integers
  Outputs: boolen
  Constraints:  One pass
  Edge Cases:  None known so far
  
  Algo
  iterate through array
    for each number, check if it exists in hashmap
      if so, return true
    else, add its reverse value into hashamp if it doesn't already exist
  if loop completes without returning true, return false
*/

function zeroSum (numbers) {
  //reverseHash holds our reversed values.
  let reverseHash = {};
  let len = numbers.length;
  let num;
  
  for ( let i = 0; i < len; i ++) {
    num = numbers[i];
    if ( num  in reverseHash ) {
      return true;
    }
    
    reverseHash[-num] = 0;
  }
  
  return false;
}