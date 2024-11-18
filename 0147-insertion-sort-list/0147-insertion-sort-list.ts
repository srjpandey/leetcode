function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const result = new ListNode(0);
    let currentElement: ListNode | null = head;
    let prevInsertNode: ListNode | null = null;

    while (currentElement) {
        let nextElement: ListNode | null = currentElement.next;

        // Reset the pointer if the current node needs to be inserted before the previous insertion point
        if (!prevInsertNode || prevInsertNode.val > currentElement.val) {
            prevInsertNode = result;
        }

        // Find the correct insertion position
        while (prevInsertNode.next && prevInsertNode.next.val < currentElement.val) {
            prevInsertNode = prevInsertNode.next;
        }

        // Insert current node
        currentElement.next = prevInsertNode.next;
        prevInsertNode.next = currentElement;

        // Move to the next node in the original list
        currentElement = nextElement;
    }

    return result.next;
}