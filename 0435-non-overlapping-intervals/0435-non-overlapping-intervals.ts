function eraseOverlapIntervals(intervals: number[][]): number {
    // If there are no intervals, return 0
    if (intervals.length === 0) {
        return 0;
    }

    // Sort intervals by their end time
    intervals.sort((a, b) => a[1] - b[1]);

    let lastInterval = intervals[0];
    let countForDelete: number = 0;

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];

        // Check if the current interval overlaps with the last interval
        if (interval[0] < lastInterval[1]) {
            // If they overlap, we need to delete one interval
            countForDelete++;
        } else {
            // No overlap, update lastInterval to the current one
            lastInterval = interval;
        }
    }

    return countForDelete;
}