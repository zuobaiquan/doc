/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var ceil = arguments[2] || 0;

    if(!l1 && !l2 && ceil === 0) return;

    var val, l3;
    val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + ceil;
    l3 = new ListNode(val%10);
    l3.next = addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, ~~(val/10));

    return l3;
};
