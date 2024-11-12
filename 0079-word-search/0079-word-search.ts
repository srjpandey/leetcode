function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Directions to explore (right, left, down, up)

  function getCoordinate(x: number, y: number) {
    return `${x}-${y}`; // Generate a unique string representation of a coordinate
  }

  const wordLength = word.length;
  const visited = new Set<string>(); // Keep track of visited cells
  const charFrequencyInBoard = new Map<string, number>(); // Store character frequencies in the board
  const charFrequencyInWord = new Map<string, number>(); // Store character frequencies in the word

  // Pruning: Check if all characters in the word exist in the board with sufficient frequency
  for (const char of word) charFrequencyInWord.set(char, (charFrequencyInWord.get(char) || 0) + 1);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      charFrequencyInBoard.set(board[i][j], (charFrequencyInBoard.get(board[i][j]) || 0) + 1);
    }
  }
  for (const char of word) {
    if (!charFrequencyInBoard.has(char) || charFrequencyInBoard.get(char)! < charFrequencyInWord.get(char)!) return false;
  }

  // Optimization: Start the search with the least frequent character in the word, if first letter is not least then reverse the word.
  let minFrequency = Infinity;
  let minChar = "";
  for (const char of word) {
    if ((charFrequencyInBoard.get(char) || 0) < minFrequency) {
      minFrequency = charFrequencyInBoard.get(char) || 0;
      minChar = char;
    }
  }
  if (word[0] !== minChar) word = word.split('').reverse().join('');

  // DFS function to search for the word
  function dfs(row: number, col: number, visitedCells: Set<string>, searchIndex: number): boolean {
    const coordinate = getCoordinate(row, col);
    if (
      row < 0 || row >= rows || col < 0 || col >= cols || // Out of bounds
      board[row][col] !== word[searchIndex] || // Character mismatch
      visitedCells.has(coordinate) // Visited cell
    ) {
      return false;
    }

    if (searchIndex === wordLength - 1 && board[row][col] === word[searchIndex]) return true; // Found the word

    visitedCells.add(coordinate); // Mark the current cell as visited

    // Explore all neighbors
    for (const [dx, dy] of neighbors) {
      if (dfs(row + dx, col + dy, visitedCells, searchIndex + 1)) return true; // Found the word in one of the paths
    }

    visitedCells.delete(coordinate); // Backtrack and remove the current cell from visited
    return false;
  }

  // Start the search from each cell of the board
  let found = false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        found = dfs(i, j, visited, 0);
      }
      if (found) return true;
    }
  }

  return found;
}