function reverse(x: number): number {
    const lowerLimt: number = Math.pow(-2, 31);
    const upperLimit: number = Math.pow(2, 31) - 1;
    let isNegative: boolean = x < 0;

    if (isNegative) {
        x = Math.abs(x);
    }

    // convert to string
    let str: string = x.toString();

    // convert to array, reverse it then join it back to a string
    let reversedNumString: string = str.split('').reverse().join('');

    // convert to number
    let bigNum: number = isNegative ? +reversedNumString * -1 : +reversedNumString;

    // check bounds & return
    return bigNum < lowerLimt || bigNum > upperLimit ? 0 : bigNum;
};