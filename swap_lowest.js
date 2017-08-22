/*
  Given an array of negative/positive integers, swap the smallest element of the array with the first element of the array.


  Inputs:  array of positive and negative integers
  Outputs: array with smallest and first value swapped
  Constraints:  Linear time complexity and constant space (for fun).
  Edge Cases:  None seen so far.
  
  Algo
  Validate Data to ensure array has at least two values.
  
  Use a tuple to store the smallest number and its index
  [ smallestNumber , numberIndex ]
  
  Store first value of array in tuple
  
  Iterate from second value in array to last
    If the value is smaller than the tuple, update the data in the tuple
  
  Set the value in the tuple's index equal to the [0] value
  Set the [0] value equal to the value in the tuple.
  
  Return the array.
*/

function smallSwap (numbers) {

  //  cache length to save lookups
  let len = numbers.length;
  
  // Data Validation
  if ( len < 2){
    return numbers;
  }
  
  // Initiate tuple with [0] value, and
  let smallNum = [ numbers[0], 0 ];
  
  // Iterate through array
  for ( let i = 1 ; i < len; i ++ ){
    // update if value is smaller
    if ( numbers[ i ] < smallNum[ 0 ] ){
      smallNum[ 0 ] = numbers[ i ];
      smallNum[ 1 ] = i;
    }
  }
  
  // Swap the values
  numbers[ smallNum[1] ] = numbers[0];
  numbers[ 0 ] = smallNum[ 0 ];
  
  return numbers;
}
