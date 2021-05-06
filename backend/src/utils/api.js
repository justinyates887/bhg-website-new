const fetch = require('node-fetch')
const BOT_TOKEN = process.env.BOT_TOKEN

async function getBotGuilds(){
    const response = await fetch('http://discord.com/api/v6/users/@me/guilds', {
        method: 'GET',
        headers: {
            Authorization: `Bot ${BOT_TOKEN}`
        }
    })
    return response.json();
}

module.exports = { getBotGuilds }