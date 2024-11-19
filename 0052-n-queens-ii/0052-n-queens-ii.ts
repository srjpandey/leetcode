function totalNQueens(n: number): number {
    return solve(n, 0, []);
}

function solve(n: number, row: number, queens: number[]): number {
    if (row === n) return 1;

    let solutions = 0;
    for (let i=0; i<n; ++i) {
        let ok = true;
        for (let j=0; j<queens.length; ++j) {
            if (queens[j] === i) ok = false;
            if (row - j === Math.abs(queens[j] - i)) ok = false;
            if (!ok) break;
        }
        if (ok) solutions += solve(n, row + 1, queens.concat([i]));
    }

    return solutions;
}