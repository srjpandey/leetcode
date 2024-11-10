function isValidSudoku(board: string[][]): boolean {
    let countArray = new Array<number>(10).fill(0)
    for (let i = 0; i < 9; i++) {
        let r1 = Math.trunc(i / 3) * 3;
        let c1 = (i % 3) * 3;
        let currElement
        countArray.fill(0)
        for (let j = 0; j < 9; j++) {
            currElement = board[i][j]
            if (currElement == ".") continue
            countArray[currElement]++;
            if (countArray[currElement] > 1) return false
        }
        countArray.fill(0)
        for (let k = 0; k < 9; k++) {
            currElement = board[k][i]
            if (currElement == ".") continue

            countArray[currElement]++;
            if (countArray[currElement] > 1) return false
        }
        countArray.fill(0)
        for (let r = r1; r < r1 + 3; r++) {
            for (let c = c1; c < c1 + 3; c++) {
                currElement = board[r][c]
                if (currElement == ".") continue

                countArray[currElement]++;
                if (countArray[currElement] > 1) return false
            }
        }


    }

    return true
};