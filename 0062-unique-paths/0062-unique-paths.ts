function uniquePaths(m: number, n: number): number {
    let memo = Array(m).fill(0).map(() => Array(n).fill(0))

    return sumPossiblePaths(m - 1, n - 1, memo)
};


const sumPossiblePaths = (row: number, column: number, memo: number[][] = []): number => {
    if (row === 0 && column === 0) {
        return 1
    }
    
    let leftWay = 0
    let topWay = 0

    if (row > 0) {
        if (!memo[row - 1][column]) {
            memo[row - 1][column] = sumPossiblePaths(row - 1, column, memo)
        }
        topWay = memo[row - 1][column]
    }
    if (column > 0) {
        if (!memo[row][column - 1]) {
            memo[row][column - 1] = sumPossiblePaths(row, column - 1, memo)
        }
        leftWay = memo[row][column - 1]
    }
    memo[row][column] = leftWay + topWay 

    return memo[row][column]
}
