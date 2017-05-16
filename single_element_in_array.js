/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Inputs:  Sorted Array with only one single integer
 * Outputs: The single integer that appears once 
 * Constraints:  O(log n) time and O(1) space.
 * Edge Cases:  Empty Array, ??
 * 
 * Easy to read
 * Algorithm
 *   for loop, going every 2 items
 *     if current value is not equal to next value, return it .
 *   
 */
let singleNonDuplicate = function(nums) {
    // cache nums.length to save lookups
    let len = nums.length;
    
    // for loop checks every even value
    for ( let i = 0; i < len; i += 2) {
      // if the number's pair is not present return it.
      if ( nums[ i ] != nums[ i+1 ] ) {
        return nums[ i ];
      }
    }
    //edge case return -1
    return -1;
};


//Less code using bitwise operator.

let singleNonDuplicate = function(nums) {
    return nums.reduce((prev, current) => prev ^= current, 0);
};