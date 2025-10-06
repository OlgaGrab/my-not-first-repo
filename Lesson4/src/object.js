const cat = {
    zosia: {
        age: 4,
        color: 'gray',
        type: 'sphynx',
        talk: function () {
            console.log(this);
        },
        food: {
            eat: 'dry',
            drink: 'milk',
            sweets: ['balls', 'tuna', 'grass']
        }
    }
};
cat.zosia.talk();
