/**
 * Suppose Alice and Bob want to choose a restaurant; they both have a list of favorite restaurants represented by strings.
 * Find their common interest with the least list index sum. If there is a choice tie between answers, output all of them. Assume an answer exists.
 *
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * 
 * Algorithm
 * convert list1 into hashmap with this form { restuarantName: index }
 * 
 * iterate through list2
 *   if the restaurant exists in hashmap, calculate the indexsum
 *    if it's lower than current one, update result var
 * 
 * return result var.
 */
var findRestaurant = function(list1, list2) {
    // instantiate variables and cache lengths to reduce lookups
      // result is a tuple with form [restaurantName, indexSum];
    let result = [];
    let len1 = list1.length;
    let len2 = list2.length;
    list1HashMap = {};
    let indexSum = 0;
    //  Given problem constraints, highest possible index sum is 2002, thus we start our default higher.
    let leastIndexSum = 2004;
    
    // fill list1 hash map
    for ( let i = 0; i < len1; i ++ ){
        //no duplicates in list, so we just add them to the object
        list1HashMap[ list1[ i ] ] = i;
    }
    
    // now iterate through list2 checking for matches
    for ( let j = 0; j < len2; j ++ ){
        // check if restaurant exists in list, calculate index sum
        if ( list2[ j ] in list1HashMap ){
          indexSum = list1HashMap[ list2[ j ] ] + j;
          // if indexSum and leastIndexSum are equal, add restaurant to list
          if ( indexSum === leastIndexSum ){
              result.push( list2[ j ] );
          }
          
          // if leastIndexSum is lower, set result to equal the restauran and update leastIndexSum
          if ( indexSum < leastIndexSum ){
              result = [ list2[ j ] ];
              leastIndexSum = indexSum;
          }
          
          // If indexSum is larger than leastIndexSum, it's not as favorable a choice.  Do nothing.
        }
    }
    
    //return the lowest found index
    return result;
};