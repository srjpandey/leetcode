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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(head == null || head.next == null) return null;
    let slow: ListNode = head;
    let fast: ListNode = head;
   
    while(fast.next.next !== null && fast.next.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let next1:ListNode = slow.next; 
    slow.next = next1.next;
    next1.next = null;
    return head;

};