/*
 Given a value, partition a linked list around it:
 The value itself and greater values must come after all smaller values.
 The value may appear no times, one time, or multiple times in the linked list.

 Algo

 Iterate through LL
 	If node is an equal or greater value
 		preserve value.
 		delete the node.
 		append it to tail.
 	return the partitioned LL
 
 Thos solution is constant space and linear time complexity.

*/

// First, a standard LL implementation.

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


// Now, our actual solution
function linkedListPartition( pivot, linkedList ) {
	// we need some tracker values
	let follower = null;
	let tracker = linkedList.head;
	let curr;

	// Run through LL
	while ( tracker !== null ) {

		// if we find the pivot or a greater value
		if ( tracker.value >= pivot ) {
			// preserve the value
			curr = tracker.value;

			// delete the node
			
			// if follower is null, we can use removeHead and update trackers
			if ( follower === null ) {

				//Move tracker.
				tracker = tracker.next;

				linkedList.removeHead();

			}
			
			else { 	// Otherwise we just point around the node
				tracker = tracker.next;
				follower.next = tracker;
			}

			// Append to the tail
			linkedList.addToTail( curr )
		}
		// Else we just update our trackers
		else {
			// Update trackers..
			follower = tracker;
			tracker = tracker.next;
		}
	}

	//return LL
	return linkedList;

}