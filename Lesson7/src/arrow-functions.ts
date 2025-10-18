const addItems = (arr: number[]): number => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }

    return sum;
};
const digits = [4, 6, 7, 23, 9];


console.log(addItems(digits));


const addItem = (arr: string[]): string => {
    let sum = '0';
    for (const item of arr) {
        sum += item;
    }

    return sum;
};
const words = ['book', 'door', 'flower'];

console.log(addItem(words));

// Не знайшла іншого способу без Any
// const addAnyItems = (arr: number[] | string[]): number | string => {
//     let sum: any = 0;
//     for (const item of arr) {
//         sum += item;
//     }

//     return sum;
// };
// const digit = [4, 6, 7, 23, 9];
// const word = ['book', 'door', 'flower'];

// console.log(addAnyItems(digit));
// console.log(addAnyItems(word));
