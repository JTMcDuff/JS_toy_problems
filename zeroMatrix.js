/*
  For a M*N Matrix, if a row or column contains a zero, set the entire row/coloumn to zero.
  Since it makes the problem more interesting, assume the intent is to mutate the original matrix.
  
  Inputs:  M*N Matrix.
  Outputs:  Transformed M*N Matrix
  Constraints:  Less than linear Space 
  Edge Cases:  Small Matrix
  
  Algo
  iterate through Matrix
    store rows and columns with zero in arrays.
  iterate through the row and column arrays
    set all appropriate values on the Matrix to zero.
*/

function zeroMatrix(matrix) {
  // arrays to store rows and columns
  const colZero = [];
  const rowZero = [];
  
  //cache lengths to save lookups
  const rowlen = matrix.length;
  const collen = matrix[0].length;
  
  // Iterate through matrix, row first
  for ( let i = 0; i < rowlen; i ++ ) {
    // iterate through columns
    for ( let j = 0; j < collen; j ++ ) {
      // if the value is zero, call the insertion function 
      if ( matrix[i][j] === 0 ) {
        logZero(i,j);
      }
    }
  }
  
  // Iterate through zero arrays and set rows/columns to zero 
  // cache array lengths
  const rowZeroLen = rowZero.length;
  const colZeroLen = colZero.length;
  
  
  for ( let x = 0; x < rowZeroLen; x ++ ) {
    //iterate through row and make all vals zero.
    for ( let a = 0; a < collen; a ++ ) {
      matrix[ rowZero[x] ][a] = 0;
    }
  }
  
  for ( let y = 0; y < colZeroLen; y ++ ) {
    for ( let b = 0; b < rowlen; b ++ ) {
      matrix[b][ colZero[y] ] = 0;
    }
  }
  
  // logZero checks if a value already exists in the areas, and inserts them if it doesn't 
  function logZero(i,j) {
    if ( rowZero.indexOf(i) === -1){
      rowZero.push(i);
    }
    
    if ( colZero.indexOf(j) === -1){
      colZero.push(j);
    }
  }
  return matrix;
}