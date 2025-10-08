const gift = {
    title: 'Surprise for Him',
    type: {
        color: 'black',
        package: 'box',
        ribbon: 'purple',
    },
    _certificate: 'You got a car!',

    get isValid() {
        return this._certificate.startsWith('You got');

    },
    set certificate(value) {
        this._certificate = value;
    }
};

console.log(gift.isValid);
gift.certificate = 'Rabbit will be received by you!';
console.log(gift.isValid);
