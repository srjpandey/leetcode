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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const vals1 = [];
    const vals2 = [];

    const dfs = (node: TreeNode | null, collection: number[]): void => {
        if (!node) return;
        if (!node.left && !node.right) collection.push(node.val)

        dfs(node.left, collection)
        dfs(node.right, collection)
    }

    dfs(root1, vals1)
    dfs(root2, vals2);

    if (vals1.length !== vals2.length) return false

    for (let i = 0; i < vals1.length; i++) {
        if (vals1[i] !== vals2[i]) return false;
    }

    return true;
};