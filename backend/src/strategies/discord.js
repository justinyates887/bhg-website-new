const passport = require('passport')
const DiscordStrategy = require('passport-discord')
const User = require('../db/schemas/user')

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

            if(findUser) {
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

                return done(null, newUser)
            }
        } catch(err){
            console.error(err)
            return done(err, null)
        }
    })
)