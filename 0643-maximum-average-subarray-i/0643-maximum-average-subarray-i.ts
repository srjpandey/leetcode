function findMaxAverage(nums: number[], k: number): number {
    // Initialize left and right pointers for the sliding window
    let l = 0;
    let r = l + k - 1;

    // Calculate the sum of the first 'k' elements
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    // Initialize maxAvg with the average of the first 'k' elements
    let maxAvg = sum / k;

    // Slide the window through the array
    while (r < nums.length - 1) {
        // Remove the leftmost element from the sum
        sum -= nums[l];
        // Add the next element (rightmost) to the sum
        sum += nums[r + 1];

        // Update maxAvg if the new average is higher
        maxAvg = Math.max(maxAvg, sum / k);

        // Move the window to the right
        l++;
        r++;
    }

    // Return the maximum average found
    return maxAvg;
};