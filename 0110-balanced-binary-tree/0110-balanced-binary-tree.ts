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

function isBalanced(root: TreeNode | null): boolean {
    let imbalanceFound = false;

    function dfs (thisNode) {
        if(!thisNode) return 0;

        else if(!imbalanceFound) { //prevents unnecessary recursion

            let leftDepth = dfs(thisNode.left)
            let rightDepth = dfs(thisNode.right)

            //stops the recursive calls if imbalance found
            if(Math.abs(leftDepth - rightDepth) > 1) imbalanceFound = true
            
            //pass up current depth + max below it
            return 1 + Math.max(leftDepth, rightDepth)
        
        }
    }
    dfs(root);

return !imbalanceFound
};

