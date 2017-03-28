//Given a string, reverse it.  Exercise in optimizing code, mostly.

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let i = s.length;
    let result = '';
    
    while ( i-- ) {
        result += s.charAt(i);
    }
    return result;
};