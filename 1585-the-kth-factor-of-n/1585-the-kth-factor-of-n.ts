function kthFactor(n: number, k: number): number {
    let f = 0
    while (++f <= n)
        if (n % f === 0 && --k === 0) return f
    return -1
};

// https://leetcode.com/u/aallali/