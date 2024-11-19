function maximalSquare(matrix: string[][]): number {
    if (matrix.length === 1) return matrix[0].some((val) => val === "1") ? 1 : 0
    if (matrix[0].length === 1) return matrix.some((val) => val[0] === "1") ? 1 : 0

    let onesToTheLeft = Array(matrix.length).fill(0)
    let findingSquare = 1
    let consecutiveRows
    for (let c = 0; c < matrix[0].length; c++) {
        consecutiveRows = 0
        for (let r = 0; r < matrix.length; r++) {
            if (matrix[r][c] === "1") {
                onesToTheLeft[r]++
                if (onesToTheLeft[r] >= findingSquare) {
                    consecutiveRows++
                    if (consecutiveRows >= findingSquare) {
                        findingSquare++
                        consecutiveRows = 0
                    }
                } else {
                    consecutiveRows = 0
                }
            } else {
                onesToTheLeft[r] = 0
                consecutiveRows = 0
            }
        }
    }
    return Math.pow(findingSquare - 1, 2)
};