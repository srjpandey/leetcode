function combinationSum3(k: number, n: number, start: number = 1): number[][] {
  // these two if() cannot change their sequence
  if (k === 1) return n <= 9 ? [[n]] : [];
  if (start * k >= n) return [];

  return combinationSum3(k - 1, n - start, start + 1)
    .map(arr => [start, ...arr])
    .concat(combinationSum3(k, n, start + 1))
}
// In fact, there are just 3 Lines Lol