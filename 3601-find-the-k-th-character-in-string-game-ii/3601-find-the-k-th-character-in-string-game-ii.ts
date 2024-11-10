function kthCharacter(k: number, operations: number[]): string {
    function findShift(k: number){
        if(k == 1) return 0;
        let n = Math.ceil(Math.log2(k));
        return findShift(k - 2 ** (n - 1)) + operations[n - 1];
    }
    return String.fromCharCode('a'.charCodeAt(0) + findShift(k) % 26) ;
};