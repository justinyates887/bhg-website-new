const router = require('express').Router()
const { getBotGuilds } = require('../utils/api')
const User = require('../db/user')
const { getMutualGuilds } = require('../utils/utils')

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

module.exports = router