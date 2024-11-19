function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null{
  if (root === null) return null;
  
  const leftHasPQ = lowestCommonAncestor(root.left, p, q);
  const rightHasPQ = lowestCommonAncestor(root.right, p, q);

  if ((leftHasPQ && rightHasPQ) || (root.val === p.val || root.val === q.val))
    return root;

  return leftHasPQ || rightHasPQ;
};