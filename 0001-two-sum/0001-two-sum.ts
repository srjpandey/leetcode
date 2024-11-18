function twoSum(nums: number[], target: number): number[] {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        const comp = target - nums[i];
        if(map[comp] !== undefined) return [i, map[comp]]; else map[nums[i]] = i;
    }
};