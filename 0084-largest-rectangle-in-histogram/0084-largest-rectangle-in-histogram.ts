function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[index]) {
            stack.push(index++);
        } else {
            const topOfStack = stack.pop()!;
            const height = heights[topOfStack];
            const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    while (stack.length > 0) {
        const topOfStack = stack.pop()!;
        const height = heights[topOfStack];
        const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}