function canVisitAllRooms(rooms: number[][]): boolean {
    let stack: number[] = [0];
    let visited = new Set();

    while(stack.length){
        let curr = stack.pop()!;
        if(visited.has(curr)) continue;

        stack.push(...rooms[curr]);

        visited.add(curr)
    }

    return visited.size === rooms.length;
};