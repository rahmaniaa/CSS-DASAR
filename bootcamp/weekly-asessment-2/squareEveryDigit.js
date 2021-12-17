const squareEveryDigit = (num) => {
    let output = num
    .split("")
    .map((el) => Math.pow(el, 2))
    .join("");

    const input = "9119";
    return output;
};

const input = "2213";

console.log(squareEveryDigit(input));