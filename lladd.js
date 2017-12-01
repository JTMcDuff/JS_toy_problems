/*
  Linkedlists in this case represent an integer, the head is the 1's place.
  Given two of the above lists, return the value of the two numbers added together.

  Inputs: 2 LLs 
  Outputs: Int 
  Constraints: None 
  Edge Cases: non-LL inputs

  Algo
  Use a single functon to 'collapse' a single list.
    iterate through list, using string as a tracker
    add values to the string.
  return the number value of the string.

*/

function llAdd( ll1, ll2 ){
  // the easiest way to handle this is to use one function for each ll 
  
  return sumLL( ll1 ) + sumLL( ll2 );
  
  function sumLL( ll ) {
    let strNum = '';
    let tracker = ll.head;
    
    while ( tracker !== null ) {
      strNum = tracker.value + '' + strNum;
      tracker = tracker.next;
    }
    
    return Number( strNum );
  }
  
}

/*
Standard linked list implementation using JS

*/

let LinkedList = function (initialValue) {
  initialValue = initialValue || null;
  this.node = {value: initialValue, next: null};
  this.head = this.node;
  this.tail = this.node;
  };

LinkedList.prototype.addToTail = function(value) {
  let node = {value: value, next:null};
  if (this.head.value === null) { this.head = node; }
  this.tail.next = node;
  this.tail = node;
};

LinkedList.prototype.removeHead = function () {
  if ( this.head === this.tail ) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.node = this.head;
  }  
  
};

LinkedList.prototype.contains = function (value) {
  let check = this.head;
  while (check !== null) {
    if ( check.value === value ) { return true; }
    check = check.next;
  }
  return false;
  
};