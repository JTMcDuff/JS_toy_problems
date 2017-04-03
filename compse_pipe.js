function compose(){
  // destructure arguments
  let args = [...arguments];
  
  //cache length to save lookups
  let len = args.length;
  
  return function(result) {
    
    // iterate backwards through args and prepend the functions to each other
    // function's arguments go 'first'
     for (let i = len - 1; i > -1; i--) {
      result = args[i].call(this, result);
    }

    return result;
  }
};

function pipe(){
  // destructure and 'save' arguments
  let fns = [...arguments];
  
  //cache length to save lookups
  let len = fns.length;
  
  return function(result) {
    
    // Much like compose, except we iterate and pass the other direction
     for (let i = 0; i < len ; i++) {
      result = fns[i].call(this, result);
      
    }

    return result;
  } 
};
