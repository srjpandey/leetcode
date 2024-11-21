const GUARDED = -1;
const UNGUARDED = 0;
const WALL = 1;
const GUARD = 2;

function countUnguarded(
    m: number, 
    n: number, 
    guards: number[][], 
    walls: number[][]
): number {
    const grid: number[][] = new Array(m);
    for (let y = 0; y < m; ++y) {
        grid[y] = new Array(n).fill(UNGUARDED);
    }

    for (const [y, x] of walls) {
        grid[y][x] = WALL;
    }

    for (const [y, x] of guards) {
        grid[y][x] = GUARD;
    }

    for (const [y, x] of guards) {
        for (let y2 = y - 1; y2 >= 0 && grid[y2][x] <= 0; --y2) {
            grid[y2][x] = GUARDED;
        }
        for (let x2 = x - 1; x2 >= 0 && grid[y][x2] <= 0; --x2) {
            grid[y][x2] = GUARDED;
        }
        for (let x2 = x + 1; x2 < n && grid[y][x2] <= 0; ++x2) {
            grid[y][x2] = GUARDED;
        }
        for (let y2 = y + 1; y2 < m && grid[y2][x] <= 0; ++y2) {
            grid[y2][x] = GUARDED;
        }
    }

    let count = 0;
    for (let y = 0; y < m; ++y) {
        for (let x = 0; x < n; ++x) {
            count += +(grid[y][x] == UNGUARDED);
        }
    }

    return count;
};