const router = require("express").Router();
const path = require('path');
const auth = require('./auth')
const discord = require('./discord')

router.use('/auth', auth)
router.use('/discord', discord)

module.exports = router;