function singleNumber(nums: number[]): number {
    let n: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        if ((nums[n] == nums[i]) && (n != i)) {
            n++
            i = 0;
        }
    }
    return nums[n];
};