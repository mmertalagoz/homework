// task-1.1
let hw1 = () => {
    for (let i = 1; i < 50; i++) {
        console.log(i)
    }
    
    // task-1.2
    let count = 0;
    while (count < 49) {
        count++;
        console.log(count)
    }    
}

// task-2
let hw2 = () => {
    let sum = 0;
    for (let i = 1; i < 5; i++) {
        sum += i;
    }
    console.log(sum);
}

// task-3
let hw3 = () => {
    let evenSum = 0;
    for (let i = 1; i < 20; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        }
    }
    console.log(evenSum)
}

// task-4 
let hw4 = (prop) => {
    for (let i = 1; i <= prop; i++) {
        if ((i % 2 === 0) && (i % 3 !== 0)) {
            console.log('Fiz');
        } else if (i % 3 === 0) {
            console.log('FizBuz')
        } else if (i % 2 !== 0) {
            console.log('Buz');
        } else console.log('не прошло ни одной проверки') 
    }
}

// hw1();
// hw2();
// hw3();
// hw4(10);