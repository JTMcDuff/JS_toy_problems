/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 
 * Find the Hamming distance (the number of bits that are different in the binary representations of two integers)
 * 9 <= x , y < 2^31
 * 
 * Algorithm
 * Use ^ to get numeric representation of number of bits that don't match
 * 
 * Use toString(2) to get binary representation of that number (number of 1's is number of differences)
 * 
 * cut off 0's with .replace
 * 
 * return length
 */
var hammingDistance = function(x, y) {
    return ( x ^ y ).toString(2).replace(/0/g, '').length;
};