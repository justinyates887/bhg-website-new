const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const defNull = {
    type: String,
    default: null
}

const guildRolesSchema = mongoose.Schema({
    _id: reqString,
    admin: {
        type: [Object],
    },
    base: defNull,
    mute: defNull,
})

module.exports = mongoose.model('guild-roles', guildRolesSchema)