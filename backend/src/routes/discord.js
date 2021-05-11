const router = require('express').Router()
const { getBotGuilds, getGuildRoles } = require('../utils/api')
const User = require('../db/schemas/user')
const { getMutualGuilds } = require('../utils/utils')
const commandPrefixSchema = require('../db/schemas/command-prefix-schema')
const guildRolesSchema = require('../db/schemas/guild-roles')

router.get('/guilds/:guildID/prefixConfig', async (req, res) => {
    const { guildID } = req.params
    const prefix = await commandPrefixSchema.findOne({ _id: guildID })
    return prefix ? res.send(prefix) : res.send({ prefix: 'b!' })
})

router.get('/guilds', async (req, res) => {
    const guilds = await getBotGuilds()
    const user = await User.findOne({
        DiscordID: req.user.DiscordID
    })
    if(user){
        const userGuilds = user.get('guilds')
        const mutualGuilds = getMutualGuilds(userGuilds, guilds)
        res.send(mutualGuilds)
    } else {
        return res.status(401).send({ msg: 'Unauthorized' })
    }
})

router.put('/guilds/:guildID/prefix', async (req, res) => {
    const { prefix } = req.body
    const { guildID } = req.params
    if(!prefix) return res.status(400).send({ msg: 'Prefix Required' })
    const update = await commandPrefixSchema.findOneAndUpdate({
        _id: guildID
    },{
        prefix
    }, {
        upsert: true,
        new: true
    }).exec()
    return update ? res.send(update) : res.status(400).send({ msg: 'Could not find database document' })
})

router.get('/guilds/:guildID/roles', async (req, res) => {
    const { guildID } = req.params
    try{
        const roles = await getGuildRoles(guildID)
        res.send(roles)
    } catch(err){
        console.log(err)
        res.status(500).send({ msg: "Internal Server Error" })
    }
})

router.put('/guilds/:guildID/roles/default', async (req, res) => {
    const { roleID } = req.body
    if(!roleID) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await guildRolesSchema.findOneAndUpdate({
            _id: guildID
        }, {
            base: roleID
        },{
            upsert: true,
            new: true
        }).exec()
        return update ? res.send(update) : res.status(400).send({ msg: "Bad Request" })
    }catch(err){
        console.log(err)
        res.status(500).send({ msg: "Internal Server Error" })
    }
})

module.exports = router