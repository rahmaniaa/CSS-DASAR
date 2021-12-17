const palindrome = (str) => {
    let reversedStr = str.split("").reverse().join("");

    const input = "hello";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != reversedStr[i]) {
            return 'false ${str} is not match with ${reversedStr}';
        } else {
            return "true";
        }
    }
};

const input = "kucing imut";

console.log(palindrome(input));