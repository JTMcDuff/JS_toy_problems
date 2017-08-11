/*
  Assuming a deck of cards as an array, shuffle it with an even distribution over more than 1,000 shuffles, 

  So, basic Fisher-Yates Shuffle, here.  Comments represent my original, naive implementation.  Code is optimized.

  Runs in 0(n) time and 0(1) space.

  Inputs:  array of strings
  Outputs: same array, shuffled
  Constraints:  O(n) space and time, must perfectly randomly shuffle the deck
  Edge Cases:  None known so far, must accept large decks.
  
  Algo
  Iterate over deck
    For each card, generate a random integer between 0 and deck.lenth
    swap current card with the card at the random index.
    If the index is the same, do nothing
  return deck
  
  Structure
  declare max as deck.length - 1
  
  helpers
  generateRandom accepts max and returns a number between 0 and max, inclusive
  Math.floor(Math.random() * (max - min +1)) + min
  swapCard accepts two indexes
    If they aren't the same it swaps the items in those locations
    
  return deck

*/

var shuffleDeck = function(deck) {
  // declare max
  let max = deck.length - 1;

  // Helpers
  
  // genRand accepts a max and returns a number between 0 and max, inclusive.
  function genRand(current) {
      return Math.floor(Math.random() * (current + 1));
  }
  
  // swapCards accepts two indexs, swapping them in the deck if they are not the same
  function swapCards( index1 , index2 ) {
    let temp;
    if (index1 !== index2 ) {
      temp = deck [ index1 ];
      deck[ index1 ] = deck[ index2 ];
      deck[ index2 ] = temp;
    }
  }
  
  // Iterate through deck
  for ( let i = max; i >= 0; i --){
    // Call swapCard on current index
    swapCards( i , genRand(i) );
  }
  
  // Return the deck;
  return deck;
  
}