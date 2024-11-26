function findChampion(n: number, edges: number[][]): number {
    let champions = Array.from({length: n}).fill(true);
    for(let i = 0; i < edges.length; i ++) {
        champions[edges[i][1]] = false
    }
    let championsIndex = [];
    for(let i = 0; i < n; i++) {
        if(champions[i]) {
            championsIndex.push(i)
        }
    }
    if(championsIndex.length === 1) {
        return championsIndex[0]
    }
    return -1
};