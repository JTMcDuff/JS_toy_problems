/*
Inputs:  array of ints, and an int (number I'm looking to create
Outputs: The two numbers necessary to create the second argument
Constraints:  Quadratic common, linear time solution desired
Edge Cases/ Examples:  The numbers may not exist, in which case return -1 
  Code example:  if (!found) { return [ -1 , -1 ]; }
  target number can be negative
  
  Algorithm
  matchNums = {
    number I am looking for : index of the first number found
  }
  second argument = target
  
  iterate over array
   if current number is in object, add current number's value (from object) and add index of current number to results array,
     return
   compare the two numbers, and determine match
     if current num is less than target
       store target - current num
     if current number is equal to target
       store 0
     if current number is greater than target
      store - (current - target )
      
   insert match into object
   end iteration

*/
function sumTwo( nums, target ) {
  // object for storing match numbers
  let matchNums = {};
  // cache length to save time on lookups
  let len = nums.length;
  let makeNegative = 0;
  let temp = 0;
  //iterate through array and look for matchnums
  for ( let i = 0; i < len; i ++ ) {
    // check if correct number found
    console.log('checking matchNums ', matchNums[ nums[i] ]);
    if ( matchNums[ nums[i]  ] !== undefined ) {
      console.log( nums[i], ' has been found');
      return [ matchNums[ nums[i] ], i ];
    }
    
    // begin checking for matchNum to add
    if ( nums[i] < target ) {
      temp = target - nums[i];
      console.log('number is less than target ', temp);
      matchNums[ target - nums[i] ] = i;
    }
    // check if equal
    if ( nums[i] === target ) {
      console.log('targer is equal ', 0);
      matchNums[ 0 ] = i;
    }
    // check if greater
    if ( nums[i] > target ) {
      makeNegative =  nums[i] - target;
      makeNegative = -makeNegative;
      console.log('number is greater than target ', makeNegative);
      matchNums[makeNegative] = i;
    }
    
  }
  console.log('matchNums ', matchNums);
  return [ -1 , -1 ] ;  
}