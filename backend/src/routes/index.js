const router = require("express").Router();
const path = require('path');
const auth = require('./auth')
const discord = require('./discord')

//Standard Routes
router.get('/api', function(req, res) {
    res.send(200);
});

router.use('/auth', auth)
router.use('/discord', discord)

module.exports = router;