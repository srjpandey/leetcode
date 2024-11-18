function decrypt(code: number[], k: number): number[] {
    const n = code.length;
    const result = new Array(n).fill(0);

    if (k === 0) {
        return result;
    }

    // Handle circular indexing
    const circularCode = code.concat(code);

    for (let i = 0; i < n; i++) {
        let sum = 0;

        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                sum += circularCode[i + j];
            }
        } else {
            for (let j = -1; j >= k; j--) {
                sum += circularCode[n + i + j];
            }
        }

        result[i] = sum;
    }

    return result;
}

// Example usage:
console.log(decrypt([5, 7, 1, 4], 3));  // Output: [12, 10, 16, 13]
console.log(decrypt([1, 2, 3, 4], 0));  // Output: [0, 0, 0, 0]
console.log(decrypt([2, 4, 9, 3], -2)); // Output: [12, 5, 6, 13]
