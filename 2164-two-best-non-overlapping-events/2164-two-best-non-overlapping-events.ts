
function findNextAvailableEventIndex(i: number, events: number[][]) {
    const n = events.length;

    const endTime = events[i][1];
    let left = i + 1, right = n - 1;
    let result = n;

    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;

        if (events[mid][0] > endTime) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

function maxTwoEvents(events: number[][]): number {
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2])

    const cache = new Map<string, number>();

    function pickNextEvent(eventIndex: number, picksLeft: number): number {
        if (eventIndex === events.length || picksLeft === 0) {
            return 0;
        }

        const key = `${eventIndex}:${picksLeft}`;

        if (cache.has(key)) {
            return cache.get(key);
        }

        const value = events[eventIndex][2];
        const nextEventIndex = findNextAvailableEventIndex(eventIndex, events);

        const result = Math.max(
            value + pickNextEvent(nextEventIndex, picksLeft - 1), // Pick this event
            pickNextEvent(eventIndex + 1, picksLeft), // Pick a future event
        );

        cache.set(key, result);

        return result;
    }

    return pickNextEvent(0, 2);
};