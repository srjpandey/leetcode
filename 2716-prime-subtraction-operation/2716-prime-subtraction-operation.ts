function primeSubOperation(nums: number[]): boolean {

    //check sorted or not
    let curr: number = 0;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] <= nums[curr]) break
        curr++
    }
    if (curr + 1 == nums.length) return true

    //set primes
    let primes: number[] = [2]
    for (let i: number = 3; i <= Math.max(...nums); i += 2) {
        let addPrimes: boolean = true
        for (let j: number = 0; j < primes.length; j++) {
            if (i % primes[j] == 0) {
                addPrimes = false
                break
            }
        }
        if (addPrimes) primes.push(i)
    }

    //subtract prime
    for (let i: number = 0; i < nums.length - 1; i++) {
        let temp: number = nums[i]
        for (let j: number = 0; j < primes.length; j++) {
            if (nums[i] - primes[j] < temp) {
                if (primes[j] >= nums[i]) break
                if (i > 0 && nums[i] - primes[j] <= nums[i - 1]) break
                temp = nums[i] - primes[j]
            }
        }
        nums[i] = temp
        
        if (nums[i] >= nums[i + 1]) return false
    }

    return true
};