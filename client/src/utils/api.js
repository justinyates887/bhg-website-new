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

export function getGuildPrefix(guildID) {
    return axios.get(`http://localhost:8080/api/discord/guilds/${guildID}/prefixConfig`, {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}

export function updateGuildPrefix(guildID, prefix) {
    return axios.put(`http://localhost:8080/api/discord/guilds/${guildID}/prefix`, {
        prefix
    }, {
        withCredentials: true
    }
    )
}

export function updateDefaultRole(guildID, roleID) {
    return axios.put(
        `http://localhost:8080/api/discord/guilds/${guildID}/roles/default`, {
            roleID
        }, {
            withCredentials: true
        }
    )
}

export function getGuildRoles(guildID) {
    return axios.get(
        `http://localhost:8080/api/discord/guilds/${guildID}/roles`, {
            withCredentials: true
        }
    )
}