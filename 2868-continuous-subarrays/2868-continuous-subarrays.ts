function continuousSubarrays(nums: number[]): number {
 let start = 0, count = 0;
    const minDeque: number[] = [];
    const maxDeque: number[] = [];

    for (let end = 0; end < nums.length; end++) {
        // Maintain minDeque: Remove indices of elements larger than nums[end]
        while (minDeque.length > 0 && nums[minDeque[minDeque.length - 1]] > nums[end]) {
            minDeque.pop();
        }
        minDeque.push(end);

        // Maintain maxDeque: Remove indices of elements smaller than nums[end]
        while (maxDeque.length > 0 && nums[maxDeque[maxDeque.length - 1]] < nums[end]) {
            maxDeque.pop();
        }
        maxDeque.push(end);

        // If the window is invalid, shrink it from the left
        while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
            if (minDeque[0] === start) minDeque.shift();
            if (maxDeque[0] === start) maxDeque.shift();
            start++;
        }

        // Count all valid subarrays ending at `end`
        count += end - start + 1;
    }

    return count;
};