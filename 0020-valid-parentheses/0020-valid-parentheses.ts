function isValid(s: string): boolean {

    const stack : string[] = [];
    const bracketMap = {

         ')': '(',
        '}' : '{',
        ']' : '['
    }

    for(let char of s){
        if(char === '(' || char === '{' || char ==='[' ){
            stack.push(char)
        } else {

            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    
    };
    
    return stack.length ===0;
}