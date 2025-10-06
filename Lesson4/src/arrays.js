const animals = ['cat', 'dog', 'rabbit', 'horse'];
const result = animals.filter((paws) => paws.length === 3);
console.log(result);
console.log(animals.join('*'));

const numbers = [1, 5, 10, 15, 20, 30];
console.log(numbers.find((num) => num >= 10));
console.log(numbers.map((x) => x + 5));
console.log(numbers.sort((a, b) => b - a));

const boolean = [true, false];
console.log(boolean.includes(false));
console.log([...boolean, ...animals]);

const any = [5, 'string', true, 'dinosaur'];
const array3 = boolean.concat(any);
console.log(array3);
any.forEach((item) => console.log(item));
