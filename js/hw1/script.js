'use strict';

// task-1
const namesArr = [
    'Капуста',
    'Репа',
    'Редиска',
    'Морковка',
]

console.log(namesArr.join(' | '))

// task-2
let namesStr = 'Вася;Петя;Вова;Олег';

console.log(namesStr.split(';'))

// task-3
let sayHello = (name) => {
    console.log(`Привет ${name}!`)
}

sayHello('Усы Якубовича')

// task-4
// додумался ток до этого)) Не знаю, правильно ли использовать такое количество методов подряд. То, что массив сначала переобразуется к строке, потом обратно в массив - это норм?) Пытался через forEach, но в конце выходит каждый элемент в отдельном массиве)
const fruits = ['яблоко', 'ананас', 'груша'];

const fruitsToUpperCase = fruits.toString().toUpperCase().split(',');
console.log(fruitsToUpperCase)

// task-5 
let addOneForAll = (...params) => {
    let newArr = [];
    for (let i = 0; i < params.length; i++) {
        newArr.push(params[i] + 1);
    }
    console.log(newArr)
}

addOneForAll(1, 2, 3, 4)

// task 6
let getSum = (...params) => {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    console.log(sum)
}
getSum(1, 2, 3, 4, 5, 6)

//task-7 
const originArr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const newArr = originArr.filter(element => typeof (element) === 'number')
console.log(newArr)

// task-8
//  тут я не смог, не могу понять как передать массив в аргумент при вызове функции(((

const valueArr = ['123', '', null, false,  3, 1];
let haveTrueValue = (...prop) => {
    let controlValue = 0;
    for (let i = 0; i < prop.length; i++) {
        if (prop[i] === false || prop[i] === null || prop[i] === '' || prop[i] === 0) {
            controlValue += 1;
        } else {
            controlValue += 0;
        }
    }
    if (controlValue >= 1) {
        console.log(`Количество ложных значений: ${controlValue} `)
    } else console.log('Все значение правдивы')
}

haveTrueValue(...valueArr)