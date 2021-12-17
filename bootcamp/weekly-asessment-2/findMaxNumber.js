const findMaxNumber = (number) => {
    let biggestNumber;
    biggestNumber = number.sort((a, b) => a - b);
    return number[biggestNumber.length - 1];
    return biggestNumber[biggestNumber.length - 1];
};

const input = [3, 6, 9, 12, 7, 16, 5];
const input = [3, 6, 9, 12, 7, 100, 16, 5];

console.log(findMaxNumber([3, 6, 9, 12, 99, 7, 16, 5];));
console.log(findMaxNumber(input));