function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  let totalCustomer = 0;

  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) totalCustomer += customers[i];
  }

  let maxTotal = totalCustomer;
  let start = 0,
    winGrumSum = 0;

  for (let end = 0; end < customers.length; end++) {
    if (grumpy[end] == 1) winGrumSum += customers[end];

    if (end >= minutes - 1) {
      maxTotal = Math.max(maxTotal, totalCustomer + winGrumSum);

      if (grumpy[start] == 1) winGrumSum -= customers[start];
      start++;
    }
  }

  return maxTotal;
}