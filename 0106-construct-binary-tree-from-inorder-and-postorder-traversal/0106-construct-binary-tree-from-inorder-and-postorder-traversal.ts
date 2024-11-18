function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    // The last element of postorder is the root of the tree
    const rootValue = postorder.pop()!;
    const root = new TreeNode(rootValue);

    // Find the root index in inorder array
    const rootIndex = inorder.indexOf(rootValue);

    // Recursively build the right and left subtrees
    // Slice the inorder array into right and left subtrees based on the root index
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
    root.left = buildTree(inorder.slice(0, rootIndex), postorder);

    return root;
}