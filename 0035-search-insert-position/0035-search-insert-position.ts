const searchInsert = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Target found at index mid.
        } else if (nums[mid] < target) {
            left = mid + 1; // Adjust the left boundary.
        } else {
            right = mid - 1; // Adjust the right boundary.
        }
    }

    return left;
};