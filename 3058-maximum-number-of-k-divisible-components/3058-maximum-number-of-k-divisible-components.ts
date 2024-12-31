function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
    let comp = 0;

    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visited: boolean[] = new Array(n).fill(false);

    const DFS = (u: number): number => {
        visited[u] = true;
        let sum = 0;

        for (const v of adj[u]) {
            if (!visited[v]) {
                const vSum = DFS(v);
                if (vSum % k === 0) {
                    comp++;
                } else {
                    sum += vSum;
                }
            }
        }

        sum += values[u];
        return sum;
    };

    const totalSum = DFS(0);
    if (totalSum % k === 0) {
        comp++;
    }

    return comp;
}