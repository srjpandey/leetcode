function insert(intervals: number[][], newInterval: number[]): number[][] {
    // Initialize an output container
    const output: number[][] = [];

    // Iterate through all intervals
    for(let i = 0; i < intervals.length; i++) {
        // If the new interval ends before the current interval
        // - Append the new interval to the output
        // - Append the rest of the remaining intervals to the output
        // - Return the output
        if (newInterval[1] < intervals[i][0]) {
            output.push(newInterval);
            intervals.slice(i).forEach(interval => output.push(interval));
            return output;
        }

        // If the new interval begins after the current interval
        // - Append the current interval to the output
        else if (newInterval[0] > intervals[i][1])
            output.push(intervals[i])

        // If the new interval overlaps with the current interval
        // merge intervals to create a new interval where
        // - Interval begins at the earliest of beginnings
        // - Interval ends at the latest of ends
        //
        // ! Do not add the new interval to the output just yet!
        // ! Further merging may be required
        else
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ];
    }

    // Add the new interval to the output if not added already
    // ! No need for conditions as we would not reach this point otherwise
    output.push(newInterval);

    // Return the final output
    return output;
};