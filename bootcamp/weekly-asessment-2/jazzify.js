const jazzify = () => {};
const jazzify = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes("7")) {
            arr[i] = arr[i] + "7";
        }
    }

    const input = ["G", "Am", "C"];
    return arr;
}

const input = ["G", "Am7", "C"];

console.log(jazzify(input));