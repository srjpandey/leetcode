/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const rows = board.length;
    const columns = board[0].length;

    function dfs(r: number, c: number) {
        if (
            r < 0 ||
            c < 0 ||
            r > rows - 1 ||
            c > columns - 1 ||
            board[r][c] === 'X' ||
            board[r][c] === 'S'
        ) {
            return;
        }

        board[r][c] = 'S'; // 'save' a cell by flipping it to an 'S'

        dfs(r, c - 1);
        dfs(r, c + 1);
        dfs(r - 1, c);
        dfs(r + 1, c);
    }

    // 1. "Save" all regions that are adjacent to the border
    // top border
    for (let c = 0; c < columns; c++) {
        if (board[0][c] === 'O') {
            dfs(0, c);
        }
    }

    // bottom border
    for (let c = 0; c < columns; c++) {
        if (board[rows - 1][c] === 'O') {
            dfs(rows - 1, c);
        }
    }

    // left border
    for (let r = 0; r < rows; r++) {
        if (board[r][0] === 'O') {
            dfs(r, 0)
        }
    }
    // right border
    for (let r = 0; r < rows; r++) {
        if (board[r][columns - 1] === 'O') {
            dfs(r, columns - 1)
        }
    }

    // 2. now iterate through all cells and convert all 'S' cells to 'O'
    // and everything else flips to 'X'
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            } else if (board[i][j] === 'S') {
                board[i][j] = 'O'
            }
        }
    }
}; 