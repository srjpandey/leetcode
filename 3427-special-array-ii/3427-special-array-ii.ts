function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  //push the 0th index as it is always special
  let map: Record<number, number> = {};
  let subarray = 1;
  map[0] = subarray;

  let last = nums[0] % 2;
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i] % 2;
    //at this point the last special subarray ends and a new one starts
    if (last == current) {
      subarray++; //strong the starting index of the special subarrays in nums
    }

    map[i] = subarray;

    last = current;
  }

  let result = [];
  for (let query of queries) {
    let [from, to] = query;
    //so if we find it is the mixture of 2 special subarrays then it is not special
    result.push(map[from] === map[to]);
  }
  return result;
}