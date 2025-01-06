function minOperations(boxes: string): number[] {
  const answers: number[] = Array(boxes.length).fill(0);

  let left = 0;
  let right = 0;

  let x = 0;
  let y = 0;

  for (let j = boxes.length - 1; j > 0; j--) {
    if (boxes[j] === "1") {
      y++;
    }

    right += y;
  }

  answers[0] = right;

  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i - 1] === "1") {
      x++;
    }

    left += x;
    right -= y;

    if (boxes[i] === "1") {
      y--;
    }

    answers[i] = left + right;
  }

  return answers;
}