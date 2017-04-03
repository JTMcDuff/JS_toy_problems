/**
 * Given an array of integers, every element appears twice except for one. Find that single one
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * Algorithm 
 * Inputs:  arrays of Ints, only one of which is unique
 * Outputs: the one unique int 
 * Constraints:  Linear Big O, constant memory
 * 
 * Using the fact that num ^ num is always 0, can use reduce to compare the numbers to each other
 * The only one left will be the unique one.
 */
function singleNumber(nums) {
    // use reduce and bit manipulation
    return nums.reduce( (total,num) => {
      return total ^ num;
    });
};