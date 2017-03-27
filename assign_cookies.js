/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 
 * Assuming one array of greedy children (g) and one array of cookies of differing sizes (s)
 * how many chlidren can we satisfy?
 *
 * Algorithm
 * use satedChildren to track successes
 * 
 * sort g and s in ascending order
 * 
 * run while loop while there are children and cookies remaining
 *   
 *     if the first cookie's size will satisfy the the first child
 *       shift the child and the cookie off their arrays, increment satedChildren
 *     if not, it won't satisfy any subsequent children, so remove it anyway
 *   
 */
var findContentChildren = function(g, s) {
    //variable to be returned
    let satedChildren = 0;
    
    //sort g and s
    g = g.sort( (a,b) => {return a - b} );
    s = s.sort( (a,b) => {return a - b} );
    console.log('g ', g);
    console.log('s ', s);
    
    //run while loop untl we run out of kids or cookies
    while (g.length !== 0 && s.length !== 0) {
       //if the cookie large enough, we sate our child remove them from the array.
       if ( s[0] >= g[0] ) {
         satedChildren++;
         g.shift();
       }
       //if it won't satisfy the least greedy child, there is no reason to check it against the others.  If it was satisfactory, the child ate it and it's gone.
      s.shift(); 
    }
    
    //return our results
    return satedChildren;
};