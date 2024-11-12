// We assume ListNode is provided by the environment and should not be redefined.

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Create a dummy node to simplify edge cases
    const dummy = new ListNode(0);
    dummy.next = head;
    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;

    // Move the first pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first?.next ?? null;
    }

    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
        first = first.next;
        second = second?.next ?? null;
    }

    // Remove the nth node from the end
    second!.next = second?.next?.next ?? null;

    // Return the new head of the list
    return dummy.next;
}