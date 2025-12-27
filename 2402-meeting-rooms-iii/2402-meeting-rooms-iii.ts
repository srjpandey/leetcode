function mostBooked(n: number, meetings: number[][]): number {
    meetings.sort((a, b) => a[0] - b[0]);
    const count: number[] = new Array(n).fill(0);
    const freeRoom: number[] = [];
    for (let i = 0; i < n; i++) {
        freeRoom.push(i);
    }
    const used: [number, number][] = [];
    for (const [start, end] of meetings) {
        while (used.length && used[0][0] <= start) {
            const [, room] = used.shift()!;
            freeRoom.push(room);
        }
        freeRoom.sort((a, b) => a - b);
        const dur = end - start;
        let room: number;
        let begin: number;

        if (freeRoom.length) {
            room = freeRoom.shift()!;
            begin = start;
        } else {
            used.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
            const [delay, room2] = used.shift()!;
            room = room2;
            begin = delay;
        }

        count[room]++;
        used.push([begin + dur, room]);
        used.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (count[i] > count[ans] || (count[i] === count[ans] && i < ans)) {
            ans = i;
        }
    }

    return ans;
};