function countValidSelections(nums: number[]): number {
    let count: number = 0
    let left: number = 0
    let right: number = nums.reduce((sum, curr) => sum + curr)

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            if (left == right) count += 2
            if (left - right == 1 || right - left == 1) count++
        }
        left += nums[i]
        right -= nums[i]
    }

    return count
};