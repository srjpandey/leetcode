function climbStairs(n: number): number {

    if(n === 1) return 1;
    if(n === 2) return 2;

    let oneStepBefore = 2;
    let twoStepsBefore = 1;
    let allWays = 0;

    // Iterate from the third step to the last step
    for (let i = 3; i <= n; i++) {
        allWays = oneStepBefore + twoStepsBefore;  // Current step ways
        twoStepsBefore = oneStepBefore;  // Move to next step
        oneStepBefore = allWays;         // Move to next step
    }

    return allWays;
    
};