const axios = require('axios');
const {defaultHeaders} = require("./fixtures/data/headers/defaultHeaders.json");

async function createAccount(username, password) {
    return await axios.post("https://demoqa.com/Account/v1/User", 
        {
            userName: username,
            password: password
        },
        {
            headers: defaultHeaders.headers
        },
    );
}

async function login(username, password) {
    const user = {};
    const account = await createAccount(username, password);

    user.userId = account.data.userID;
    
    const responseGenerateToken = await axios.post("https://demoqa.com/Account/v1/GenerateToken", 
        {
            userName: username,
            password: password
        },
        {
            headers: defaultHeaders.headers
        },
    );
    user.token = responseGenerateToken.data.token;
    return user;
}

module.exports = { login, createAccount };

