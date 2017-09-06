/*
 Given an array, find the length of the longest increasing sequence.
 
 Inputs: array of integers
 Outputs: integer of longest string of increases
 Constraints:  Linear time complexity and memory size
 Edge Cases:  Empty or array with length 1

 Algo
 Error handling / checking array length
 
 variable for streak
 Variable for longestStreak
 
 Iterate through Array starting at index 1
   if current value is larger than previous value
     increment streak
   else
     set longestStreak to the higher of longestStreak and streak
     set streak to zero
 
 Return longest streak


*/


function longestImprovement (numbers) {
  // Cache length to save lookups
  let len = numbers.length;
  let streak = 1;
  let longestStreak = 1;
  // Data validation
  if ( len  === 1 ) {
    return 1;
  }
  
  if ( len == 0 ) {
    return 0;
  }
  
  for ( let i = 1; i < len; i ++) {
     if ( numbers[i] > numbers[ i - 1 ] ) {
       streak++;
     }
     else {
        if ( streak > longestStreak ) {
          longestStreak = streak;
        }
        streak = 1;
     }
  }
  
  return longestStreak;
}
