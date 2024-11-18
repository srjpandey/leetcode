function calculate(s: string): number {
    const stack: [number, number][] = [];

    let num: number = 0;
    let sign: number = 1;

    for (let i = 0; i < s.length; i++) {
        const char: string = s[i];

        if (char === ' ') continue;

        if (char === '(') {
            stack.push([num, sign]);
            num = 0;
            sign = 1;
            continue;
        }

        if (char === ')') {
            const [num2, sign2] = stack.pop();

            num = num2 + sign2 * num;
            sign = 1;
            continue;
        }

        if (isDigit(char)) {
            let num2: string = '';

            while(i < s.length && isDigit(s[i])) {
                num2 += s[i];
                i++;
            }

            num = num + sign * +num2;
            sign = 1; 
            i--;
            continue;
        }

        if (char === '-') sign = -1;
    }

    return num;
};

function isDigit(str: string): boolean {
    return !isNaN(Number(str)) && str.trim() !== '';
}