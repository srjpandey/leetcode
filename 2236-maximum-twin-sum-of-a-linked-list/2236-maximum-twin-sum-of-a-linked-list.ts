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

function reverseList(head:ListNode):ListNode{
    let curr = head;
    let prev = null;

    while (curr!==null){
        const next = curr.next;
        curr.next  = prev;

        prev = curr;
        curr = next;
    }

    return prev;
}


function pairSum(head: ListNode | null): number {
    // Get the middle of the list 
    let slow = head;
    let fast = head;
 
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    // Save the right part of the list to right
    const right = slow;
    // Cut and Save the left part of the list to left
    let left = head;
    let lCurr = left;
    while(lCurr.next !== right){
        lCurr = lCurr.next;
    }
 
    // Set the tail of left part to null 
    lCurr.next = null;
    // Delcare a max to -1
    let max = -1;
    // Reverse the left part 
    let reversedLeft = reverseList(left);
    let rCurr = right;
    // Traverse the right and the reversedLeft
    while(rCurr !== null){
        // Sum up the curr of right and curr of reversedLeft
        const sum = rCurr.val + reversedLeft.val;
        // Update the max with max or the sum of curr of right and curr of reversedLeft
        max = Math.max(sum, max);

        // Set pointers to the next
        rCurr = rCurr.next;
        reversedLeft = reversedLeft.next;
    }
  
    // Return max
    return max;
};