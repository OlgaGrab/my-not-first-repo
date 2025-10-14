function addItems(arr) {
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }

    return sum;
}
const digits = [4, 6, 7, 23, 9];
const words = ['book', 'door', 'flower'];

console.log(addItems(digits));
console.log(addItems(words));
