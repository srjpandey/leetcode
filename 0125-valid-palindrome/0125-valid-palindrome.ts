function isPalindrome(s: string): boolean {

    const stringOnly : string = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()

    let start = 0
    let end   = stringOnly.length-1

    while(start < end){

            if(stringOnly[start] !== stringOnly[end] ){
                return false
            }

            start++
            end--
    }

    return true


    
};