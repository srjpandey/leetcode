function subsets(nums: number[]): number[][] {
    if (!nums.length) return [];
    nums.sort((a, b) => a - b);
    const res: number[][] = [[]];
    let count: number, subRes: number[], preLength: number;
    for (let i = 0; i < nums.length; i++) {
        count = 1;
        while (nums[i + 1] !== undefined && nums[i + 1] === nums[i]) {
            count += 1;
            i++;
        }
        console.log(res);
        preLength = res.length;
        for (let j = 0; j < preLength; j++) {
            subRes = res[j].slice();
            for (let x = 1; x <= count; x++) {
                if (x > 0) subRes.push(nums[i]);
                res.push(subRes.slice());
            }
        }
    }
    return res;
}