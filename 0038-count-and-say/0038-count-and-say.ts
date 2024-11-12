function countAndSay(n: number): string {
    let result = '1' // the result of n = 1

    for (let i = 1; i < n; i++) { // enters only n > 1
        let storage = '' // inner storage to give to real one after collecting the result
        let counter = 1 // default count of result[j]

        for (let j = 0; j < result.length; j++) {
            if (result[j] == result[j + 1]) counter++ // if it repeats counter inceases
            else {storage += counter + result[j]; counter = 1} // else we add to storage and setting counter to default
        }

        result = storage // to keep result we giving it back to result
    }

    return result
};