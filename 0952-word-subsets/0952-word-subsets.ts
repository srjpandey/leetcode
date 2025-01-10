// 1. Brute force
// function isSubString(s1: string, s2: string) {
//     const n = 'a'.charCodeAt(0)
//     const charS1 = Array(26).fill(0)
//     for(const c of s1) {
//         charS1[c.charCodeAt(0)-n] +=1
//     }

//     for(const c of s2) {
//         if(charS1[c.charCodeAt(0)-n] === 0) {
//             return false
//         }
//         charS1[c.charCodeAt(0)-n] -= 1
//     }

//     return true
// }

// function wordSubsets(words1: string[], words2: string[]): string[] {
//     words2.sort((a, b) => b.length - a.length)
//     console.log(words2)
//     const res = []
//     for(const word1 of words1) {
//         let flag = true
//         for(const word2 of words2) {
//             if(!isSubString(word1, word2)) {
//                 flag = false
//                 break
//             }
//         }

//         if(flag) {
//             res.push(word1)
//         }
//     }

//     return res
// };



// 2. Counting characters
function wordSubsets(words1: string[], words2: string[]): string[] {
    const aIndex = 'a'.charCodeAt(0)
    const s2Count = Array(26).fill(0)

    // Count max number of all character in words2
    for(const word2 of words2) {
        const count = Array(26).fill(0)
        for(const c of word2) {
            const currIndex = c.charCodeAt(0) - aIndex
            count[currIndex] +=1
            s2Count[currIndex] = Math.max(s2Count[currIndex], count[currIndex])
        }
    }

    // Check each words1 and count character => all characters counting number need to >= max count in words2
    const res = []
    for(const word1 of words1) {
        // count character
        const s1Count = Array(26).fill(0)
        for(const c of word1) {
            s1Count[c.charCodeAt(0)-aIndex] += 1
        }

        // checking >= in s2
        let flag = true
        for(let i = 0; i<26; i+=1) {
            if(s1Count[i] < s2Count[i]) {
                flag = false
                break
            }
        }

        // add to result
        if(flag) {
            res.push(word1)
        }
    }
    return res
};