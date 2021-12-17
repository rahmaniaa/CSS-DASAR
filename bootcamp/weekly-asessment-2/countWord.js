let lowerCasedStr = str.toLowerCase();

for (let i = 0; i < filteredStr.length; i++) {
    if (filteredStr[i] == word) {
        counter++;
    let count = 0;
    for (let i = 0; i < lowerCasedStr.length; i++) {
        for (let j = 0; lowerCasedWord.length; j++) {
            if (lowerCasedWord[j] != lowerCasedStr[i + j]) break;
            if (j == lowerCasedWord.length - 1) count++;
        }
    }
    return count;
};
    
const wordToCount = "dog";
const input = "cat and dog dog dog. cat and sheep cat cat";
const input = "cat and dog. cat and sheep";

console.log(countWord(wordToCount, input));