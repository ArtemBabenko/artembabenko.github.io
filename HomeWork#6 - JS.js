//Need to connect Moment and LoDash

// Task #1 printTimeout**************************************************
function printTimeout(str, n) {
    setTimeout(() => {
        console.log(str);
    }, 1000);
};

console.log('Task #1 print Timeout'.toUpperCase());

// Task #2 sumAll********************************************************
function sumAll(n) {
    return (n != 0) ? n + sumAll(n - 1) : 0;
}

console.log('Task #2 sum All'.toUpperCase());
console.log(sumAll(2));
console.log(sumAll(4));

// Task #3 bombTimer*****************************************************
function bombTimer(str, time) {
    let score = time;
    let start = setInterval(() => {
        if (score > 0) {
            console.log(score);
            score--;
        } else {
            console.log(str)
            clearInterval(start);
        }
    }, 1000);
    setTimeout(start, time * 1000);
}

console.log('Task #3 bomb Timer'.toUpperCase());

// Task #4 factorial*****************************************************
function factorial(n) {
    return n != 0 ? n * factorial(n - 1) : 1;
}

console.log('Task #4 factorial'.toUpperCase());
console.log(factorial(3));
console.log(factorial(5));

// Task #5 bombTimer2**************************************************** 
function bombTimer2(str, time) {
    let score = time;
    let start = setInterval(() => {
        if (score > 0) {
            console.log(score);
            score--;
        } else {
            console.log(str)
            clearInterval(start);
        }
    }, 1000);
    setTimeout(start, time * 1000);
}

console.log('Task #5 bomb Timer2'.toUpperCase());

// Task #6 filterNumbers*************************************************
function filterNumbers(arr, maxNumber) {
    let arrFinal = [];
    arr.forEach(function(entry) {
        if (maxNumber > entry) {
            arrFinal.push(entry);
        }
    });

    return arrFinal;
}

console.log('Task #6 filter Numbers'.toUpperCase());
console.log(filterNumbers([1, 4, 8, 1, 20], 5));

// Task #7 minMax********************************************************
function minMax(arr) {
    arr.sort((a, b) => a - b);
    return {
        min: arr[0],
        max: arr[arr.length - 1]
    };
}

console.log('Task #7 min Max'.toUpperCase());
console.log(minMax([1, 4, 8, 2, 20]));

// Task #8 average********************************************************
function average(arr) {
    // Var 1
    let finalNumber = arr.reduce((accum, number) => accum + number, 0);

    // Var 2
    // let finalNumber = null;
    // arr.forEach(function(entry) {
    //     finalNumber += entry;
    // });

    console.log(finalNumber / arr.length);
}

console.log('Task #8 average'.toUpperCase());
average([1, 4, 2]);

// Task #9 concatFirstNestedArrays****************************************

function concatFirstNestedArrays(arr) {
    //Var 1
    // return arr.reduce((accum, number) => accum.concat(number));

    //Var 2
    return _.flattenDeep(arr);
}

console.log('Task #9 concat First Nested Arrays'.toUpperCase());
console.log(concatFirstNestedArrays([
    [0, 1],
    [2, 3],
    [4, 5]
]));

// Task #10 usersToObject*************************************************
const users = [
    { id: 1, name: 'John', birthday: '1999-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '1999-3-11' },
    { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) {
    let finalUser = {};
    users.forEach(function(entry) {
        finalUser[entry.id] = entry;
    });
    return finalUser;
}

console.log('Task #10 users To Object'.toUpperCase());
console.log(usersToObject(users));

// Task #11 filterUsersByMonth********************************************
const users2 = [
    { name: 'John', birthday: '1999-2-12' },
    { name: 'Bill', birthday: '1999-1-19' },
    { name: 'Carol', birthday: '1999-4-11' },
    { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) {
    let arrFinal = [];
    users.forEach(function(entry) {
        let date = moment(entry.birthday, 'YYYY-MM-DD');
        if (date.format('MM') == month || date.format('MM') == 1 && month == 0) {
            arrFinal.push(entry);
        }
    });

    return arrFinal;
}

console.log('Task #11 filter Users By Month'.toUpperCase());
console.log(filterUsersByMonth(users2, 0));

// Task #12  getAdultNames************************************************
const users3 = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) {
    let finalStr = [];
    let currentDate = moment().format('YYYY');
    users.forEach(function(entry) {
        let dateBirthday = moment(entry.birthday, 'YYYY-MM-DD').format('YYYY');
        let age = currentDate - dateBirthday;
        (age >= 18) ? finalStr.push(entry.name + ' ' + age): false;
    });

    return finalStr.join(', ');
}

console.log('Task #12  get Adult Names'.toUpperCase());
console.log(getAdultNames(users3));
