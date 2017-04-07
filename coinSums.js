// Given an array of pence, determine how many ways there are to make change for a given amount.


// Inputs:  num
// Outputs:  num
// Constraints:  None
// Edge Cases:  input is zero, others ???

/* Algorithm
larger function holds count, will be returned at end
helper recursive function
  base cases
    total is  <= zero, return
  loop through coins
    if the coin is greater than the total, continue
    if the coin is equal to the total, increment count and return
    if the coin is less than total, subtract it from the total and call function
      on the smaller total
invoke helper function
return count
*/
const coins = [1,2,5,10,20,50,100,200];

function coinSums (total) {
  let count = 0;
  // cache coin array length to save lookups
  const len = coins.length - 1;
  
  //helper function to iterate through coins array
  function countCoins (value, start) {
    //base case
    if (value < 0 ) { 
      return;
    }
    
    //iterate through coins backwards to find larger ones first
    for ( let i = start ; i >= 0 ; i -- ) {
       // If they are equal, we found a match.  Increment counter.
       if ( value === coins[i] ) {
         count ++;
       }
      
       // If the coin is less, then we need to iterate further
       if ( value > coins[i] ){
         let newValue = value - coins[i];
         countCoins(newValue, i );
       }
    }
    
  }
  
  //invoke helper function
  countCoins(total, len);
  
  // return count after completion
  return count;
}