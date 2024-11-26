function maxOperations(nums: number[], k: number): number {
    let i = 0;
    let j = nums.length - 1;
    let ans = 0;
    nums.sort((a, b) => a - b)

    while (i < j) {
        let cur = nums[i] + nums[j];

        if (cur == k) {
            ans += 1;
            i += 1;
            j -= 1;
        } else if (cur > k) {
            j -= 1;
        } else {
            i += 1;
        }
    }

    return ans;
};