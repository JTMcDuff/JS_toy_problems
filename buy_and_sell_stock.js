/**
 * Say you have an array for which the ith element is the price of a given stock on day i. 
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * @param {number[]} prices
 * @return {number}
 * 
 *  Outputs: integer
 *  Inputs: array of integers
 *  Constraints:  None
 *  Edge Cases:  no possible profit
 * 
 *  Algorithm
 *  Iterate through array backwards
 *  if we find a new high value, save it
 *  if it's lower than our high, calculate profit and save that
 *  
 *  return profit
 */
var maxProfit = function(prices) {
    // variables
    let high = 0;
    let profit = 0;
    let len = prices.length;
    
    for (let i = len; i >= 0; i -- ){
        if ( prices[i] > high ) { high = prices[i]; }
        if ( prices[i] < high ) { profit = Math.max(profit, high - prices[i] ); }
    }
    
    return profit;
};