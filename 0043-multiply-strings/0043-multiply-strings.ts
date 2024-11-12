function multiply(num1: string, num2: string): string {
    if(num1 == '0' || num2 == '0') return '0';
    return karatsuba(num1, num2).replace(/^0+/, '');//remove leading zeroes
}

function karatsuba(num1: string, num2: string): string {
    //end of recursion: count of digits where we switch to elemetary math multiplication.
    if((num1.length <= 10) || (num2.length <= 10)){ 
        return elemetaryMathMultiply(num1, num2);
    }
    const n = (num1.length > num2.length) ? num2.length : num1.length;
    const m = Math.round(n / 2);
    const a = num1.substring(0, num1.length - m);
    const b = num1.substring(num1.length - m, num1.length);
    const c = num2.substring(0, num2.length - m); 
    const d = num2.substring(num2.length - m, num2.length);
    //Karatsuba magic starts here
    const z0 = karatsuba(b, d);
    const z1 = karatsuba(sum(a, b), sum(c, d));
    const z2 = karatsuba(a, c);
    return sum(sum(z2 + '0'.repeat(2 * m), subtract(subtract(z1, z2), z0) + '0'.repeat(m)), z0);
}

function elemetaryMathMultiply(num1: string, num2: string): string {
    if(num1 == '0' || num2 == '0') return '0';
    let result = '0';
    for(let i = num1.length - 1; i >= 0; i--){
        let term = '';
        let extraDigit = 0;
        for(let j = num2.length - 1; j>= 0; j--){
            let multiply = (+num1[i] * +num2[j] + extraDigit);
            term = (multiply % 10) + term;
            extraDigit = Math.floor(multiply / 10);
        }
        if(extraDigit) term = extraDigit + term;
        term += '0'.repeat(num1.length - 1 - i);
        result = sum(result, term)
    }
    return result;
};

function sum(num1: string, num2: string): string {
    let result = '';
    let extraOne = 0;
    for(let i1 = num1.length - 1, i2 = num2.length - 1; i1 >= 0 || i2 >= 0; i1--, i2--){
        let digit1 = i1 >= 0 ? +num1[i1] : 0;
        let digit2 = i2 >= 0 ? +num2[i2] : 0;
        let sum = digit1 + digit2 + extraOne;
        result = sum % 10 + result;
        extraOne = Math.floor(sum / 10);
    }
    if(extraOne) result = extraOne + result;
    return result;
}

function subtract(num1: string, num2: string): string {
    let result = '';
    let extraOne = 0;
    for(let i1 = num1.length - 1, i2 = num2.length - 1; i1 >= 0 || i2 >= 0; i1--, i2--){
        let digit1 = i1 >= 0 ? +num1[i1] : 0;
        let digit2 = i2 >= 0 ? +num2[i2] : 0;
        let diff = digit1 - digit2 - extraOne;
        result = (diff + 10) % 10 + result;
        extraOne = diff < 0 ? 1 : 0;
    }
    if(extraOne) result = extraOne + result;
    return result;
}