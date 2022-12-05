/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let res = head, one = head;
      while (one !== null) {
        one = one.next;
      if (one === null) break;
        else one = one.next;
        res = res.next;
    }
    return res;
};