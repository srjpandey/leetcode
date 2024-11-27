function findCircleNum(isConnected: number[][]): number {
    const totalLength: number = isConnected.length;
    let totalCount = 0;
    const visited = new Set();
    for(let i=0; i<totalLength;i++){
        if(visited.has(i)) continue;
        visited.add(i);
        totalCount++;
        const stack = [i];
        while (stack.length) {
            const start = stack.pop();
            for (let j=0;j<totalLength;j++) {
                if(isConnected[start][j] && !visited.has(j)){
                    visited.add(j);
                    stack.push(j);
                }
            }
        }
    }
    return totalCount;
};