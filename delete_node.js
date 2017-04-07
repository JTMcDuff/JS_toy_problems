/**
 * Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.

 We can't delete the node itself without a reference to the previous node.  What we can do is
 make the given node the next node, and then delete the next node by passing over it in the list.
 */
const deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};