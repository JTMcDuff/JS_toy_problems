/*
Write a function that reverses a linked list.
Linked List Construction
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

Inputs:  Linked List
Outputs,  reversed Linked List
Constraints:
  Linear Time
  Constant Space
  Do not mutate original nodes by adding new properties.
Edge Cases:  Linked List length = 1

Algo
  Recursive
  
  set previous to node
  set current to node's next
  set node's next to null
  
  
  Base Case:
  end if node's next is null
  
  set next to curent's next
  set current's next to previous
  call function on next and current
  
  

*/

var reverseLinkedList = function(node) {
  // Data Validation
  if (node.next === null) {
    return node;
  }
  
  // Setup
  let previous = node;
  let current = node.next;
  node.next = null;
  
  // Helper Recursive Function
  function reverse(current, previous) {
    if (current.next === null ) {
      current.next = previous;
      return current;
    }
    
    let next = current.next;
    current.next = previous;
    return reverse( next, current );
  }
  
  return reverse ( current, previous );
};