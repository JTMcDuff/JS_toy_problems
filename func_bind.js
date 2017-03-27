// function.bind implemented as a stand-alone function.

let bind = function(func, context){
  //slice args to pass down.
  let args = Array.prototype.slice.call(arguments, 2);
  
  return function(){
    // use call to bind the function explicitly to the context.
    // args passed down from above.
    // arguments passed in with new invocation.
    return func.call(context, ...args, ...arguments);
  }
};  

//And as a polyfill of sorts for the method itself.

Function.prototype.bind = function(context) {
  //slice arguments to pass down.
  let args = Array.prototype.slice.call(arguments, 1);
  
  //store this context to pass down
  console.log('type of this ', typeof this);
  let funcToBind = this;
  return function(){
    // bound func needs a new arguments array each time to allow the function to accept different
    // args with each call.
    return funcToBind.apply(context, args.concat( Array.prototype.slice.call(arguments) ) );
  }
};