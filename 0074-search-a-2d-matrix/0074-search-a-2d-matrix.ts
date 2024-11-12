function searchMatrix(matrix: number[][], target: number): boolean {
    const m: number = matrix.length;
    const n: number = matrix[0].length;
    let left: number = 0;
    let right: number = m * n - 1;

    while (left <= right) {
        const mid: number = left + ((right - left) >> 1);
        const x: number = Math.floor(mid / n);
        const y: number = mid % n;
        const midValue: number = matrix[x][y];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}