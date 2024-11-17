function partition(s: string): string[][] {
    const result: string[][] = [];
    
    function backtrack(start: number, path: string[]): void {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const currentSub = s.substring(start, end);
            if (isPalindrome(currentSub)) {
                path.push(currentSub);
                backtrack(end, path);
                path.pop();
            }
        }
    }

    function isPalindrome(sub: string): boolean {
        let left = 0, right = sub.length - 1;
        while (left < right) {
            if (sub[left] !== sub[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    backtrack(0, []);
    return result;
}