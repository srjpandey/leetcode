function isIsomorphic(s: string, t: string): boolean {

    const mp1 = {}, alreadyMapped = {};

    for(let i=0;i<s.length;i++){
        
        // if there is no mapping of s[i] and t[i] is also not yet mapped to any previous character, 
        // then create a mapping for s[i] and mark t[i] as "alreadyMapped"
        if(!mp1[s[i]] && !alreadyMapped[t[i]]){
            mp1[s[i]] = t[i];
            alreadyMapped[t[i]] = true;
        }

        // if mapping of s[i] does not exist OR the mapping of s[i] is not equal to t[i], then return false
        if(!mp1[s[i]] || mp1[s[i]]!==t[i]){
            return false;
        }
    }

    return true;
};