const mongoose = require('mongoose')

const websiteUserSchema = new mongoose.Schema({
    discordID: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    discriminator: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    guilds: {
        type: Array,
        required: true
    }, 
    isPremium: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('websiteUserSchema', websiteUserSchema)