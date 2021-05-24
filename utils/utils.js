const CryptoJS = require('crypto-js')

function getMutualGuilds(userGuilds, botGuilds){
    const validGuilds = userGuilds.filter((guild) => (guild.permissions & 0x20) === 0x20)
    const included = []
    const excluded = validGuilds.filter((guild) => {
        const findGuild = botGuilds.find((g) => g.id === guild.id)
        if(!findGuild) return guild
        included.push(findGuild)
    })
    return { excluded, included }
}

function encrypt(token){
    return CryptoJS.AES.encrypt(token, process.env.CRYPT_PASS)
}

function decrypt(token){
    return CryptoJS.AES.decrypt(token, process.env.CRYPT_PASS)
}

module.exports = { getMutualGuilds, encrypt, decrypt }