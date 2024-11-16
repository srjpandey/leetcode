/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    if (root === null) return null;
    const lastValueBylevel: {[key in number]: Node | null} = {};

    const traveling = (leaf: Node, level: number = 0): Node => {
        leaf.next = null; // Default next will always be null

		// Giving the "perfect binary tree" so we only need to check on left OR right
        if (leaf.right) {
            leaf.right = traveling(leaf.right, level+1);
            leaf.left = traveling(leaf.left, level+1);
        }
		// If there are stored value at current level, we will assign it to the next
        if (lastValueBylevel[level] !== undefined) {
            leaf.next = lastValueBylevel[level]
        }
        lastValueBylevel[level] = leaf; // Storing value at current level
        return leaf;
    }

    return traveling(root);
};