function findScore(nums: number[]): number {
     let score = 0;
    const marked = new Set();

    const sortedIndexes = Array.from(nums.keys()).sort((a, b) => {
        if (nums[a] === nums[b]) {
            return a - b; 
        }
        return nums[a] - nums[b]; 
    });

    for (const index of sortedIndexes) {
        if (!marked.has(index)) {
            score += nums[index];

            marked.add(index);
            marked.add(index - 1);
            marked.add(index + 1);
        }
    }

    return score;
}