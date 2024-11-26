function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = []
    const ans: number[] = Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];

        while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
            const j = stack.pop();
            ans[j] = i - j;
        }

        stack.push(i)
    }

    return ans;
};