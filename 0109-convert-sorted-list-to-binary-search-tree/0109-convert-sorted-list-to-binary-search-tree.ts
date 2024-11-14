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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * Takes a linked list and breaks it down into the root value (the middle) and 2 lists: the
 * left-hand side of the root value and the right-hand side of the root value.
 * 
 * This is one half of the task, the tree will be as balanced as it can be if the list is always
 * split out in the middle - in this case splitting it in the middle will always result in the left
 * side being of lesser value than the right.
 */
function processList(list: ListNode): { rootVal: number, left: ListNode | null, right: ListNode | null } {
  let currentNode: ListNode | null = list;
  let i = 0;

  while (currentNode !== null) {
    i += 1;
    currentNode = currentNode.next;
  }

  let nodeCount = i;

  if (nodeCount === 0) {
    throw new Error('Unexpected input');
  }
  
  if (nodeCount === 1) {
    return { rootVal: list.val, left: null, right: null };
  }
  
  if (nodeCount === 2) {
    // An alternative to this would be to set list.next as the rootVal and list as left
    return { rootVal: list.val, left: null, right: list.next };
  }

  // If the list has an even amount of elements, it's the left element of the middle pair that is
  // selected - it is important to take the element to the left, so the right list has more items
  // and thus is guaranteed to have a larger sum than the left.
  let middleIndex = Math.floor(nodeCount / 2);

  let endOfLeftList: ListNode | null = null;

  i = 0;
  currentNode = list;

  while (currentNode !== null) {
    if (i === middleIndex - 1) {
      endOfLeftList = currentNode;
      break;
    }

    currentNode = currentNode.next;
    i += 1;
  }

  const root = endOfLeftList?.next;

  if (!endOfLeftList || !root) {
    throw new Error('Unexpected');
  }

  // Cut off the right side of the left - the same step is not required for the right
  endOfLeftList.next = null;
  
  return {
    rootVal: root.val,
    left: list,
    right: root.next,
  };
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) {
    return null;
  }

  const processedRoot = processList(head);

  const root: TreeNode = {
    val: processedRoot.rootVal,
    left: null,
    right: null,
  };

  let currentNode: TreeNode | null = root;

  let currentLists: { left: ListNode | null, right: ListNode | null} = {
    left: processedRoot.left,
    right: processedRoot.right
  };

  // A branchout is when there's both a left and right path available, we take the left path and
  // remember the info about the branchout to process it later.
  let branchouts: Array<{ node: TreeNode, right: ListNode }> = [];

  let isLeft = true;

  while (currentNode) {
    // The idea is to build the tree from top to bottom by adding left nodes first, note any
    // branchouts and return to the last branchout to process the node to the right.

    let list: ListNode | null = null;

    if (currentLists.left) {
      isLeft = true;
      list = currentLists.left;

      if (currentLists.right) {
        branchouts.push({ node: currentNode, right: currentLists.right })
      }
    } else if (currentLists.right) {
      isLeft = false;
      list = currentLists.right;
    }

    if (list) {
      const result = processList(list);

      const node = {
        val: result.rootVal,
        left: null,
        right: null,
      };

      if (isLeft) {
        currentNode.left = node;
      } else {
        currentNode.right = node;
      }

      currentNode = node;
      currentLists = { left: result.left, right: result.right };

      // Backtrack to the last branchout when there are no more nodes
    } else if (branchouts.length > 0) {
      const branchout = branchouts.splice(branchouts.length - 1, 1)[0];
      currentNode = branchout.node;
      currentLists = { left: null, right: branchout.right };
    } else {
      currentNode = null; // Done
    }
  }

  return root;
};