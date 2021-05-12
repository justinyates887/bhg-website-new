const fetch = require('node-fetch')
const BOT_TOKEN = process.env.BOT_TOKEN
const discordAPI = 'http://discord.com/api/v9'

async function getBotGuilds(){
    const response = await fetch(`${discordAPI}/users/@me/guilds`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${BOT_TOKEN}`
        }
    })
    return response.json();
}

async function getGuildRoles(guildID){
    const response = await fetch(`${discordAPI}/guilds/${guildID}/roles`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${BOT_TOKEN}`
        }
    })
    return response.json();
}

async function getGuildChannels(guildID){
    const response = await fetch(`${discordAPI}/guilds/${guildID}/channels`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${BOT_TOKEN}`
        }
    })
    return response.json();
}

module.exports = { getBotGuilds, getGuildRoles, getGuildChannels }