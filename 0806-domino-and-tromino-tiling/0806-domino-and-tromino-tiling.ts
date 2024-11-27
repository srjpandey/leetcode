function numTilings(n: number): number {
  const mod = 10 ** 9 + 7;
  const dp: number[] = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % mod;
  }
  return dp[n];
};