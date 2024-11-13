const generateTrees = (end: number, start = 1): Array<TreeNode | null> => {
  if (end < start) return [null];
  if (end === start) return [new TreeNode(end)];
  const trees: TreeNode[] = [];
  for (let i = start; i <= end; i++) {
    const leftTrees = generateTrees(i - 1, start);
    const rightTrees = generateTrees(end, i + 1);
    for (const left of leftTrees) {
      for (const right of rightTrees) {
        trees.push(new TreeNode(i, left, right));
      }
    }
  }
  return trees;
};