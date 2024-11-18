function maxPoints(points: number[][]): number {
    if (points.length <= 2) return points.length;
    let max = 2;
    for (let i = 0; i < points.length - 1; i++) {
        const map = new Map<number, number>();
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) continue;
            let a = points[i][0] != points[j][0] ? (points[i][1] - points[j][1]) / (points[i][0] - points[j][0]): Infinity;
            map.set(a, (map.get(a) || 0) + 1);
            max = Math.max(max, 1 + map.get(a));
        }
    }
    return max;
}