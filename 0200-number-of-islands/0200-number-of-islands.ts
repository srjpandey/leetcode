function numIslands(grid: string[][]): number {
  function destoryIsland(x: number, y: number): void {
    if (!grid[x] || !grid[x][y] || grid[x][y] === "0") 
      return;
    grid[x][y] = "0";
    destoryIsland(x - 1, y);
    destoryIsland(x + 1, y);
    destoryIsland(x, y - 1);
    destoryIsland(x, y + 1);
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        destoryIsland(i, j);
      }
    }
  }
  return count;
}