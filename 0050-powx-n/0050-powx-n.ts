function myPow(x: number, n: number): number {

    if(n === 0) return 1;

    let neg = n < 0;
    n = Math.abs(n);
    let r = n % 2;
    console.log("R : ", r);
    let i = 0;
    let ans = 1;

    while(n > 0) {
        n = n>>>1;
        i = i + 1;
        console.log('n after shift : ', n);
        if(n % 2) {
            console.log('multiplying ', ans, ' by : ', (x ** (2 ** i)));
            ans = ans * (x ** (2 ** i));
            console.log('after multiplication , x = ', ans);
        }
    }
    if(r) ans = ans * x;

    return neg ? 1/ans : ans;
};