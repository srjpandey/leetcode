function canBeValid(s: string, locked: string): boolean {
  if (s.length % 2 !== 0) return false;

  function validate(str: string[], locked: string[], op: string): boolean {
    let balance = 0;

    for (let [i, c] of str.entries()) {
      if (c === op || locked[i] === '0') balance++;
      else balance--;

      if (balance < 0) return false;
    }
    return true;
  }

  let strArr = s.split('');
  let lockedArr = locked.split('');

  return (
    validate(strArr, lockedArr, '(') &&
    validate(strArr.reverse(), lockedArr.reverse(), ')')
  );
}