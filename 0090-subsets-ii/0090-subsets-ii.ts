function subsetsWithDup(nums: number[]): number[][] {
  const powerSet: number[][] = [];
  nums.sort((a, b) => a - b);

  const build = (start: number, currSet: number[]) => {
    powerSet.push([...currSet]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      currSet.push(nums[i]);
      build(i + 1, currSet);
      currSet.pop();
    }
  };
  build(/* start= */ 0, /* currSet= */ []);

  return powerSet;
}