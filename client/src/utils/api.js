import axios from 'axios';

export function getUserDetails() {
    return axios.get('https://localhost:8080/api/auth', {
        withCredentials: true
    })
}

export function getGuilds() {
    return axios.get('https://localhost:8080/api/discord/guilds', {
        withCredentials: true
    })
}