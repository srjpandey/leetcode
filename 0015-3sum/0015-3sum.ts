function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a-b);
    let lookup: Set<number> = new Set<number>();
    let result: number[][] = [];
    for(let i: number = 0; i < nums.length-2; i++) {
        if(nums[i] === nums[i-1]) continue;
        let left: number = i+1;
        let right: number = nums.length-1;
        while(left < right) {
            let sum = nums[i] + nums [left] + nums[right];
            if(sum < 0) left++;
            else if(sum > 0) right--;
            else {
                result.push([nums[i], nums[left++], nums[right--]]);
                while(left < right && nums[left] === nums[left-1]) left++;
                while(left < right && nums[right] === nums[right+1]) right--; 
            }
        }
    }
    return result;
};