'use strict';

const namesArr = [
    'Капуста',
    'Репа',
    'Редиска',
    'Морковка',
]

let namesStr = 'Вася;Петя;Вова;Олег';


// task-1
let joinNames = (...prop) => {
    console.log(prop.join(' | '))
}

// task-2
let addNamesArr = (names) => {
    console.log(names.split(';'))
}


// task-3
let sayHello = (name) => {
    console.log(`Привет ${name}!`)
}

// task-4

// додумался еще таким, более "императивным" подходом :D. Не знаю, правильно ли использовать такое количество методов подряд. То, что массив сначала переобразуется к строке, потом обратно в массив - это норм?) Ниже через map сделал.
// const fruitsToUpperCase = fruits.toString().toUpperCase().split(',');
// console.log(fruitsToUpperCase)

const fruits = ['яблоко', 'ананас', 'груша'];

const fruitsToUpperCase = (prop) => {
    prop.map(function (item) {
        console.log(item.toUpperCase())
    })
}

// task-5 
const addOneForAll = (...prop) => {
    prop.map(function (item) {
        console.log(item += 1)
    })
}


// task 6, не понял как вернуть функции полученное значение :С Получается вывести сумму сохраненную в локальную переменную sum... Дальше мозг отказал)
const getSum = (...prop) => {
    let sum = 0;
    prop.forEach((item) => sum += item)
    console.log(sum)
}

//task-7  
const originArr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

const newArr = (...prop) => {
    return console.log(prop.filter(element => typeof (element) === 'number'))
}

// task-8
const valueArr = ['123', '', null, false, undefined, NaN, 3, 1, {}, ];

let haveTrueValue = (...prop) => {
    let controlValue = 0;

    prop.map((item) => {
        (Boolean(item) === false) ? controlValue += 1: controlValue += 0
    });

    (controlValue >= 1) ? console.log(`Количество ложных значений: ${controlValue} `): console.log('Все значение правдивы');
}