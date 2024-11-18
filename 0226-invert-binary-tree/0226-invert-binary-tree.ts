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

function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) return null;

    invert(root);
    return root;
};

const invert = (node : TreeNode | null) => {
    if(!node) return;
    let left = node.left || null;
    let right = node.right || null;

    let temp;

    temp = left;

    left = right;
    right = temp;

    node.left = left;
    node.right = right;

    invert(node.left);
    invert(node.right);
}