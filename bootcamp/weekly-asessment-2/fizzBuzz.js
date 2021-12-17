const fizzBuzz = function(end) {
    let res = ""
    for (let start = 1; start <= end; start++) {
        if (start % 3 === 0 && start % 5 === 0) {
            res = res + "FizzBuzz "
        } else if (start % 3 === 0){
            res = res + "Fizz "
        } else if (start % 5 === 0){
            res = res + "Buzz "
        } else {
            res = res + start + " "
        }
    }
    return res
}

const input = 16;

console.log(fizzBuzz(input));