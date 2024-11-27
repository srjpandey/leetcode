/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    let adjList = {};
    let reverseRoads = 0;
    let visited = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }

    // Step 1: Build a bidirectional graph
    for (let [a, b] of connections) {
        // Store forward and reverse roads
        adjList[a].push([b, 1]); // road goes from a to b, so 1 means road is directed away from 0
        adjList[b].push([a, 0]); // road goes from b to a (reverse connection), 0 means road is directed towards 0

    }

    // Step 2: DFS Traversal
    let dfs = (node) => {
        visited[node] = true;

        for (let [neighbor, isReversed] of adjList[node]) {
            if (!visited[neighbor]) {
                reverseRoads += isReversed;  // Count if the road is directed away from city 0
                dfs(neighbor);
            }
        }
    }

    // Step 3: Start DFS from city 0
    dfs(0);

    return reverseRoads;
};  