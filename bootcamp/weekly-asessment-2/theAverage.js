const theAverage = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
};

const input = [9, 10, 3, 20, 7];

console.log(theAverage(input));