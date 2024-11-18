function containsNearbyDuplicate(nums: number[], k: number): boolean {

    const lastIndex : Record<number,number> = {}

    for(let i=0; i<nums.length; i++){

        if(nums[i] in lastIndex){

            const j = lastIndex[nums[i]]

            if(i - j <= k) return true ;
        }

        lastIndex[nums[i]] = i;
    }

    return false;
    
};