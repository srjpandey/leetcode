// Beats 100%, 44ms
function maximumSubarraySum(nums: number[], k: number): number {
    const freq: number[] = new Array(100001).fill(0); // Frequency array
    let maxSum = 0;
    let currentSum = 0;
    let duplicates = 0;

    // Build the initial window
    for (let i = 0; i < k; i++) {
        const num = nums[i];
        if (freq[num] > 0) {
            duplicates++;
        }
        freq[num]++;
        currentSum += num;
    }

    // Update maxSum if no duplicates in the initial window
    if (duplicates === 0) {
        maxSum = currentSum;
    }

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        const leaving = nums[i - k];
        const arriving = nums[i];

        // Update the sum by removing the leaving element and adding the arriving element
        currentSum += arriving - leaving;

        // Update frequency and duplicates count for the arriving element
        if (freq[arriving] > 0) {
            duplicates++;
        }
        freq[arriving]++;

        // Update frequency and duplicates count for the leaving element
        if (freq[leaving] > 1) {
            duplicates--;
        }
        freq[leaving]--;

        // Update maxSum if no duplicates in the current window
        if (duplicates === 0) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}