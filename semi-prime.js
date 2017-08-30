/*
  A semiprime is the product of two prime numbers. For a given number, return the two
  prime numbers that were used to create it.

  Input integer that may or may not be semi-prime
  Output  tuple of both prime divisors
  Constraints  None
  Edge Cases   Must account for non-semi-prime values
  
  Algo
  Use modified Sieve of Erastothenes to calculate primes that are divisors.
    Generate array of odd numbers starting at 2 and running to n+1
    
    Iterate through array starting at index 1 (which is 3), stopping when we hit the square root of n.
      for each value, run a separate loop to n
        if the given value is divisible by the current prime
          delete it from the array
          
      If the current value is not a divisor of n, delete it as well
    
    All values remaining in the array are prime AND divisors of n.
    
  If array length is less than 2
    return "Number is not semi-prime"
  
  Convert array to object
    iterate through array and insert each value as key
  
  iterate through object
    for each key, calculate the other divisor
      if the divisor is in the object, return both
  
  Return "Number is not prime"
*/

function semiPrime (number) {
  // Variables we need
  let sieveArr = [2];
  let sieveObj = {};
  let temp = 3;
  
  // *** Sieve of Erastothenes ***
  // Fill array with odd numbers to n + 1
  while (temp < number + 1) {
    sieveArr.push(temp);
    temp += 2;
  }
  
  // iterate through array, starting at index 1 (value of 3)
  for ( let i = 1; sieveArr[i] * sieveArr[i] < number; i ++ ) {
    temp = sieveArr[i];
    
    // Separate for loop to remove values
    for ( let j = i + 1; j <= number; j ++){
      if (sieveArr[j] % temp === 0) {
        sieveArr.splice(j,1);
      }
    }
    
    // Check if the value is a divisor of n
    if ( number % temp !== 0 ){
      sieveArr.splice(i,1);
    }
    
  }
  
  // sieveArr now contains only prime numbers and divisors of number
  // if remaining length is less than 2, we know the number is not semi-prime
  if ( sieveArr.length < 2 ){
    return "Number is not semiprime";
  }
  
  // Convert array to object
  sieveArr.forEach( (n)=> {
    sieveObj[n] = true;
  });
  
  // Iterate through object and find appropriate divisors
  for ( var key in sieveObj ){
    temp = number / key;
    if ( temp in sieveObj ){
      let result = [temp, parseInt(key) ];
      
      return result.sort( (a,b)=>{
        return a -b;
      });
    }
  }
  
  return "Number is not semiprime";
}
