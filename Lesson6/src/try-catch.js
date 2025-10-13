async function getApiData(requestUrl) {
    const response = await fetch(requestUrl);
    if (response.ok !== true) {
        throw new Error('fetch failed');
    }
    return response.json();
}

try {
    await getApiData('https://nonexisting.oo');
} catch (error) {
    console.log(error.message);
    if (error.message.includes('fetch failed')) {
        const response = await getApiData('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response);
    }
}
