const mongoose = require('mongoose')

const OAuth2CredientialsSchema = new mongoose.Schema({
    acessToken: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    },
    discordID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('OAuth2Credientials', OAuth2CredientialsSchema)