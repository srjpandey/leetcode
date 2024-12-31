function mincostTickets(days: number[], costs: number[]): number {
    const n = days.length
    const dp = Array(days[n-1] + 1).fill(0)
    const tickets = [
        [1, costs[0]],
        [7, costs[1]],
        [30, costs[2]],
    ]

    let currDay = 1
    let dayIdx = 0

    while(currDay <= days[n-1]) {
        if(currDay === days[dayIdx]) {
            let currMin = 10000000000000000000
            for(const ticket of tickets) {
                currMin = Math.min(currMin, ticket[1] + dp[currDay - ticket[0] >=0 ? currDay - ticket[0] : 0])
            }
            dp[currDay] = currMin
            dayIdx += 1

        } else {
            dp[currDay] = dp[currDay - 1] 
        }

        currDay += 1
    }

    return dp[days[n-1]]
};



// 1 5 6 7 8 9