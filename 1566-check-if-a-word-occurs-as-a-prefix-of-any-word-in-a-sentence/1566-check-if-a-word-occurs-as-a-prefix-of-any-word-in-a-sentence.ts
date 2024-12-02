/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(" ");
    let i = 0; // pointer to each word in sentence

    while(i < sentence.length) {
        let j = 0; // pointer to every letter in a word
        let k = 0; // pointer to every letter in searchWord

        while(sentence[i].length >= searchWord.length && k < searchWord.length) {
            if(sentence[i][j] !== searchWord[k]) {
                break;
            } else {
                if(j + 1 === searchWord.length) return i + 1;
            }
            j++;
            k++
        }

        i++
    }

    return -1
};