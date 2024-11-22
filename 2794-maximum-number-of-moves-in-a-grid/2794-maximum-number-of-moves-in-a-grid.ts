// 5ms. Beats 100% of both.
function maxMoves(grid: number[][]): number {
    const w = grid[0].length;
    const h = grid.length;

    for (let col = 1; col < w; col++) {
        let missed = 0;
        for (let row = 0; row < h; row++) {
            const v = grid[row][col];
            if (!(v > grid[row][col - 1] || 
                  (row > 0 && v > grid[row - 1][col - 1]) || 
                  (row < h - 1 && v > grid[row + 1][col - 1]))) {
                grid[row][col] = Infinity;
                missed += 1;
            }
        }
        if (missed === h) {
            return col - 1;
        }
    }
    return w - 1;
}