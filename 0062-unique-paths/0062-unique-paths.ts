function uniquePaths(m: number, n: number): number {
    const grid = [];
    for(let i = 0; i < m; i++) {
        grid[i] = [];
        for(let j = 0; j < n; j++) {
            grid[i][j] = 1;
        }
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            grid[i][j] = grid[i-1][j] + grid[i][j-1];
        }
    }
    return grid[m-1][n-1];   
};