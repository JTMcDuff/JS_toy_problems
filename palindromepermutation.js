/*
  Write a function to determine if a given string is a permutation of a palindrome.

  Palindrome is a string that is the same string when read from either direction.  Does not need to be a dictionary word.  White space doesn't count.
  Permutation means the characters can be in any order.

  So, order is irrelevant, but the character count of all but one character must be even.  Otherwise, it couldn't be a palindrome.

  Inputs:  String
  Outputs: Boolean
  Constraints:  None
  Edge Cases:  Empty string, incorrect input

  Algo
  Eliminate whitespace.
  Generate hashMap of characters
    when given char count is odd, increment a counter.
    when even, decrement the counter

  if counter is greater than 1, return false
  return true.

  Time complexity escluding whitespace removal:  O(N)
  Space complexity:  0(log N)

*/

function permPalin(str) {
  //Input validation
  if ( typeof str !== 'string') { return 0;}
  
  // Variables
  let oddCount = 0;
  let charMap = {};
  let char;
  
  //  Cache length to save lookups
  let len = str.length;
  
  // create hash map 
  for ( let i = 0; i < len; i ++) {
    char = str.charAt(i);
    
    //if char exists in map, increment, otherwise create at 1 
    char in charMap ? charMap[char]++ : charMap[char] = 1;
    
    //Increment or decrement counter as necessary
    charMap[char] % 2 === 0 ? oddCount-- :  oddCount++;
  }
  
  // evaluate oddCount and return
  return oddCount < 2 ?  true : false;
}