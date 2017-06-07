/**
 * Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
 * @param {number[]} nums
 * @return {string[]}
 * 
 * Algorithm
 * 
 *  copy and sort array
 *  
 *  create hashmap of array values with their relative "rank"
 * 
 *  create result array by referencing input array and the hashmap
 * 
 *  return result array
 */
let findRelativeRanks = function(nums) {
    // variables
    let hashMap = {};
    let results = [];
    
    // Copy and sort array in descending order, and then cache length to save lookups.
    let originalScores = nums.slice().sort( (a,b)=> {
        return b-a;
    });
    let len = originalScores.length;

    // Create hashmap with appropriately scored values  { score: rank }
    for ( let i = 0; i < len; i ++ ){
        // key is the score itself, value is the rank
        hashMap[ originalScores[i] ] = i + 1;
    }
    
    // Update top three values to be correct medals
    hashMap[ originalScores[0] ] = "Gold Medal";
    if ( len > 1 ) {  hashMap[ originalScores[1] ] = "Silver Medal"; }
    if ( len > 2 ) { hashMap[ originalScores[2] ] = "Bronze Medal"; }
    
    // iterate through nums and push the corresponding score onto result
    for ( let j = 0; j < len; j ++){
        results.push( hashMap[ nums[ j ] ]+'' );
    }
    return results;
};