function getApiData() {
    return fetch('https://nonexisting.oo');
}

function getCorrectData() {
    return {
        answer: 'not found',
        status: 404
    };
}

try {
    await getApiData();
} catch (error) {
    console.log(error.message);
    if (error.message.includes('fetch failed')) {
        const response = getCorrectData();
        console.log(response);
        if (response.status != 200) {
            throw new Error('Invalid response, try later');
        }
    }
}
