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
 * Checks if a node is a leaf (no children).
 * @param {TreeNode} node - The node to check.
 * @returns {boolean} - True if the node is a leaf, false otherwise.
 */
const isLeaf = (node: TreeNode): boolean => {
    return node.left === null && node.right === null;
};

/**
 * Checks if a node is complete (either has two children or only a left child).
 * @param {TreeNode} node - The node to check.
 * @returns {boolean} - True if the node is complete, false otherwise.
 */
const isComplete = (node: TreeNode): boolean => {
    return (node.left !== null && node.right !== null) || 
           (node.left !== null && node.right === null);
};

/**
 * Depth-first search to count the number of nodes that are either leaf or complete.
 * @param {TreeNode | null} node - The current node in the DFS.
 * @returns {number} - The count of qualifying nodes.
 */
const dfs = (node: TreeNode | null): number => {
    if (node === null) {
        return 0;
    }

    let count = isLeaf(node) || isComplete(node) ? 1 : 0;
    count += dfs(node.left);
    count += dfs(node.right);

    return count;
};

/**
 * Counts the number of nodes in a binary tree that are either leaves or complete.
 * @param {TreeNode | null} root - The root of the binary tree.
 * @returns {number} - The total count of such nodes.
 */
function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    return dfs(root);
}