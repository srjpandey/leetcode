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
    //11:59
    function addSum(node: TreeNode | null, curValue:string, sum: number):number {
        if (node === null) {
            return sum
        }
        curValue += node.val.toString()
        if (node.left === null && node.right === null) {
            
            return sum + parseInt(curValue)
        }
        return addSum(node.left, curValue, sum) + addSum(node.right, curValue, sum)
    }
    return addSum(root, '', 0);
    //12:18
};