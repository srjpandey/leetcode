function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    const getZigZagValues = (nodes: TreeNode[], position: number): number[] => {
        const values = nodes.map(node => node.val)

        if (position % 2 === 1) {
            values.reverse()
        }

        return values
    }

    const result = []
    let level = [root]
    let count = 0

    while (level.length) {
        let queue = []

        result.push(getZigZagValues(level, count))

        level.map(node => {
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        })

        level = queue
        count += 1
    }

    return result
};