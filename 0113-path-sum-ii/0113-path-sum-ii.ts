function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const paths: number[][] = []

    const dfs = (node: TreeNode | null, currentSum: number = 0, pathValues: number[] = []): void => {
        if (node === null) return

        // Update the current sum and add node.val to the path
        currentSum += node.val
        pathValues.push(node.val)

        // If the current sum equals the target sum at a leaf node
        const isLeafNode = !node.left && !node.right
        if (currentSum === targetSum && isLeafNode) {
            paths.push([...pathValues]) // store a copy of the path
        }

        // Recursively explore left and right subtrees
        dfs(node.left, currentSum, pathValues)
        dfs(node.right, currentSum, pathValues)

        // Backtrack (remove current node from the path)
        pathValues.pop()
    }

    dfs(root)

    return paths
};