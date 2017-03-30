/**
 * Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.  Each letter in the magazine string can only be used once in your ransom note.
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 * Constraints  each letter used once 
 * Edge Cases  magazine is empty, ransomNote is empty
 * 
 * Algorithm
 * convert strings into objects that index total number of characters
 * 
 * iterate through ransomNoteObject and compare to magazine 
 * return appropriately
 * if 
 */
var canConstruct = function(ransomNote, magazine) {
    // edge cases handling at top to save time
    
   // if ransomNote is empty, return true
   if ( ransomNote.length === 0) {
     return true;
   }
   
   // function to convert a string to an object
   function mapString(str) {
   let result = {};
     let len = str.length;
     let char = '';
     for (let i = 0; i < len; i ++) {
       char = str.charAt(i);
       // if it doesn't exist as a key, create it
       if(!result[char] ) {
         result[char] = 0;
       }
       result[char] ++;
    }
    return result;
  }
  
  //convert both strings
  let ransomNoteMap = mapString(ransomNote);
  let magazineMap = mapString(magazine);
  
  //iterate through ransomNoteMap and compare
  for (let key in ransomNoteMap) {
    if( !magazineMap[key]  || ransomNoteMap[key] > magazineMap[key] ) {
      return false;
    }
  }
  
  // if it makes it through the check, building the note is possible
  return true;
};