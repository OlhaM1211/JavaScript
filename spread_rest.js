//================================================================================================================
// spread
// ===============================================================================================================



// Math.min - вертає мінімальне значення з певного діапазону чисел

console.log(Math.min(4, 1, 7))

// просто масив в методі Math.min ми використовувати не можемо тому використовуємо  spread
// приклад 1
const arr = [1, 2, 3, 4, 5, 6]
console.log(arr)
console.log('min:', (Math.min(...arr))); // min: 1
console.log('max:', (Math.max(...arr))); // max: 6

// приклад 2
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

const arr4 = [...arr1, -12, ...[10, 15, 20]];
console.log(arr4) // [ 1,  2,  3, -12, 10, 15, 20]

// приклад 3

const obj = {
    name1: 'Sasha',
    age: 31,
}
const skills = {
    skill: 'HTML',
    skill2: 'CSS',
    skill3: 'SQL',
}
const person = {
    ...obj,
    ...skills,
}

console.log('person:', person)

// ===========================================================================================================
// rest - показує залишок
// ===========================================================================================================

const fn = (a, b, c, ... rest) => {
    console.log(rest)   // [ 77, 67, [Function (anonymous)], {}, null ]
console.log(...rest, c)   // 77 67 [Function (anonymous)] {} null 456
    return a + b + c  // 461
}
console.log(fn(1, 4, 456, 77, 67, () => {}, {}, null))