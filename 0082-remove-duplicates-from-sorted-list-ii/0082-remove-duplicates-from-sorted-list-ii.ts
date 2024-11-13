/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head.next;
  let dummy = new ListNode(-1, head);
  let prev = dummy;

  while (fast) {
    if (fast.val == slow.val) {
      prev.next = fast.next;
    } else if (prev.next !== fast) { // We need to compare prev.next to fast, so we are not repeating elements still
      prev = slow;
    }

    fast = fast.next;
    slow = slow.next;
  }

  return dummy.next;
};