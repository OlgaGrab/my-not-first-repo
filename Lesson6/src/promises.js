function getJson() {
    return fetch('https://dummyjson.com/test')
        .then((response) => {
            return response.json();
        })
        .then((json) => showJson(json))
        .catch((e) => console.log(e));
}

function showJson(json) {
    console.log('Show response');
    console.log(json);
}

getJson();

