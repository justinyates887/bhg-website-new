const router = require('express').Router()

const { getBotGuilds, getGuildRoles, getGuildChannels, getUserGuilds } = require('../utils/api')
const { getMutualGuilds } = require('../utils/utils')

const User = require('../db/schemas/user')
const commandPrefixSchema = require('../db/schemas/command-prefix-schema')
const guildRolesSchema = require('../db/schemas/guild-roles')
const welcomeChannelSchema = require('../db/schemas/welcome-channel')
const logsChannelSchema = require('../db/schemas/logs')
const ticketsCategorySchema = require('../db/schemas/tickets')
const suggestChannelsSchema = require('../db/schemas/suggest')
const antiAdSchema = require('../db/schemas/antiad')
const blacklistSchema = require('../db/schemas/blacklist')
const warningSchema = require('../db/schemas/warnings')

router.get('/guilds', async (req, res) => {
    const guilds = await getBotGuilds()
    const user = await User.findOne({
        DiscordID: req.user.DiscordID
    })

    if(user){
        const userGuilds = await getUserGuilds(req.user.discordID)
        const mutualGuilds = getMutualGuilds(userGuilds, guilds)
        res.send(mutualGuilds)
    } else {
        return res.status(401).send({ msg: 'Unauthorized' })
    }
})

router.get('/guilds/@me', async (req, res) => {
    const guilds = await getBotGuilds()
    res.send(guilds)
})

router.get('/guilds/:guildID/warnings' , async (req, res) => {
    const { guildID } = req.params
    const result = await warningSchema.find({ gID: guildID })
    return result ? res.send(result) : res.send({})
})

router.get('/guilds/:guildID/prefixConfig', async (req, res) => {
    const { guildID } = req.params
    const prefix = await commandPrefixSchema.findOne({ _id: guildID })
    return prefix ? res.send(prefix) : res.send({ prefix: 'b!' })
}) 

router.put('/guilds/:guildID/prefix', async (req, res) => {
    const { prefix } = req.body
    const { guildID } = req.params
    if(!prefix) return res.status(400).send({ msg: 'Prefix Required' })
    const update = await commandPrefixSchema.findOneAndUpdate({
        _id: guildID
    },{
        prefix: prefix.prefix
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

router.put('/guilds/:guildID/roles/mute', async (req, res) => {
    const { roleID } = req.body
    if(!roleID) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await guildRolesSchema.findOneAndUpdate({
            _id: guildID
        }, {
            mute: roleID
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

router.get('/guilds/:guildID/channels', async (req, res) => {
    const { guildID } = req.params
    try{
        const channels = await getGuildChannels(guildID)
        res.send(channels)
    } catch(err){
        console.log(err)
        res.status(500).send({ msg: "Internal Server Error" })
    }
})

router.put('/guilds/:guildID/channels/welcome', async (req, res) => {
    const { channelID } = req.body
    if(!channelID) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await welcomeChannelSchema.findOneAndUpdate({
            _id: guildID
        }, {
            channelID
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

router.put('/guilds/:guildID/channels/logs', async (req, res) => {
    const { channelID } = req.body
    if(!channelID) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await logsChannelSchema.findOneAndUpdate({
            _id: guildID
        }, {
            cID: channelID
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

router.put('/guilds/:guildID/channels/tickets', async (req, res) => {
    const { channelID } = req.body
    if(!channelID) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await ticketsCategorySchema.findOneAndUpdate({
            _id: guildID
        }, {
            cID: channelID
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

router.put('/guilds/:guildID/channels/suggestion', async (req, res) => {
    const { channelID } = req.body
    if(!channelID) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await suggestChannelsSchema.findOneAndUpdate({
            _id: guildID
        }, {
            cID: channelID
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

router.put('/guilds/:guildID/channels/approved-suggestion', async (req, res) => {
    const { channelID } = req.body
    if(!channelID) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await suggestChannelsSchema.findOneAndUpdate({
            _id: guildID
        }, {
            aCID: channelID
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

router.put('/guilds/:guildID/antiad', async (req, res) => {
    const { desired } = req.body
    if(!desired) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await antiAdSchema.findOneAndUpdate({
            _id: guildID
        }, {
            desired
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

router.get('/guilds/:guildID/blacklist-config', async (req, res) => {
    const { guildID } = req.params
    const blacklist = await blacklistSchema.findOne({ _id: guildID })
    return blacklist ? res.send(blacklist) : res.send([])
}) 

router.put('/guilds/:guildID/blacklist', async (req, res) => {
    const { words } = req.body
    if(!words) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await blacklistSchema.findOneAndUpdate({
            _id: guildID
        }, {
            $push: {
                words
            }
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

router.put('/guilds/:guildID/blacklist/remove', async (req, res) => {
    const { word } = req.body
    if(!word) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await blacklistSchema.findOneAndUpdate({
            _id: guildID
        }, {
            $pull: {
                words: word
            }
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

//

router.get('/guilds/:guildID/admin-config', async (req, res) => {
    const { guildID } = req.params
    const adminRoles = await guildRolesSchema.findOne({ _id: guildID })
    return adminRoles ? res.send(adminRoles.admin) : res.send([])
}) 

router.put('/guilds/:guildID/admin-roles', async (req, res) => {
    const { roles } = req.body
    if(!roles) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await guildRolesSchema.findOneAndUpdate({
            _id: guildID
        }, {
            $push: {
                admin: roles
            }
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

router.put('/guilds/:guildID/admin-role/remove', async (req, res) => {
    const { role } = req.body
    if(!role) return res.status(400).send({ msg: "Bad Request" })
    const { guildID } = req.params;
    try{
        const update = await guildRolesSchema.findOneAndUpdate({
            _id: guildID
        }, {
            $pull: {
                admin: role
            }
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