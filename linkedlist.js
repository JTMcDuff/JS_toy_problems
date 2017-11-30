/*
Standard linked list implementation using JS

*/

var LinkedList = function (initialValue) {
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
  while (check != null) {
    if ( check.value === value ) { return true; }
    check = check.next;
  }
  return false;
  
};
