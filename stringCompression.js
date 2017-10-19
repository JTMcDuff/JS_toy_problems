//stringCompression takes a string, compresses it by counting repeated characters, and returns a new string if the new string is shorter.
function stringCompression(str){
  // Data Validation
  if ( typeof str !== 'string' ){
    return "Not a string";
  }
  
  // Variables
  let charCount= 1;
  let currentChar = str.charAt(0);
  let result = currentChar;
  
  // Cache length to save lookups
  let len = str.length;
  
  //Iterate through string 
  for ( let i = 1; i < len; i ++ ){
    //If it's the same char, we just increment our count 
    if ( str.charAt(i) === currentChar ){
       charCount++;
    } 
    // Else, we need to do some work, here.
    else {
      currentChar =  str.charAt(i);
      result = result + charCount + currentChar;
      charCount = 1;
    }

  }
  
  // Append last Number
  result = result + charCount;
  
  // return the shorter of two strings 
  if ( len > result.length ){
    return result;
  }
  return str;
}