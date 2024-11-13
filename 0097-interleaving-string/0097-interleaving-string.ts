function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1.length + s2.length !== s3.length) return false;
    return helper(s1, s2, s3, 0, 0, 0, []);
}

function helper(s1: string, s2: string, s3: string, i1: number, i2: number, i3: number, dp: boolean[]): boolean {
    const hash = i1 * 200 * 200 + i2 * 200 + i3;
    if (dp[hash] !== undefined) return dp[hash];
    if (i3 === s3.length) return dp[hash] = true;
    return dp[hash] =   s1[i1] === s3[i3] && helper(s1, s2, s3, i1 + 1, i2, i3 + 1, dp) ||
                        s2[i2] === s3[i3] && helper(s1, s2, s3, i1, i2 + 1, i3 + 1, dp);
}