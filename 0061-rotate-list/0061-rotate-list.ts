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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head) return null;
    let count = 0;
    let start=head;
    while(start.next){
        count++;
        start=start.next;
    }
    count++;
        start.next = head;

    let breakPoint = count - (k % count);

    let newEnd = head;
    for (let i = 1; i < breakPoint; i++) {
        newEnd = newEnd.next!;
    }

    let newHead = newEnd.next!;
    newEnd.next = null;

    return newHead
    
};