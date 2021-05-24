const fetch = require('node-fetch')
const CryptoJS = require('crypto-js')
const OAuth2Credentials = require('../db/schemas/OAuth2Credentials')
const { decrypt } = require('./utils')
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

async function getUserGuilds(discordID){
    const credentials = await OAuth2Credentials.findOne({
        discordID
    })

    if(!credentials) throw new Error("No credentials")

    const accessTokenEncrypted = credentials.get('accessToken')
    const decrypted = decrypt(accessTokenEncrypted)
    const accessToken = decrypted.toString(CryptoJS.enc.Utf8)

    const response = await fetch(`${discordAPI}/users/@me/guilds`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return response.json()
}

module.exports = { getBotGuilds, getGuildRoles, getGuildChannels, getUserGuilds }