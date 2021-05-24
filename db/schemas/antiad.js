const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const reqBool = {
    type: Boolean,
    required: true
}

const antiAdSchema = new mongoose.Schema({
    _id: reqString,
    desired: reqBool,
})

module.exports = mongoose.model('antiad-schema', antiAdSchema)