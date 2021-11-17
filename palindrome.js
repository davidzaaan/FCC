function palindrome(str) {
    /*Creating a new Regular Expression to get rid of all non-alphanumeric characters */
    const regex = new RegExp(/^[0-9a-z]+$/, 'i');

    str = str.split("")
        .filter((item) => item.match(regex))
        .map(item => item.toLowerCase())
        .join("");
    /* Creating a new auxiliar string */
    let newStr = str.split("")
        .filter((item) => item.match(regex))
        .reverse()
        .join("");

    return str === newStr;
}



console.log(palindrome("eye"));