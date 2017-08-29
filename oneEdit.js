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
    
    ** Refactor Code to be more DRY **
    
  Pseudo Code 
    Copy strings to arrays (easier to manipulate )
    Cache lengths of both strings.
    Determine lenDiff.
    
    If lenDiff is less than 2
      iterate through string
        First time they don't match
          swap one character and join
          delete from longer array and join
          if either group matches, return true
          else return false
    
    In another case, return false.
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
  if (lenDiff < 2 ) {
    // iterate till end of longer array
    for ( let i = 0; i < Math.max( len1, len2 ); i ++ ) {
      //The first time they don't match, generate two copies.
      if ( arr1[i] !== arr2[i] ){
        let swapArr1 = arr1.slice();
        let swapArr2 = arr2.slice();
        swapArr2[ i ] = swapArr1[ i ];

        // If lengths don't match, cut down the longer one.
        if ( len1 > len2 ){
          arr1.splice(i,1);
        } else {
          arr2.splice(i, 1);
        }
        
        // If either group matches, return true
        if ( swapArr1.join() === swapArr2.join() || arr1.join() === arr2.join() ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  
  
  // In other cases, return false.
  return false;
}

