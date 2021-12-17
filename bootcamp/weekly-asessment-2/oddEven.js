const oddEven = (number) => {
    if (number % 2 != 0) {
        return '${number} is odd number.';
    } else {
        return '${number} is even number.';
    }
};

const input = 5;

console.log(oddEven(input));