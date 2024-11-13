/**
 * Definition for a binary tree node.
 
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 */

const nextNodeVals = (p: TreeNode): number[] => {
    const arr = [];
    if (p?.val !== undefined) { arr.push(p?.val) } else {
        return [];
    };
    if (p.left !== null) {
        arr.push(...nextNodeVals(p.left))
    } else {arr.push(null)}
    if (p.right !== null) {
        arr.push(...nextNodeVals(p.right))
    } else {arr.push(null)}
    return arr;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const arrP = nextNodeVals(p);
    const arrQ = nextNodeVals(q);
    // Skip costly stringify if we can trivially assert mismatch
    if (arrP?.length !== arrQ?.length) {
        return false;
    }
    return JSON.stringify(arrP) === JSON.stringify(arrQ);
};