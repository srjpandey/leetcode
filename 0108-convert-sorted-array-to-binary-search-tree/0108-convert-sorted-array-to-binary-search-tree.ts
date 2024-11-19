function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null

    const centerIndex = Math.floor(nums.length / 2)
    return new TreeNode(nums[centerIndex],
        sortedArrayToBST(nums.slice(0, centerIndex)),
        sortedArrayToBST(nums.slice(centerIndex + 1))
    )
};