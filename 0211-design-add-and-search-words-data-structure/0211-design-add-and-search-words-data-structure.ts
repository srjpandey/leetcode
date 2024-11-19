class TrieNode {
    children: Map<string, TrieNode>
    endOfWord: boolean

    constructor() {
        // Map to store children nodes with character keys
        this.children = new Map<string, TrieNode>();
        // Flag to indicate if the current node marks the end of a word
        this.endOfWord = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        // Initialize the trie with an empty root node
        this.root = new TrieNode();
    }

    // Function to add a word to the trie
    addWord(word: string): void {
        let current: TrieNode = this.root;
        
        // Traverse the trie, adding nodes for each character in the word
        for (let char of word) {
            if (!current.children.has(char)) {
                // If the character is not already a child, create a new node
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }

        // Mark the end of the word in the trie
        current.endOfWord = true;
    }

    // Function to search for a word in the trie
    search(word: string): boolean {
        // DFS function to perform a depth-first search in the trie
        function DFS(charCount: number, node: TrieNode) : boolean{
             let current: TrieNode = node;

            // Iterate through the characters in the word
            for (let i = charCount; i < word.length; i++) {
                let char : string = word[i];

                if (char === ".") {
                    // If the character is a wildcard '.', explore all children
                    for (let [key, value] of current.children) {
                        if (DFS(i + 1, value)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    // If the character is not '.', follow the corresponding child
                    if (!current.children.has(char)) {
                        return false;
                    }
                    current = current.children.get(char);
                }
            }

            // Return true if the end of a word is reached
            return current.endOfWord;
        }

        // Start DFS from the root
        return DFS(0, this.root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// Time complexity:
// The time complexity for adding a word to the trie is O(L), where L is the length of the word.
// The time complexity for searching a word in the trie is O(N * M), where N is the number of words in the trie
// and M is the length of the word being searched. The presence of wildcard '.' requires exploring all possible
// children, leading to a potentially higher time complexity.