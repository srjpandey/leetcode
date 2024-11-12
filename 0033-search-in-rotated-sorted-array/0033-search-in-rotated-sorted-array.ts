function search(nums: number[], target: number): number {
    if (nums.length === 0) return -1;
    const lastVal = nums[nums.length - 1];
    // [3,4,5,0,1,2]
    // [T,T,T,F,F,F] --> 5
    const maxIdx = binarySearch(nums, (n: number) => lastVal < n);
    // [3,4,5][0,1,2]
    const searchRange = lastVal < target ?
        [0, maxIdx] :
        [(maxIdx + 1) % nums.length, nums.length - 1];
    const targetIdx = binarySearch(nums,
        (n: number) => n <= target,
        searchRange[0], searchRange[1]
    );

    if (targetIdx === -1) return -1; // in case // [F,F,F,F,F]
    if (nums[targetIdx] === target) return targetIdx;
    return -1;
}

function binarySearch<T>(items: T[], predicate: (item: T) => boolean,
    _left: number = 0, _right:number = items.length - 1): number {
    let left = _left, right = _right;
    while (left <= right)  {
        const mid = Math.floor((left + right) / 2);
        if (predicate(items[mid])) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}
