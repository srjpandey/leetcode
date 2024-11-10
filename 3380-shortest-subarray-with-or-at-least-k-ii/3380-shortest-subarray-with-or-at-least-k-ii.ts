function minimumSubarrayLength(nums: number[], k: number): number {
    const table = new SparseTable(nums);

    let left = 0;
    let minLen = nums.length + 1;
    for (let right = 1; right <= nums.length; ++right) {
        while (left < right && table.query(left, right) >= k) {
            minLen = Math.min(minLen, right - left);
            ++left;
        }
    }

    return minLen <= nums.length ? minLen : -1;
}

class SparseTable {
    private table: number[][];
    private log: number[];

    constructor(nums: number[]) {
        const N = nums.length;
        const K = 1 + Math.floor(Math.log2(N));

        const log = Array(N + 1);
        log[0] = 0;
        log[1] = 0;
        for (let i = 2; i <= N; ++i) {
            log[i] = log[i >> 1] + 1;
        }
        
        const table: number[][] = new Array(N);
        for (let i = 0; i < N; ++i) {
            table[i] = new Array(K).fill(0);
            table[i][0] = nums[i];
        }

        // Build the Sparse Table
        let pow = 2;
        for (let j = 1; pow <= N; ++j) {
            for (let i = 0; (i + pow - 1) < N; ++i) {
                table[i][j] = table[i][j - 1] | table[i + (pow >> 1)][j - 1];
            }
            pow <<= 1;
        }

        this.log = log;
        this.table = table;
    }

    query(left: number, right: number): number {
        const j = this.log[right - left];
        return this.table[left][j] | this.table[right - (1 << j)][j];
    }
}