/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * 
 * Algorithm
 * Convert nums into single Array
 * 
 * if the data is longer or shorter than r *c, return nums
 * 
 * loop through single Array 
 *   shift off a chunk equal in length to c, and insert it into results 
 *   increment row counter
 * 
 * return result 
 */
var matrixReshape = function(nums, r,c) {
    // variable declaration
    let data = [];
    let result = [];
    let colArr = [];
    let row = 0;
    
    nums.forEach( (arr) =>{
      data = data.concat(arr);
    });

    // if the size doesn't match, return the original matrix 
    if ( data.length != r * c ) {
      return nums;
    }
    
    // loop through data to insert into result 
    console.log('data', data);
    while(data.length !== 0){
      //splice out an array from data equal to column length
      colArr = data.splice(0,c);
      result[row] = colArr;
      row++
    }
    
    return result;
};