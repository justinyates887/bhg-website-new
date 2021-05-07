const axios = require('axios')

export function getUserDetails() {
    return axios.get('http://localhost:8080/api/auth', {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}

export function getGuilds() {
    return axios.get('http://localhost:8080/api/discord/guilds', {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}