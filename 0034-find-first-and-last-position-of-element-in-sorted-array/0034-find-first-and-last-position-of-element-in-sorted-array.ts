function searchRange(nums: number[], target: number): number[] {

  let minIndex = binarySearch(nums, target, false);

  if (minIndex !== -1) {
    let maxIndex = binarySearch(nums, target, true);
    return [minIndex, maxIndex];
  }

  return [-1, -1];
}

function binarySearch(nums: number[], key: number, findMax: boolean) {
  let keyIndex = -1;

  let left = 0;

  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);

    if (key > nums[middle]) {
      left = middle + 1;
    } else if (key < nums[middle]) {
      right = middle - 1;
    } else {
      // equal
      keyIndex = middle;

      if (findMax) {
        // true mean we are looking for max
        left = middle + 1;
      } else {
        // mean looking for min
        right = middle - 1;
      }
    }
  }
  return keyIndex;
}