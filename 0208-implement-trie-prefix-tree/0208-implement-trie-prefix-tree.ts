// maps internally store values as a hash table
// map.has O(1) searching
// map.get O(1) searching
// map.set O(1) addition

// Trie complexity for this implementation
// insert: O(n) where n is the number of characters of the inserted word
// serach: O(n) where n is the number of characters of the searched word
// startsWith: O(n) where n is the number of characters of the desired word

class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;
    }
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEnd = true;
    }

    search(word: string): boolean {
        let currentNode = this.root;
        for (const char of word) {
            if (currentNode.children.has(char))
                currentNode = currentNode.children.get(char)!
            else
                return false;
        }
        return currentNode.isEnd;
    }

    startsWith(prefix: string): boolean {
        let currentNode = this.root;
        for (const char of prefix) {
            if (currentNode.children.has(char))
                currentNode = currentNode.children.get(char)!
            else
                return false;
        }
        return true;
    }
}