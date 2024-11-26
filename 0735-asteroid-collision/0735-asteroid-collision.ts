function asteroidCollision(asteroids: number[]): number[] {
    // declare stack
    const stack: number[] = [];
    // iterate over asteroids
    for(let i = 0; i < asteroids.length; i++) {
        // get current asteroid
        let remain = asteroids[i]
        // while stack are not empty and current asteroid fly to left and top asteroid from stack are fly to the right:
        while(stack.length > 0 && remain < 0 && stack[stack.length - 1] > 0) {
            // we get asteroid from stack
            const asteroid = stack.pop()
            // we check if collision will destroy both asteroids
            if((asteroid + remain) === 0) remain = 0;
            // if false we set bigger one as remaing 
            else remain = asteroid + remain > 0 ? asteroid : remain
        }
        // if remaining asteroid are not destroyed i.e. equals 0 then we push it to stack
        if(remain) stack.push(remain)
    }
    // return remaining asteroids
    return stack;
};