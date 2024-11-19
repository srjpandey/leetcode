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

function getMinimumDifference(root: TreeNode | null): number {
    
    let min = Infinity;
    const visited = [];

    function dfs(node : TreeNode | null) : number {
        if(!node) return;

        dfs(node.left);

        visited.push(node.val);

        dfs(node.right);
    }

    dfs(root);

    for(let i = 1; i < visited.length; i++) {
        min = Math.min(min, visited[i] - visited[i-1]);
    }

    return min;
};