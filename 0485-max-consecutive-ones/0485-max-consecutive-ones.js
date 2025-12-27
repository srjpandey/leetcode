const findMaxConsecutiveOnes = (a) => {
    const n = a.length;
    let sq = 0;
    let p = -1;
    for (let i = 0; i < n; ++i)
        if (a[i] === 0) {
            sq = Math.max(sq, i - p);
            p = i;
        }
    if (a[n - 1] === 1) sq = Math.max(sq, n - p);
    return sq - 1;
};