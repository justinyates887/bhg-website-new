const passport = require('passport')
const DiscordStrategy = require('passport-discord')
const User = require('../db/schemas/user')
const OAuth2Credentials = require('../db/schemas/OAuth2Credentials')
const { encrypt } = require('../utils/utils')


passport.serializeUser((user, done) => {
    done(null, user.discordID)
})

passport.deserializeUser(async (discordID, done)=> {
    try{
        const user = await User.findOne( {
            discordID
        })
        return user ? done(null, user) : done(null, null)
    } catch(err){
        done(err, null)
        console.log(err)
    }
})

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.TOKEN,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'guilds', 'email']
}, async (accessToken, refreshToken, profile, done) => {

        const encryptedAccessToken = encrypt(accessToken).toString()
        const encryptedRefreshToken = encrypt(refreshToken).toString()

        const {id, username, discriminator, avatar, guilds, email} = profile
        try{   
            const findUser = await User.findOneAndUpdate(
                {
                    discordID: id
                }, {
                    username,
                    discriminator,
                    avatar,
                    guilds,
                    email,
                }, {
                    upsert: true,
                    new: true
                }
            ).exec()

            const findCredentials = await OAuth2Credentials.findOneAndUpdate({
                discordID: id
            }, {
                accessToken: encryptedAccessToken,
                refreshToken: encryptedRefreshToken
            }, {
                upsert: true,
                new: true
            }).exec()

            if(findUser) {
                if(!findCredentials){
                    const newCredentials = await OAuth2Credentials.create({
                        accessToken: encryptedAccessToken,
                        refreshToken: encryptedRefreshToken,
                        discordID: id
                    }).save()
                }
                return done(null, findUser)
            } else {
                const newUser = User.create({
                    discordID: id,
                    username,
                    discriminator,
                    avatar,
                    guilds,
                    email,
                    isPremium: false
                }).save()

                const newCredentials = await OAuth2Credentials.create({
                    accessToken: encryptedAccessToken,
                    refreshToken: encryptedRefreshToken,
                    discordID: id
                }).save()

                return done(null, newUser)
            }
        } catch(err){
            console.error(err)
            return done(err, null)
        }
    })
)