function isHappy(n: number): boolean {
    // Hashmap for visited numbers
    let visited = {};
    
    // We want to proceed until we reach 1
    while (n !== 1) {
        // Split number into array, e.g: 35 becomes ['3', '5'];
        let numberToStrArray = String(n).split('');
        let sum = 0;

        for (let i = 0; i < numberToStrArray.length; i++) {
            // CurrNum = e.g: 3, 5
            const currNum = Number(numberToStrArray[i]);
            // Square curr num e.g: 3^2 = 9, 5^2 = 25
            let numSquared = Math.pow(currNum, 2);

            // Add to sum, eg 9 + 25 = 34
            sum += numSquared;
        }
        // If sum (e.g: 34) is in our visited set, we're in a loop, so it's unhappy/false
        if (visited[sum] === true) {
            return false;
        }
        // Set visited[sum] eg: visited[34] to true
        visited[sum] = true;
        // N = 34, repeat until we reach 1 or find unhappy
        n = sum;
    }

    // Number is now 1/happy, so we return true
    return true;
};