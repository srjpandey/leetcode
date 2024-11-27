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

const traverseDFS = (node: TreeNode, path: number[], targetSum: number) => {
    // Declare the count to calculate if current path has targetSum
    let count = 0;
    let sum = targetSum;
    // if node is null then we won't be able to calculate the sum, so return 0
    if(node === null) return 0;
    // push current node value in to the path
    path.push(node.val);
    // minus the targetSum from the bottom to top
    for(let i = path.length - 1; i>= 0; i--) {
        sum -= path[i];
        if(sum !== 0) continue;
        count++;
    }
    // Sum up the count for the sub trees
    count += traverseDFS(node.left, path, targetSum);
    count += traverseDFS(node.right, path, targetSum);
    // Pop the current node calue from path since we had done calculation and
    // we only want the path constructed by the prev path
    path.pop();
    return count;

}

function pathSum(root: TreeNode | null, targetSum: number): number {
    const path = [];
    if(root === null) return 0;
    return traverseDFS(root, path, targetSum)
};