function findTargetSumWays(nums: number[], target: number): number {
    let count = 0;

    function backtrack(index: number, currentSum: number) {
        if (index === nums.length) {
            if (currentSum === target) {
                count++;
            }
            return;
        }

        // Add the current number
        backtrack(index + 1, currentSum + nums[index]);

        // Subtract the current number
        backtrack(index + 1, currentSum - nums[index]);
    }

    backtrack(0, 0);
    return count;
}