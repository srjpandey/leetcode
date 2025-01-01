function maxScore(s: string): number {
    // Initialize counters
    let left = 0;
    let right = s.split('').reduce((carry, item) => carry + parseInt(item), 0); // Total ones in the string
    let res = 0; // To store the maximum score

    // Loop through the string up to the second-to-last character
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            left += 1; // Increment zeros in the left substring
        } else {
            right -= 1; // Decrement ones in the right substring
        }
        res = Math.max(left + right, res); // Update the maximum score
    }

    return res; // Return the highest score
}