function resultsArray(nums: number[], k: number): number[] {
    let i = 0;
    let j = i + k;
    let result = [];

    // Check subarrays of size k
    while (i <= nums.length - k) {
        const subArr = nums.slice(i, j);

        // check if subbArr is Sorted consecutively
        const isSubArrSorted = isSortedConsecutive(subArr);

        if (isSubArrSorted) {
            // push last element of sorted subArr into result
            result.push(subArr[k - 1]);
        }
        else
            // push -1 if not sorted subArr
            result.push(-1);
        i++;
        j++;
    }

    return result;
};

const isSortedConsecutive = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        // if currentElement is not (nextElement - 1)
        if (arr[i] !== arr[i + 1] - 1)
            return false;
    }
    return true;
};