function getMutualGuilds(userGuilds, botGuilds){
    //return userGuilds.filter((guild) => botGuilds.find((botGuild) => botGuild.id === guild.id) && (guild.permissions & 0x20) === 0x20)
    const validGuilds = userGuilds.filter((guild) => (guild.permissions & 0x20) === 0x20)
    const included = []
    const excluded = validGuilds.filter((guild) => {
        const findGuild = botGuilds.find((g) => g.id === guild.id)
        if(!findGuild) return guild
        included.push(findGuild)
    })
    return { excluded, included }
}

module.exports = { getMutualGuilds }