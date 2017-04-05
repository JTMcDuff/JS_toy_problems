/**
 * Inputs:  array of unsorted ints 
 * Outputs:  array of sorted ints (same array, quickSort is in-place)
 * Constraints:  use quickSort algorithm
 * Edge Cases:  Array is empty.
 * 
 * Algorithm 
 * quickSort is recursive 
 *  Partition function
 *   Chooses a pivot (last value in array)
 *   leftPointer is 0
 *   rightPointer is arr.length - 2 (one less than pivot)
 *   while loop for leftPointer isn't the same or greater index than rightPointer
 *     while leftPointer is less than pivot, increment leftPointer
 *     while rightPointer is greater than pivot, decrement rightPointer
 *     if they aren't the same or passed each other, swap their values
 *   swap rightPointer and pivot
 *   return the pivot index 
 *  end Partition function
 *  
 *  recursive sort function that accepts the array, left, and right
 *   base case 
 *   if the array's length is 1 or less, return it
 *   call partition on provided array and store the pivot
 *   call quick sortIt on the arr for both left and right
 */ 

function quickSort(arr) {
  if (arr.length === 0) return [];
  
  // Partition function works in place on arr 
  function partition (arr, left, right) {
    // declare pivot and pointers
    let pivot = arr[ right ];
    let leftPointer = left;
    let rightPointer = right - 1 ;
    let temp;
    console.log ( 'pivot is ', pivot );
    console.log('leftPointer is ', leftPointer);
    console.log('rightPointer is ', rightPointer);
    
    //while loop to swap numbers
    while ( leftPointer < rightPointer ) {
      // increment leftPointer until we find a value > pivot
      while ( arr[ leftPointer ] < pivot ) {
        leftPointer++;
      }
      // decrement rightPointer until we find a value < pivot
      while ( arr[ rightPointer ] > pivot ){
        rightPointer--;
      }
      //if they aren't the same or past each other, swap
      if ( leftPointer < rightPointer ) {
        temp = arr[leftPointer];
        arr[leftPointer] = arr[rightPointer];
        arr[rightPointer] = temp;
      }
    }
    
    //finally, swap rightPointer and pivot
    temp = arr[ rightPointer + 1 ];
    arr[ rightPointer + 1 ] = pivot;
    arr[ right ] = temp;
    console.log ('after partition ', arr);
    return rightPointer + 1;
  }
  
  // sortIt accepts the array, left, and right, and recursively calls itself until done 
  function sortIt(arr, left, right) {
    console.log('running sortIt');
    // base case
    if (left >= right ) {
      return;
    }
    
    // Otherwise, partition with provided information and store pivot
    let pivot = partition(arr, left, right);
    console.log('pivot is', pivot);
    // Using pivot, calculate the 'right' and 'left' partitions and call.
    // 'left' call 
     sortIt( arr, left, pivot - 1);
    // // 'right' call 
    console.log('running on right ', pivot + 1, ' ', right );
    sortIt( arr, pivot, right );
  }
  
  //now call sortIt to begin recursion
  sortIt(arr, 0, arr.length - 1);
  return arr;
}