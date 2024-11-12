function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length

    // if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0

    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (obstacleGrid[i][j] == 1) {
    //             obstacleGrid[i][j] = -1
    //         }
    //         else
    //             if (i == 0 || j == 0) {
    //                 obstacleGrid[i][j] = 1
    //             }
    //             else
    //                 obstacleGrid[i][j] = (obstacleGrid[i - 1][j] > -1 ? obstacleGrid[i - 1][j] : 0) + (obstacleGrid[i][j - 1] > -1 ? obstacleGrid[i][j - 1] : 0)
    //     }
    // }

    // return obstacleGrid[m - 1][n - 1]

    let memo = Array(m).fill(0).map(() => Array(n).fill(0))

    return sumPossiblePaths(m - 1, n - 1, obstacleGrid, memo)
};

const sumPossiblePaths = (row: number, column: number, obstacleGrid: number[][], memo: number[][]): number => {
    // console.log(`row: ${row}; column: ${column}; isObstacle: ${obstacleGrid[row][column] === 1}; memo: ${memo[row][column]}`)
    if (obstacleGrid[row][column] === 1) {
        memo[row][column] = 0;
        return memo[row][column]
    }
    if (row === 0 && column === 0) { return 1 }

    let leftWay = 0
    let topWay = 0

    if (row > 0) {
        if (!memo[row - 1][column]) {
            memo[row - 1][column] = sumPossiblePaths(row - 1, column, obstacleGrid, memo)
        }
        topWay = memo[row - 1][column]
    }
    if (column > 0) {
        if (!memo[row][column - 1]) {
            memo[row][column - 1] = sumPossiblePaths(row, column - 1, obstacleGrid, memo)
        }
        leftWay = memo[row][column - 1]
    }

    memo[row][column] = leftWay + topWay

    return memo[row][column]
}