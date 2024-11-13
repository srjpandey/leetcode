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

function recoverTree(root: TreeNode | null): void {
  if (!root) return;

  let firstNode: TreeNode | null = null;
  let secondNode: TreeNode | null = null;
  let prevNode: TreeNode = new TreeNode(Number.MIN_SAFE_INTEGER);

  inOrder(root);

 
  let temp = firstNode.val;
  firstNode.val = secondNode?.val;
  secondNode.val = temp;


  function inOrder(node: TreeNode | null): void {
    if (node == null) return;

    inOrder(node.left);

    if (prevNode?.val >= node.val) {
      if (firstNode == null) firstNode = prevNode;
      secondNode = node;
    }

    prevNode = node;

    inOrder(node.right);
  }
}