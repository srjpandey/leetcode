function findPeakElement(nums: number[]): number {
    let peak = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > peak){
            peak = nums[i]
        }
    }
    return nums.indexOf(peak)
};