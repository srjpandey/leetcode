function canConstruct(ransomNote: string, magazine: string): boolean {
    for(const char of magazine){
        ransomNote = ransomNote.replace(char, "");
    }
    if(!ransomNote) return true;
    else return false;
};