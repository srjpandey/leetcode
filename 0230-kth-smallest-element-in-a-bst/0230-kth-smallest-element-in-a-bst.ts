const kthSmallest = (
  node: TreeNode | null,
  k: number,
  count = { k: 0 }
): number => {
  if (!node) return -1;
  const left = kthSmallest(node.left, k, count);
  if (left !== -1) return left;
  if (++count.k === k) return node.val;
  return kthSmallest(node.right, k, count);
};