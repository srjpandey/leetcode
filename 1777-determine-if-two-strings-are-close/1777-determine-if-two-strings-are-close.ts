function closeStrings(word1: string, word2: string): boolean {
    // check if two words have equals length, if no return false
    if(word1.length !== word2.length) return false;
    // declare first frequency map
    const map1 = new Map<string, number>();
    // declare second frequency map
    const map2 = new Map<string, number>();
    // iterate ower word length:
    for(let i = 0; i < word1.length; i++) {
        // calculate frequency of first word
        map1.set(word1[i], map1.has(word1[i]) ? map1.get(word1[i]) + 1 : 1)
        // claculate frequency of second word
        map2.set(word2[i], map2.has(word2[i]) ? map2.get(word2[i]) + 1 : 1)
    }
    // declare array for first word
    const arr1 = [];
    // declare array for second word
    const arr2 = [];
    // iterate over first frequency map:
    for( const [key, value] of map1) {
        // if fsecond map don't have first map key, return false
        if(!map2.has(key)) return false;
        // push frequency value from first map to first array
        arr1.push(value)
        // push frequency value from second map to second array
        arr2.push(map2.get(key));
    }
    // sort first array
    arr1.sort()
    // sort second array
    arr2.sort()
    // stringify arrays and check if results are equals, return true if yes, false otherwise
    return arr1.toString() === arr2.toString();
};