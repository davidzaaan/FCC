/* Return true if the passed string looks like a valid US phone number. */

/* Regular expressions used in this program */
// 1. ^([0-9]{3}[\s\-]\d{3}[\s\-]\d{4}$)
// 2. ^(\([0-9]{3}\)[\s\-\d]\d{2}[\s\-]\d{4}$)
// 3. ^(\([0-9]{3}\)\s[\-\d]\d{2}[\s\-]\d{4}$)
// 4. ^(\d{10}$)
// 5. ^(1\s?(\(\d{3}\))\s?[\-\d]\d{2}[\-\s]\d{4}$)
// 6. ^(1[\s\-]\d{3}[\-\s]\d{3}[\-\s]\d{4}$)

function telephoneCheck(str) {
    return /^([0-9]{3}[\s\-]\d{3}[\s\-]\d{4}$)|^(\([0-9]{3}\)[\s\-\d]\d{2}[\s\-]\d{4}$)|^(\([0-9]{3}\)\s[\-\d]\d{2}[\s\-]\d{4}$)|^(\d{10}$)|^(1\s?(\(\d{3}\))\s?[\-\d]\d{2}[\-\s]\d{4}$)|^(1[\s\-]\d{3}[\-\s]\d{3}[\-\s]\d{4}$)/.test(str);
}

console.log(telephoneCheck("1 555 555-5555"));