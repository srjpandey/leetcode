function minFlips(a: number, b: number, c: number): number {
    let flips =0;
    let posFlips = ((a|b)^c)&c;
    let aNegFlips = (a^c)&(~c);
    let bNegFlips = (b^c)&(~c);
    while (posFlips!==0 || aNegFlips!==0 || bNegFlips!==0) {
        flips+=posFlips&1;
        flips+=aNegFlips&1;
        flips+=bNegFlips&1;
        posFlips>>=1;
        aNegFlips>>=1;
        bNegFlips>>=1;
    }
    return flips;
    // let flips = 0;
    // while (a!==0 || b!==0 || c!==0) {
    //     let aBit = a&1;
    //     let bBit = b&1;
    //     let cBit = c&1;
    //     flips+=((aBit|bBit)^cBit)&cBit;
    //     flips+=(aBit^cBit)&(~cBit);
    //     flips+=(bBit^cBit)&(~cBit);
    //     a>>=1;
    //     b>>=1;
    //     c>>=1;
    // }
    // return flips;
};