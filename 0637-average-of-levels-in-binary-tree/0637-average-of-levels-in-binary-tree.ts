function averageOfLevels(root: TreeNode | null): number[] {
    // BFS traversal
    if(!root) return [];
    let resAverages = new Array<number>();
    let queue = new Array<TreeNode>(); // required for tree traversal
    queue.push(root);

    while(queue.length) {
        const next = []; // keeps track of nodes from each level
        let sum: number = 0;
        // iterate nodes from each level
        for(const node of queue) {
            sum += node.val;
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        // sum of nodes divided by no. of non-null nodes present in each level
        const avg = sum / queue.length;
        resAverages.push(avg);
        // queue has nodes from the next level
        queue = next;
    }
    return resAverages;
};