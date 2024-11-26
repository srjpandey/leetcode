function maxLevelSum(root: TreeNode | null): number {
  const queue: [TreeNode | null, number][] = [[root, 1]];
  const sums: number[] = [];
  let maxSum = -Infinity;
  let maxLevel = 0;

  while (queue.length > 0) {
    const [node, level] = queue.shift();
    
    sums[level] = (sums[level] || 0) + node.val;

    if (node.left) {
        queue.push([node.left, level + 1]);
    }

    if (node.right) {
        queue.push([node.right, level + 1]);
    }
  }

  for (let i = 1; i < sums.length; i++) {
    if (sums[i] > maxSum) {
        maxSum = sums[i];
        maxLevel = i;
    }
  }

  return maxLevel;
};