function maxSubArray(nums: number[]): number {

    let maxSum:number     = nums[0];
    let currentSum:number = nums[0];

    for(let i =1;i<nums.length;i++){

        currentSum = Math.max(nums[i], currentSum + nums[i]);

        maxSum = Math.max(currentSum , maxSum);
    }

    return maxSum;
    
};