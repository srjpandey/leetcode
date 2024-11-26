function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort();
    let l = 0, r = products.length - 1;
    let result: string[][] = [];

    for (let i = 0; i < searchWord.length; i++) {
        let search = searchWord[i];

        while (l <= r && (products[l].length <= i || products[l][i] !== search)) {
            l += 1;
        }
        while (l <= r && (products[r].length <= i || products[r][i] !== search)) {
            r -= 1;
        }

        let wordsLeft = r - l + 1;
        if (wordsLeft >= 3) {
            result.push(products.slice(l, l + 3));
        } else if (wordsLeft === 2) {
            result.push(products.slice(l, l + 2));
        } else if (wordsLeft === 1) {
            result.push([products[l]]);
        } else {
            result.push([]);
        }
    }

    return result;
}