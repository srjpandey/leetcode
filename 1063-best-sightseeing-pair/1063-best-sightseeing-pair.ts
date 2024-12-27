function maxScoreSightseeingPair(values: number[]): number {
    let maxScore = 0;
    let maxPrevValue = values[0]; // Keeps track of max values[i] + i seen so far

    for (let j = 1; j < values.length; j++) {
        // Calculate the score for the pair (i, j)
        maxScore = Math.max(maxScore, maxPrevValue + values[j] - j);

        // Update maxPrevValue for the next iteration
        maxPrevValue = Math.max(maxPrevValue, values[j] + j);
    }

    return maxScore;
}