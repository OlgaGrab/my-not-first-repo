// const gift = {
//     title: 'Surprise for Him',
//     type: {
//         color: 'black',
//         package: 'box',
//         ribbon: 'purple'
//     },
//     _certificate: 'You got a car!',

//     get isValid() {
//         return this._certificate.startsWith('You got');
//     },
//     set certificate(value) {
//         this._certificate = value;
//     }
// };

// console.log(gift.isValid);
// gift.certificate = 'Rabbit will be received by you!';
// console.log(gift.isValid);

const gift = {
    title: 'Surprise for Him',
    type: {
        color: 'black',
        package: 'box',
        ribbon: 'purple'
    },
    _certificate: 'You got a car!',

    get certificate() {
        return this._certificate;
    },
    set certificate(value) {
        this._certificate = value;
    }
};

console.log(gift.certificate);
gift.certificate = 'Rabbit will be received by you!';
console.log(gift.certificate);
