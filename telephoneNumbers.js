/*

  Write a function that takes up to four digits of a phone number,
  then returns a list of all of the words (in alphabetical order) that can be written on the phone with that number.
  (You should return all permutations, not only English words.)

  Inputs:  four digit string of numbers.
  Outputs: An array of strings with each combination of translated numbers.
  Constraints:  None so far
  Edge Cases:  0 always translates as zero
  
  Algorithm
  create object with key of the number and value of an array of the appropriate letters.
  Results array for returning.
  
  Recursive helper function Accepts a string and a number
    Base cases:
      If number is empty, append string to results and return
    Cuts one number off the string.
      If number is 1 or 0 append that number and consume another
    For each value in the array associated with that number
      append the letter to the string
      call function on the smaller number and current string.
  
  return results.
*/  

function telephoneWords (digitString) {
  // numKeys stores the number/letter associations
  // numKeys does not store 1 or 0, as they lack associations.
  let numKeys = {
    '2': ['A','B','C'],
    '3': ['D','E','F'],
    '4': ['G','H','I'],
    '5': ['J','K','L'],
    '6': ['M','N','O'],
    '7': ['P','Q','R','S'],
    '8': ['T','U','V'],
    '9': ['W','X','Y','Z']
  };
  let results = [];
  
  //Helper Function
  function buildWords( digitString , word ) {
    if ( digitString === '' ) {
      results.push(word);
      return;
    }
    
    // slice off a number for us to process
    let currNum = digitString.slice(0,1);
    digitString = digitString.slice(1);
    
    // If 1 or 0, just append to existing word and call function again.
    if ( currNum < 2 ) {
      word = word + currNum;
      console.log('Word ', word );
      buildWords( digitString, word );
    } // Else we iterate over the array
    else {
      
      let letterArray = numKeys[currNum];
      let len = letterArray.length;
      for (let i = 0; i < len; i ++) {
        //call function on new word.
        buildWords( digitString, word + letterArray[i] );
      }
      
    }
    
  }
  
  buildWords( digitString, '' );
  return results;
  
}

telephoneWords('2345');