function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = Infinity; 
    let windowStart = 0, windowSum = 0;       

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]; 

        while (windowSum >= target) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}