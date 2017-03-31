/**
 *  Determine if two strings are anagrams of each other.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Constraints:  None
 * Edge cases:  empty strings
 * 
 * Algorithm
 * Make hashmap of s
 * 
 * loop through t
 *   subract appropriate value from hashMap
 *   if less than zero, return false
 *   if the letter doesn't exist, return false
 * 
 */
let isAnagram = function(s, t) {
    //edge case and length handling
    let len = s.length;
    if ( len !== t.length ) {
        return false;
    }
    
    //make s in to hashMap
    let hash = {};
    
    for ( let i = 0; i < len; i ++ ) {
        let char = s.charAt(i);
        // if the key doesn't exist, add it to the hash
        if ( !hash[char] ) {
            hash[char] = 0;
        } 
        hash[char]++;
    }
    
    //now iterate through t, and subtract from hash
    for ( let j = 0; j < len; j ++ ) {
        char = t.charAt(j);
        // check if the char doesn't exist
        // if key is already at 0, then there are too many letters.
        if ( !hash[char] || hash[char] === 0 ) {
            return false;
        }
        hash[char] --
    }
    
    //if we complete above, then the two strings match;
    return true;
    
};