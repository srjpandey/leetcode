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

function levelOrder(root: TreeNode | null): number[][] {

    if(!root){
        return []
    }

    if(!root.left && !root.right){
        return [[root.val]]
    }

    let res:number[][]=[]

    LOT(root,0,res);

    return res

};

function LOT(root:TreeNode,d:number,res:number[][]):void{

    if(!root){
        return
    }

    if(res[d]){
        res[d].push(root.val)
    }else{
        res[d]=[root.val]
    }

    LOT(root.left,d+1,res);
    LOT(root.right,d+1,res);
}