class BSTIterator {
    idx = 0
    values: number[]

    constructor(root: TreeNode | null) {
        this.values = this.getValues(root)
    }

    getValues(root: TreeNode | null) {
        const values = []

        const dfs = (node: TreeNode | null) => {
            if (node) {
                dfs(node.left)
                values.push(node.val)
                dfs(node.right)
            }
        }

        dfs(root)

        return values
    }

    next(): number {
        return this.values[this.idx++]
    }

    hasNext(): boolean {
        return this.idx < this.values.length
    }
}