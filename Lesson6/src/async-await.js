async function getJson() {
    const response = await fetch('https://dummyjson.com/test');
    const json = await response.json();

    return json;
}
(async () => {
    console.log('some message when start');
    const response = await getJson();
    console.log(response);
    console.log('some message after start');
})();
