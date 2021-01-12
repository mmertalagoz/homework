'use strict';

// task-1
// const vegArr = 
// [
//     'Капуста',
//     'Репа',
//     'Редиска',
//     'Морковка',
// ]

// let joinNames = (...prop) => {
//     return prop.join(' | ')
// }

// const newArr = joinNames(...vegArr)
// console.log(newArr);





// task-2
let namesStr = 'Вася;Петя;Вова;Олег';

let addNamesArr = (prop) => {
    return prop.split(';')
}
const newNamesArr = addNamesArr(namesStr)
console.log(newNamesArr)





// task-3
let sayHello = (name) => {
    return `Привет ${name}!`
}

const sayHelloValue = sayHello('Усы Якубовича');
console.log(sayHelloValue);





// task-4
// не могу понять, почему ретерн работает только в однострочном выражении
const fruits = ['яблоко', 'ананас', 'груша'];

const fruitsToUpperCase = (prop) => {
    return prop.map(item => item.toUpperCase()) 
}

const upperFruits = fruitsToUpperCase(fruits);
console.log(upperFruits)





// task-5 
const addOneForAll = (...prop) => {
    return prop.map((item) => (item += 1))
}
const valuePlusOne = addOneForAll(1, 2, 3, 4);
console.log(valuePlusOne)





// task 6
const getSum = (...prop) => {
    let counter = 0;
    prop.forEach((item) => counter += item);
    return counter;
}

const sum = getSum(1, 2, 3, 4, 5, 6);
console.log(sum);





//task-7  
const originArr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

const getNumArr = (...prop) => {
    return prop.filter(element => typeof (element) === 'number')
}

const newNumArr = getNumArr(...originArr);
console.log(newNumArr)





// task-8
const valueArr = ['123', '', null, false, undefined, NaN, 3, 1, {}, ];

let haveTrueValue = (...prop) => {
    let controlValue = 0;
    prop.map((item) => {
        (Boolean(item) === false) ? controlValue += 1: controlValue += 0
    });

    let out =  (controlValue >= 1) ? `Количество ложных значений: ${controlValue} ` : 'Все значение правдивы';
    return out
}

const valuesCounter = haveTrueValue(...valueArr);
console.log(valuesCounter)