function search(nums: number[], target: number): boolean {
    const { length } = nums;
    let left = 0;
    let right = length -1;

    while (left < right) {
        const mid = Math.floor((right - left)/2)+left;

        if (nums[left] === target) {
            return true;
        }
        if (nums[right] === target) {
            return true;
        }
        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] === nums[right]) {
            right = right -1;
        } else if (nums[mid] > nums[right]) {
            left = mid +1;
        } else {
            right = mid;
        };
    };

    const start = left;
    left = 0;
    right = length -1;

    if (target <= nums[right] && target >= nums[start]) {
        left = start;
    } else {
        right = start -1;
    }

    while (left <= right) {
        const mid = Math.floor((right-left)/2)+left;

        if (target === nums[mid]) {
            return true;
        }
        if (target > nums[mid]) {
            left = mid +1; 
        }
        if (target < nums[mid]) {
            right = mid -1;
        }
    };

    return false;
};