function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left === right) {
    return head;
  }

  let mainHead = new ListNode(undefined, head);
  let staticHeader = mainHead;
  let index = 2;

  while (index - 1 < left) {
    staticHeader = staticHeader.next;
    index++;
  }

  let slow = staticHeader.next;
  let staticTail = staticHeader.next;
  let fast = staticTail.next;

  while (index <= right) {
    staticHeader.next = fast;
    staticTail.next = fast.next;
    fast.next = slow;
    slow = fast;
    fast = staticTail.next;
    index++;
  }


  return mainHead.next;
};