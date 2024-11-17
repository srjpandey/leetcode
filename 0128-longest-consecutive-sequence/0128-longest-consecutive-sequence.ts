function longestConsecutive(nums: number[]): number {
    let set = new Set(nums) , max = 0;
    for( let num of nums ){
        if( !set.has(num - 1) ){
            let temp = num , cur = 0;
            while( set.has( temp++ ) ){
                cur++;
                max = Math.max(cur , max)
            }
        }
    }
    return max;
};