function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        const leftMax = Math.max(dfs(node.left), 0);
        const rightMax = Math.max(dfs(node.right), 0);
        
        const currentSum = node.val + leftMax + rightMax;
        maxSum = Math.max(maxSum, currentSum);
        
        return node.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return maxSum;
}