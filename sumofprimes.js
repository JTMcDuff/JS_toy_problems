/*
  Problem:  Given a positive number, return the sum of all positive primes that are less than or equal to that number.

  Inputs: Integer
  Outputs: integer that is sum of all primes less than or equal to the number
  Constraints:  Finding primes efficiently
  Edge Cases:  0 , 1, etc
  
  Algo:
  The real crux of this problem is efficiently finding prime numbers.
  Slightly modifying Sieve of Eratosthenes, here. 
  
  Generate an array of numbers from 2 to n + 1
  
  
  Starting at 2, iterate through the values,
   stop when the number squared equals or exceeds n
  
   Take the current value, and iterate through the array again, removing all values
   which are divisible by it.  Ex: At 2 we remove all even numbers.
  
  When finished, reduce the array to an integer and return it.
*/

function sumOfPrimes (n) {
  // Validate input and create return value.
  let result = 0;
  
  if ( n < 2 ) {
    return 0;
  }
  
  // Create and fill array with integers between 2 and n.
  let nums = [];
  let temp = 2;
  while ( temp < n + 1) {
    nums.push(temp);
    temp++;
  }

  // Iterate through array and remove numbers which are not prime.
  for ( let i = 0; nums[i] * nums[i] <= n; i ++ ) {
    // Within our for loop, we run a secondary loop to splice out values
    let temp = nums[i];
    for ( let j =  i + 1; j <= n; j ++){
      // If current value is divisible by our temp, remove it from the array.
      if ( nums[j] % temp === 0) {
        nums.splice(j,1);
      }
      
    }
    
  }
  
  // return the reduced value of the array.
  return nums.reduce( (a,b)=> {
    return a+b;
  });
  
}