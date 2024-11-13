function grayCode(n: number): number[] {

    // generate 2^n codes for bit length n using less shift a << b ( a * (2**b));
    const codeLength: number = 1 << n;

    // initialize result as empty arry
    let result: number[] = [];

    // run for loop from 0 to codeLength
    for (let i = 0; i < codeLength; i++) {

        // generate gray code from 0 and toggle 1 bit on each iteration using right shift (i >> 1)
        let code:number = i ^ (i >> 1);

        // push the gray code in result
        result.push(code);
    }

    // return final array result
    return result;
};