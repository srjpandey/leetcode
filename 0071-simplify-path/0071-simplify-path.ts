function simplifyPath(path: string): string {
    // declare stack
    const stack = [];
    // splith path into array and filter out empty strings
    const arr = path.split('/').filter(Boolean);
    // iterate over that array
    for(let i = 0; i < arr.length; i++) {
        // if element is .. wich means we going up in our path, then we pop from stack
        if(arr[i] === '..') stack.pop()
        // if element is . that means we stay in same directory
        else if(arr[i] === '.') continue
        // anything else we push to stack
        else stack.push(arr[i])
    }
    // join our stack by / and append / at front, return simplified path
    return `/${stack.join('/')}`
};