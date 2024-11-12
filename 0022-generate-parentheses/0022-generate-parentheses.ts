function generateParenthesis(n: number): string[] {
    /*
        create all possible valid combinations
        at each 
    */
    const allCombos = []

    function recurse(
        openParens: number, closedParens: number, combo: string
    ) {
        if (openParens === 0 && closedParens === 0) {
            allCombos.push(combo)
            return
        }
        
        // if there are open parens to close
        if (openParens < closedParens) {
            recurse(openParens, closedParens - 1, combo + ')')
        }

        // if there are open parens left to use
        if (openParens > 0) {
            recurse(openParens - 1, closedParens, combo + '(')
        }
    }

    recurse(n, n, '')

    return allCombos
}