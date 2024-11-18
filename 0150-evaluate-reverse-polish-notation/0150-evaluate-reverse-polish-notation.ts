function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (!isNaN(Number(token))) {
            // Push the number onto the stack
            stack.push(Number(token));
        } else {
            // Pop the top two elements for the operation
            const b = stack.pop()!;
            const a = stack.pop()!;
            
            // Perform the operation based on the operator
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(Math.trunc(a / b)); // Integer division truncates towards zero
                    break;
            }
        }
    }

    // The result will be the last item in the stack
    return stack[0];
}

// Example Usage
const tokens1 = ["2", "1", "+", "3", "*"];
const tokens2 = ["4", "13", "5", "/", "+"];
const tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

console.log(evalRPN(tokens1)); // Output: 9
console.log(evalRPN(tokens2)); // Output: 6
console.log(evalRPN(tokens3)); // Output: 22
