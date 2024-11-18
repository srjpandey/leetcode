function reorderList(head: ListNode | null): void {
    if (!head || !head.next || !head.next.next) return;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow!.next!;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let second = slow.next;
    slow.next = null; // Split the list into two halves
    let prev: ListNode | null = null;
    while (second) {
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }
    let reversedSecond = prev;

    // Step 3: Merge the two halves
    let first = head;
    while (reversedSecond) {
        const tmp1 = first.next;
        const tmp2 = reversedSecond.next;

        first.next = reversedSecond;
        reversedSecond.next = tmp1;

        first = tmp1;
        reversedSecond = tmp2;
    }
}