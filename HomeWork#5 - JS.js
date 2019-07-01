// Task #1 Converter ****************************************************

const convert = (amount) => `Вы получите ${(amount * 8).toFixed(2)} грн`;

console.log('Task #1 "Converter"'.toLocaleUpperCase());
console.log(convert(1));

// Task #2 Reverse ******************************************************

function reverse(str) {

    let finalStr = '';

    let arrStr = str.toString().split('');

    for (let i = arrStr.length - 1; i >= 0; i--) {
        finalStr += arrStr[i];
    }

    return finalStr;
}

console.log('Task #2 "Reverse"'.toLocaleUpperCase());
console.log(reverse('abc'));

// Task #3 Stairs *******************************************************

function printStairs(n) {

    let str = '';

    for (i = 1; i < n + 1; i++) {
        str += '#';
        console.log(str);
    }
}

console.log('Task #3 "Stairs"'.toLocaleUpperCase());
printStairs(3);

// Task #4 Sum Range ****************************************************

function sunRange(start, end) {

    let sum = null;

    for (i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

console.log('Task#4 "Sum Range"'.toLocaleUpperCase());
console.log(sunRange(2, 4));

// Task #5 Min **********************************************************

let min = (a, b, c) => (a < b && a < c) ? a : (b < a && b < c) ? b : (c < a && c < b) ? c : false;

console.log('Task#5 "min"'.toLocaleUpperCase())
console.log(min(1, 2, 3));

// Task #6 Print Piramid ************************************************

function printPiramid(n) {
    let str = '';
    let space = ' ';
    for (i = 0; i < n; i++) {
        str = (i === 0) ? str.concat('#') : str.concat('##');
        let repition = (((n * 2) - 1) - str.length) / 2;
        console.log(space.repeat(repition), str);
    }
}

console.log('Task #6 "Print Piramid"'.toLocaleUpperCase())
printPiramid(3);

// Task #7 First And Last To Upper **************************************

const firstAndLastToUpper = (str) => str[0].toLocaleUpperCase() + str.toLowerCase().slice(1, str.length - 1) + str[str.length - 1].toLocaleUpperCase();

console.log('Task #7 "First And Last To Upper"'.toLocaleUpperCase());
console.log(firstAndLastToUpper('abc'));

// Task #8 Cursor Check *************************************************

let cursorCheck = (str) => (~str.toLowerCase().indexOf('ironman') || ~str.toLowerCase().indexOf('ostap') || ~str.toLowerCase().indexOf('cursor')) ? true : false;

console.log('Task #8 Cursor Check"'.toLocaleUpperCase())
console.log('Hello I am OstaP : ' + cursorCheck('Hello I am OstaP'));
console.log('Superman is here : ' + cursorCheck('Superman is here'));

// Task #9 To Uppercase *************************************************

function toUppercase(str) {
    let lower = 'abcdefghijklmnopqrstuvwxyz ';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    let letterArr = new Map();
    for (i = 0; i < lower.length; i++) {
        letterArr.set(lower[i], upper[i]);
    }

    let arrStr = str.split('');
    let finalString = '';
    arrStr.forEach(function(value) {
        finalString += letterArr.get(value);
    });

    return finalString;
}

console.log('"Task #9 To Uppercase"'.toLocaleUpperCase());
console.log(toUppercase('abc'));

// Task #10 Remove Duplication Letters ***********************************

function removeDuplicationLetters(str) {
    let arrStr = str.split('');
    let arrFinal = new Map();
    let finalStr = '';
    for (i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === ' ') {
            arrFinal.set(`space${i}`, arrStr[i]);
            finalStr += arrStr[i];
        } else if (arrFinal.get(arrStr[i].toUpperCase()) === undefined && arrFinal.get(arrStr[i].toLowerCase()) === undefined) {
            arrFinal.set(arrStr[i], arrStr[i]);
            finalStr += arrStr[i];
        }
    }

    return finalStr;
}

console.log('"Task #10 Remove Duplication Letters"'.toLocaleUpperCase())
console.log(removeDuplicationLetters('Hello I am Iron Man'));

// Task #11 Fibonacci ****************************************************

function fibonacci(n) {
    let arrNumbers = [0, 1, 1];
    let strFinal;
    for (i = 0; i < n + 1; i++) {
        if (i >= 3) {
            arrNumbers.push(arrNumbers[i - 1] + arrNumbers[i - 2]);
        }
    }
    (n === 0) ? strFinal = 'Значение должно быть больше "0"': strFinal = arrNumbers[n];

    return strFinal;
}

console.log('"Task #11 Fibonacci"'.toLocaleUpperCase())
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));
