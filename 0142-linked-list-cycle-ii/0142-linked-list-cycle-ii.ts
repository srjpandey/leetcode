function detectCycle(head: ListNode | null): ListNode | null {
    if(!head || head.val === 100500)
        return head;

    head.val = 100500;

    return detectCycle(head.next);
};