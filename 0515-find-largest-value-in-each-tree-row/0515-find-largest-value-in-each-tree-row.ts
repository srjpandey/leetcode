function largestValues(root: TreeNode | null): number[] {
    if (!root) return [];
    
    let result: number[] = []
    let queue = [root]
    while (queue.length) {
        const levelSize = queue.length
        let maxValue = Number.MIN_SAFE_INTEGER

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            maxValue = Math.max(node.val, maxValue)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(maxValue)
    }
    return result;
};