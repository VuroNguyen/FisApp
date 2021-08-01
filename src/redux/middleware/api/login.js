export async function postLogin(username, password) {
    let data = {
        username: username,
        password: password,
    }
    console.log('from login api');
    const response = await fetch('http://118.69.123.51:5000/fis/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
        
    }).then(response => response.json())
    .then(result => {
        console.log(result,'hehe')
        return result
    }).catch((error) => {
        console.log(error);
    });
    console.log(response, 'day la response api')
    return response
}