function waysToSplitArray(nums: number[]): number {
    let total: number = 0;

    for(let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    let count: number = 0;
    let left: number = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        total -= nums[i];

        if(left >= total) count++;
    }

    return count;
};