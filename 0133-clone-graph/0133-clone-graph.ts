const cloned = new Map<Node, Node>();

function cloneGraph(node: Node | null): Node | null {
	if (!node) {
		return null;
	}

	if (cloned.has(node)) {
		return cloned.get(node)!;
	}

	const newNode = new Node(node.val);
	cloned.set(node, newNode);
	newNode.neighbors = node.neighbors.map((neighbor) => cloneGraph(neighbor)!);
                                           
	return newNode;
}