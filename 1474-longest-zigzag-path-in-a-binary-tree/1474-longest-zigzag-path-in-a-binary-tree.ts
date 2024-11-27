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

function longestZigZag(root: TreeNode | null): number {
  if (!root) return 0
  return dfs(root, 0, null)
};

function dfs(node: TreeNode | null, val: number, topAction: 'left' | 'right' | null) {
    let max = 0;
    // return val if not a node
    if(!node) return val;
    // increment each time we step down
    val++;

    // check if it's a root, only root has topAction null
    if (!topAction){
        max = Math.max(
            dfs(node.left, 0, 'left'), 
            dfs(node.right, 0, 'right')
            )
        // returns the value for root node traversal
        return max
    } else if(topAction=== 'left'){
        // for left top Action we pass incremented val to right node
        if(!node.right) {
            // if no right traverse on left and check for max value
           val =  Math.max(val, dfs(node.left, 0, 'left'))
        } else {
            // traverse both sides to increment val
            val = Math.max(dfs(node.left, 0, 'left'), dfs(node.right, val, 'right'))
        }
    } else {
        // for right top Action we pass incremented val to left node
        if(!node.left) {
            // if no left traverse on right and check for max value
           val =  Math.max(val, dfs(node.right, 0, 'right'))
        } else {
            // traverse both sides to increment val
            val = Math.max(dfs(node.left, val, 'left'), dfs(node.right, 0, 'right'))
        }
    }
    // return the value for the present node
    return val
}