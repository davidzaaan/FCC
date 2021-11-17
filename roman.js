/*This algorithm converts any number into roman numbers.
for more info about roman numbers please visit https://www.mathsisfun.com/roman-numerals.html */

function convertToRoman(num) {
    let str = "";
    while (num > 0) {
        if (num >= 1000) {
            num -= 1000; str += "M"; continue;
        } else if (num >= 900) {
            num -= 900; str += "CM"; continue;
        } else if (num >= 500) {
            num -= 500; str += "D"; continue;
        } else if (num >= 400) {
            num -= 400; str += "CD"; continue;
        } else if (num >= 100) {
            num -= 100; str += "C"; continue;
        } else if (num >= 90) {
            num -= 90; str += "XC"; continue;
        } else if (num >= 50) {
            num -= 50; str += "L"; continue;
        } else if (num >= 40) {
            num -= 40; str += "XL"; continue;
        } else if (num >= 10) {
            num -= 10; str += "X"; continue;
        } else if (num >= 9) {
            num -= 9; str += "IX"; continue;
        } else if (num >= 5) {
            num -= 5; str += "V"; continue;
        } else if (num >= 4) {
            num -= 4; str += "IV"; continue;
        } else if (num >= 1) {
            num -= 1; str += "I"; continue;
        }

    }
    return str;
}

console.log("Number converted: ", convertToRoman(15));