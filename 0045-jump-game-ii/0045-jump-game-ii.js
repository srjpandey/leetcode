/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jump =0;
    let currentend=0;
    let farthest =0;
    for(let i =0;i<nums.length-1;i++){
        farthest = Math.max(farthest,i+nums[i]);
        if(i===currentend){
            jump++;
            currentend=farthest;
            if(currentend>=nums.length-1){
                break;
            }
        }
    }
    return jump;
};