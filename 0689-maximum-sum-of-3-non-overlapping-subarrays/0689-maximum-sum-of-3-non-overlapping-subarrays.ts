function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
    const n = nums.length
    const ksums = []
    let sum = 0
    for (let i = n - 1; i > n - 1 - k; i--) {
        sum += nums[i]
    }
    ksums.push(sum)
    for (let i = n - 1 - k; i >= 0; i--) {
        sum += nums[i]
        sum -= nums[i + k]
        

        ksums.push(sum)
    }
    ksums.reverse()

    let result = []
    let maxSum = 0
    let memo = [...new Array(ksums.length)].map(_ => new Array(4).fill(null))
    const dp = (i, count) => {
        if (count == 0) {
            return [0, []]
        }

        if (i >= ksums.length) {
            return [0, []]
        }

        if (memo[i][count]) {
            return memo[i][count]
        }
        
        const withCurr = dp(i + k, count - 1)
        const withoutCurr = dp(i + 1, count)

        if (withCurr[0] + ksums[i] >= withoutCurr[0]) {
            return memo[i][count] = [withCurr[0] + ksums[i], [i].concat(withCurr[1])]
        } 

        return memo[i][count] = withoutCurr
    }

    const [max, indexes] = dp(0, 3);

    return indexes
};