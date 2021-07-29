document.querySelector('#loginButton').addEventListener('click', () => {
    postUserLogin();
});

async function postUserLogin() {
    let userCreds = {
        username: document.getElementById('userEmail').value,
        password: document.getElementById('userPassword').value
    };

    const response = await fetch('/auth/login', {
        "method": "POST",
        "headers": {
            'Content-Type': "application/json"
        },
        "body": JSON.stringify(userCreds)
    });

    const tokens = await response.json();

    if(tokens.accessToken && tokens.refreshToken) {
        localStorage.setItem('aToken', tokens.accessToken);
        localStorage.setItem('fToken', tokens.refreshToken);
        
        await fetch('/auth/homepage');
    } else {
        alert('Ooops something went wrong. Please try again later.');
    }
};