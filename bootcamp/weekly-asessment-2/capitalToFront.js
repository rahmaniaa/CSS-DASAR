const capitalToFront = (str) => {
    let strArr = str.split("");
    let arrStrDepan = [];
    let arrStrSisa = [];
    let arrGabungan = [];

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == strArr[i].toUpperCase()) {
            arrStrDepan += strArr[i];
        }else {
            arrStrSisa += strArr[i];
        }
    }
    arrGabungan = [...arrStrDepan, ...arrStrSisa];
    return arrGabungan.join("");
};

const input = "hEllO";
console.log(capitalToFront(input));