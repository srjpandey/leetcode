function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const mapRows = new Map<string, number>();
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const target = grid[i].join('-');
    const count = mapRows.get(target) ?? 0;
    mapRows.set(target, count + 1);
  }

  for (let i = 0; i < n; i++) {
    const currentCol = Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      currentCol[j] = grid[j][i];
    }
    const target = currentCol.join('-');
    const count = mapRows.get(target) ?? 0;
    ans += count;
  }

  return ans;
};