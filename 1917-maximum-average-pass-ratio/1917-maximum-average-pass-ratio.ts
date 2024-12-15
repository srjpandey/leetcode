function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const pq = new MaxPriorityQueue({
    priority ([p, t]) {
      const gain = (p + 1) / (t + 1) - p / t;
      return gain;
    }
  });
  
  for (let [p, t] of classes) {
    pq.enqueue([p, t]);
  }
  
  while (extraStudents--) {
    let { element: [p, t] } = pq.dequeue();
    pq.enqueue([p + 1, t + 1]);
  }

  const updatedClasses = pq.toArray();
  const sumRatio = updatedClasses.reduce((acc, { element: [p, t] }) => acc + p / t, 0);
  
  return sumRatio / updatedClasses.length;
}