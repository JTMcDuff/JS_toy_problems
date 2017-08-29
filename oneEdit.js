/*
Problem:  Write a function that takes in two strings
  and returns a boolean indicating if one string is one edit away
  from the other or not.
  
  Input:  Two Strings
  Output: Boolean
  Constraints:  None
  Edge Cases:  None known so far.
  
  Algo
   Assume str1 is the "correct" string, and we must make str2 match it.
   There are three possible ways to change the string in one edit.
     Swap one character for another
     Add one character somewhere in the string.
     Delete one chracter from the string.
     
     We swap one character only if lenDiff is 0.
     If it's one
       If str1 is longer, we want to insert into str2
       if str1 is shorter, we want to delete from str2.
     
    In any other case, return false.
    
  Pseudo Code 
    Copy strings to arrays (easier to manipulate )
    Cache lengths of both strings.
    Determine lenDiff.
    
    If lenDiff is 0
      iterate through arrays and swap first non-matching character
      compare and returh appropriately
      
    If lenDiff is 1 
      If str1 is shorter
      iterate through arr2
        delete first character that doesn't match from arr2
        compare and return 
      else ( arr2 is shorter )
      iterate through first array 
        add first non-matching character to arr2
        compare and return
*/

function oneEditAway (str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let changes = 0;
  
  // Determine length difference
  let lenDiff = Math.abs( len1 - len2 );
  
  // If length difference is greater than 1, return false immediately.
  if ( lenDiff > 1 ) {
    
    return false;
  }
  
  // If lenDiff is 0, then we just need to swap one character.
  if (lenDiff === 0 ) {
    // iterate through string
    for ( let i = 0; i < len1; i ++ ) {
      //The first time they don't match, swap and compare.
      if ( arr1[i] !== arr2[i] ){
        //Replace str2's char with str1's char.
        arr2[i] = arr1[i];
        // Combine and compare
        if ( arr2.join() === arr1.join()) {
          return true;
        }
      }
    }
  }
  
  // if LenDiff is 1, we check which is longer
  if ( lenDiff === 1 ) {
    // If len1 is shorter, we iterate through arr2
    if ( len1 < len2 ) {
      for ( let i = 0; i < len2; i ++ ){
        // Delete from arr2 when they don't match
        if ( arr1[i] !== arr2[i] ){
          arr2.splice(i, 1);
          if ( arr1.join() === arr2.join() ){
            return true;
          }
        }
      }
    } else {
        for ( let i = 0; i < len1; i ++ ){
        // Add to arr2 when they don't match
        if ( arr1[i] !== arr2[i] ){
          arr2.splice(i,0, arr1[i]);
          if ( arr1.join() === arr2.join() ){
            return true;
          }
        }
      }
    }
  }
  
  
  // In other cases, return false.
  return false;
}

oneEditAway('pakes','pale');
