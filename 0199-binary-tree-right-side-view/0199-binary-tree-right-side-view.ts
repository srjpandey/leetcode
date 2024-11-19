const rightSideView = (
  root: TreeNode | null,
  answer: number[] = [],
  depth = 0
): number[] => {
  if (!root) return answer;
  answer[depth] = root.val;
  rightSideView(root.left, answer, depth + 1);
  return rightSideView(root.right, answer, depth + 1);
};