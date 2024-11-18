function wordPattern(pattern: string, s: string): boolean {
    const arrP: string[] = pattern.split('');
    const arrS: string[] = s.split(' ');

    if(arrP.length !== arrS.length) return false;

    const pToMap: Map<string, string> = new Map();
    const sToMap: Map<string, string> = new Map();

    for(let i = 0; i < pattern.length; i++){
        if(
            pToMap.has(arrP[i]) && pToMap.get(arrP[i]) !== arrS[i] ||
            sToMap.has(arrS[i]) && sToMap.get(arrS[i]) !== arrP[i] 
        ) return false;

        pToMap.set(arrP[i], arrS[i]);
        sToMap.set(arrS[i], arrP[i]);
    }

    return true;
};