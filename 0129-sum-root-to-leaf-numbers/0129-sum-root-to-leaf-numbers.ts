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

function sumNumbers(root: TreeNode | null): number {
    if(!root) return 0;
    // root to leaf paths
    const results = []
    solve(root, [root.val], results)
    return results.reduce((acc, curr) => acc += curr, 0)
};

function solve(root: TreeNode | null, path: number[], results: number[]) {
    // termination condition
    if(!root.left && !root.right) {
        // add to results
        const pathInt = Number(path.join(''))
        results.push(pathInt)
        return;
    }

    for(const child of [root.left, root.right]) {
        // valid
        if(!child) continue
        // select
        path.push(child.val)
        // backtrack
        solve(child, path, results)
        // deselect
        path.pop()
    }
}