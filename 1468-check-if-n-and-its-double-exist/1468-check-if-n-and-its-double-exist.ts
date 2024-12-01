/**
 * Check if there exists two indices i and j in the array such that arr[i] is equal to 2 times arr[j].
 * @param {number[]} arr - The input array of integers.
 * @return {boolean} - True if such indices exist, false otherwise.
 */
function checkIfExist(arr: number[]): boolean {
  const n = arr.length;
  const hashSet = new Set(); // Use a hash set to store unique elements and quickly check for existence.

  for (let i = 0; i < n; i++) {
    const double = arr[i] * 2; // Calculate double of the current element.
    const half = arr[i] / 2; // Calculate half of the current element.

    // Check if either half or double exists in the hash set.
    if (hashSet.has(double) || (arr[i] % 2 === 0 && hashSet.has(half))) {
      return true; // Found a match, return true.
    } else {
      hashSet.add(arr[i]); // No match, add the current element to the hash set.
    }
  }

  return false; // No such indices found, return false.
}