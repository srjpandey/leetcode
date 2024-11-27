function longestCommonSubsequence(text1: string, text2: string): number {
    let dp = Array(text1.length + 1).fill(0);
    for(let j = text2.length - 1; j >= 0; j--) {
        const curr = Array(text1.length + 1).fill(0);
        for(let i = text1.length - 1; i >=0; i--) {
            if(text1[i] === text2[j]) {
                curr[i] = 1 + dp[i + 1];
            } else {
                curr[i] = Math.max(curr[i + 1], dp[i]);
            }
        }
        dp = curr;
    }

    return dp[0];
};