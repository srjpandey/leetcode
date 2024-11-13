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

function partition(head: ListNode | null, x: number): ListNode | null {

    // helper function
    const attachAfter = (beforeNode:ListNode, nodeToAttach: ListNode) => {
        //make sure nodeToAttach is detached
        nodeToAttach.next = null    
        nodeToAttach.next = beforeNode.next ;
        beforeNode.next = nodeToAttach
    }

    // helper function
    const detachNodeAfter = (node:ListNode): ListNode | null => {
        let result = node.next;
        node.next = node.next.next
        result.next = null 
        return result
    }

    let pointer1 = new ListNode(-1, head);
    let result = pointer1
    let pointer2 = pointer1

    while(pointer2.next){
        if(pointer2.next == pointer1){
            // if the moving pointer2 is behind the pointer 1
            pointer2 = pointer2.next
        }else{
            if(pointer2.next.val < x){
                // dettach and move pointer
                const moveableNode = detachNodeAfter(pointer2)
                attachAfter(pointer1,moveableNode)
                pointer1 = pointer1.next
            }else{
                pointer2 = pointer2.next
            }
        }
    }
    return result.next
};  