class TrieNode {

    private nodes = new Map<string, TrieNode>();
    word: string | null = null;

    constructor() {

    }

    insert(word: string) {
        let curr = this as TrieNode;
        for (const char of word) {
            if (!curr.nodes.has(char)) {
                curr.nodes.set(char, new TrieNode());
            }
            curr = curr.nodes.get(char);
        }
        curr.word = word;
    }

    hasChar(char: string) {
        return this.nodes.has(char);
    }

    getNode(char: string): TrieNode | null {
        return this.nodes.get(char)
    }
}

function search(m: number, n: number, board: string[][], node: TrieNode, result: string[]) {
    const M = board.length;
    const N = board[0].length;

    if (m < 0 || n < 0 || m >= M || n >= N) return;

    const currChar = board[m][n]
    if (currChar === "#" || !node.hasChar(currChar)) return;

    node = node.getNode(currChar);

    if (node.word) {
        result.push(node.word);
        node.word = null;
    }

    board[m][n] = "#";

    search(m+1, n, board, node, result);
    search(m, n+1, board, node, result);
    search(m, n-1, board, node, result);
    search(m-1, n, board, node, result);

    board[m][n] = currChar;
    
}


function findWords(board: string[][], words: string[]): string[] {

    const root = new TrieNode();

    for (const word of words) {
        root.insert(word);
    }

    const M = board.length;
    const N = board[0].length;
    const result = [];

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            search(i, j, board, root, result)
        }
    }

    return result

};