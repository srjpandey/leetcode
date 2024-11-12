function threeSumClosest(nums: number[], target: number): number {
    nums.sort((x, y)=>x-y); // sort asc

    let res = 0;
    let minDiff = Infinity;
    const n = nums.length;
    for(let i=1; i<n-1; i++){
        let num = nums[i];
        let left = 0;
        let right = n-1;
        while(left!==i && right!==i){
            const leftNum = nums[left];
            const rightNum = nums[right];
            const sum = num + leftNum + rightNum;
            const diff = Math.abs(sum-target);
            if(diff<minDiff){
                res = sum;
                minDiff = diff;
            }
            if(sum-target>0){
                right-=1;
            }else{
                left+=1;
            }
        }
    } 
    return res;
};