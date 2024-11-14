
function minDepth(root: TreeNode | null): number {
    if (!root) return 0;

    const queue: [TreeNode, number][] = [[root, 1]];

    while (queue.length > 0) {
        const [node, depth] = queue.shift()!;

        // Check if we reached a leaf node
        if (!node.left && !node.right) {
            return depth;
        }

        // Add children to the queue if they exist
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }

    return 0; // This line is technically unreachable
}