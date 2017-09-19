/*
 For a given array, rotate its elements left n times

Algo
Create results array.

iterate through input array
  insert a given element into results array n elements earlier
  new index = current index - shifts  
  if new index is negative
    new index = len + new index
  insert element into new array at new index
  
return results
*/

function arrayLeftRotate(arr,shifts) {
    
   let len = arr.length;
   let results = [];
   let newIndex = 0;
   for ( let i = 0; i < len; i ++ ) {
        newIndex = i - shifts;
        if ( newIndex < 0 ) {
            newIndex = len + newIndex;
        }
        
        results[ newIndex ] = arr[i];
   }
    
    
   return results;

}
