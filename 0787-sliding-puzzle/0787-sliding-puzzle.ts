const slidingPuzzle = (board: number[][]): number => {
    const solved = [
      [1, 2, 3],
      [4, 5, 0],
    ].toString();

    const generateMoves = (board: number[][]) => {
        let zero = [-1, -1];
        const copy = JSON.stringify(board);
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === 0) {
                    zero = [i, j];
                    break;
                }
            }
            if (zero[0] !== -1) break;
        }

        const [i, j] = zero;
        const output: number[][][] = [];
        for (let [x, y] of [
            [i + 1, j],
            [i, j + 1],
            [i - 1, j],
            [i, j - 1],
        ]) {
            if (board[x]?.[y] === undefined) continue;
            const newBoard: number[][] = JSON.parse(copy);
            newBoard[i][j] = board[x][y];
            newBoard[x][y] = board[i][j];
            output.push(newBoard);
        }

        return output;
    };

    const visited = new Set<string>();

    let queue: [number[][], number][] = [[board, 0]];
    while (queue.length) {
        const [next, moves] = queue.shift()!;
        const str = next.toString();
        if (visited.has(str)) continue;
        visited.add(str);
        if (str === solved) return moves;

        const nextPositions = generateMoves(next);
        for (const nextBoard of nextPositions) {
            queue.push([nextBoard, moves + 1]);
        }
    }

    return -1;
};