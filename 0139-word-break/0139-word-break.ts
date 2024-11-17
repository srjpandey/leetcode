function wordBreak(s: string, wordDict: string[]): boolean {
    const wordSet = new Set(wordDict); // Convert list to set for O(1) lookups
    const dp = Array(s.length + 1).fill(false); // DP array to store results
    dp[0] = true; // Base case: empty string can always be segmented

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // No need to check further if we already found a valid segmentation
            }
        }
    }

    return dp[s.length]; // The result for the entire string
}