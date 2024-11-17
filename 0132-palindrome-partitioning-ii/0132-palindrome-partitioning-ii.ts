function minCut(s: string): number {
    const n = s.length;
    const dp: number[] = new Array(n).fill(Infinity);
    const palindrome: boolean[][] = Array.from({ length: n }, () => new Array(n).fill(false));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
        
            if (s[i] === s[j] && (i - j <= 2 || palindrome[j + 1][i - 1])) {
                palindrome[j][i] = true;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (palindrome[0][i]) {          
            dp[i] = 0;
        } else {       
            for (let j = 0; j < i; j++) {
                if (palindrome[j + 1][i]) {
                    dp[i] = Math.min(dp[i], dp[j] + 1);
                }
            }
        }
    }
    return dp[n - 1];
}