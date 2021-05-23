const axios = require('axios')

export function getUserDetails() {
    return axios.get('https://bhg-website.herokuapp.com//api/auth', {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}

export function getGuilds() {
    return axios.get('https://bhg-website.herokuapp.com//api/discord/guilds', {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}

export function getMyGuilds(){
    return axios.get('https://bhg-website.herokuapp.com//api/discord/guilds/@me', {
        withCredentials: true
    })
}

export function getGuildPrefix(guildID) {
    return axios.get(`https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/prefixConfig`, {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}

export function updateGuildPrefix(guildID, prefix) {
    return axios.put(`https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/prefix`, {
        prefix
    }, {
        withCredentials: true
    }
    )
}

export function getGuildRoles(guildID) {
    return axios.get(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/roles`, {
            withCredentials: true
        }
    )
}

export function updateDefaultRole(guildID, roleID) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/roles/default`, {
            roleID
        }, {
            withCredentials: true
        }
    )
}

export function updateMuteRole(guildID, roleID) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/roles/mute`, {
            roleID
        }, {
            withCredentials: true
        }
    )
}

export function getGuildChannels(guildID) {
    return axios.get(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/channels`, {
            withCredentials: true
        }
    )
}

export function updateWelcomeChannel(guildID, channelID) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/channels/welcome`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateLogsChannel(guildID, channelID) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/channels/logs`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateTicketsChannel(guildID, channelID) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/channels/tickets`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateSuggestionChannel(guildID, channelID) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/channels/suggestion`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateApprovedSuggestionChannel(guildID, channelID) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/channels/approved-suggestion`, {
            channelID
        }, {
            withCredentials: true
        }
    )
}

export function updateAntiad(guildID, desired) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/antiad`, {
            desired
        }, {
            withCredentials: true
        }
    )
}

export function getGuildBlacklist(guildID) {
    return axios.get(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/blacklist-config`, {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}

export function updateBlacklist(guildID, words) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/blacklist`, {
            words
        }, {
            withCredentials: true
        }
    )
}

export function removeBlacklistWord(guildID, word) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/blacklist/remove`, {
            word
        }, {
            withCredentials: true
        }
    )
}

export function getAdminRoles(guildID) {
    return axios.get(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/admin-config`, {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}

export function updateAdminRoles(guildID, roles) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/admin-roles`, {
            roles
        }, {
            withCredentials: true
        }
    )
}

export function removeAdminRole(guildID, role) {
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/admin-role/remove`, {
            role
        }, {
            withCredentials: true
        }
    )
}

export function getWarnings(guildID) {
    return axios.get(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/warnings`, {
            withCredentials: true
        }
    )
}

export function deleteWarning(wID, uID, guildID){
    return axios.put(
        `https://bhg-website.herokuapp.com//api/discord/guilds/${guildID}/warnings/delete`, {
            wID, uID
        }, {
            withCredentials: true
        }
    )
}