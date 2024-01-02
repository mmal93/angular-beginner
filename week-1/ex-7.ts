const callApi = (url: URL) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    });
};

export default function runApp7() {
    const result = document.createElement('p');
    callApi(new URL('https://api.country.is')).then(
        (data) => {
            result.innerHTML = 'API result: ' + JSON.stringify(data)
        })
        .catch((error) => {
            result.innerHTML = 'API error: ' + JSON.stringify(error)
        }
    );
    document.body.append(result)
}