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
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }  
  let stack = [root], prev = null;
  while (stack.length) {
    let cur = stack.pop();
    if (prev) {
        prev.right = cur;
        prev.left = null;
    }
    if (cur.right) {
        stack.push(cur.right);
    }
    if (cur.left) {
        stack.push(cur.left);
    }
    prev = cur;
  }
};