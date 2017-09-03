/*
 Given an array of arrays, return all elements in a single array. 
 
 Algo
 declare results array
 
 Base Case: item is an integer or empty array
   return results.push(integer)
 
 Iterate through array
   if an integer, push it onto results
   if an array, call function again and concat on results
  
  return results
 
*/

function flatten (arrays) {
  let results = [];
  
  // Base Case
  if ( typeof arrays == 'number'){
    return results.push(arrays);
  }
  
  // Cache length to save lookups
  let len = arrays.length;
  
  for ( let i = 0; i < len; i ++){
    // If number, add to results
    if ( typeof arrays[i] === 'number' ){
      results.push( arrays[i] );
    } else {
      // Else, call function on the array
     results = results.concat( flatten(arrays[i] ) );
    }
  }
  
  // Return our results
  return results;
  
}
