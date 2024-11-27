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

function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    return helper(root, -Infinity);
}

const helper = (node: TreeNode | null, prevMax: number) => {
    if (!node) return 0;

    let ans = node.val >= prevMax ? 1 : 0;

    ans += helper(node.left, Math.max(prevMax, node.val))
    ans += helper(node.right, Math.max(prevMax, node.val))

    return ans
};