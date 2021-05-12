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

export function getGuildRoles(guildID) {
    return axios.get(
        `http://localhost:8080/api/discord/guilds/${guildID}/roles`, {
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

export function updateMuteRole(guildID, roleID) {
    return axios.put(
        `http://localhost:8080/api/discord/guilds/${guildID}/roles/mute`, {
            roleID
        }, {
            withCredentials: true
        }
    )
}

export function getGuildChannels(guildID) {
    return axios.get(
        `http://localhost:8080/api/discord/guilds/${guildID}/channels`, {
            withCredentials: true
        }
    )
}

export function updateWelcomeChannel(guildID, channelID) {
    return axios.put(
        `http://localhost:8080/api/discord/guilds/${guildID}/channels/welcome`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateLogsChannel(guildID, channelID) {
    return axios.put(
        `http://localhost:8080/api/discord/guilds/${guildID}/channels/logs`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateTicketsChannel(guildID, channelID) {
    return axios.put(
        `http://localhost:8080/api/discord/guilds/${guildID}/channels/tickets`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateSuggestionChannel(guildID, channelID) {
    return axios.put(
        `http://localhost:8080/api/discord/guilds/${guildID}/channels/suggestion`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateApprovedSuggestionChannel(guildID, channelID) {
    return axios.put(
        `http://localhost:8080/api/discord/guilds/${guildID}/channels/approved-suggestion`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateAntiad(guildID, desired) {
    return axios.put(
        `http://localhost:8080/api/discord/guilds/${guildID}/antiad`, {
            desired
        }, {
            withCredentials: true
        }
    )
}