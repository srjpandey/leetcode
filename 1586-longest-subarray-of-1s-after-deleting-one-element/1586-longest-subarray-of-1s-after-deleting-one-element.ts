function longestSubarray(nums: number[]): number {
    let leftIndex = -1
    let zeroPosition = -1;
    let zeroCount = 0
    let max = 0
    for(let index = 0; index < nums.length; index++){
        if(nums[index] == 0){
            if(zeroCount == 1){
                // change current position
                leftIndex = zeroPosition;
            }else{
               zeroCount = 1 
            }
            zeroPosition = index
        }
        max = Math.max(max, (index - leftIndex) - 1)
    }    
    return max
};