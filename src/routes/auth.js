const router = require("express").Router();
const passport = require('passport')
const path = require('path');

router.get('/discord', passport.authenticate('discord'))

router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    res.send(200)
})

router.get('/', (req, res) => {
    if (req.user){
        res.send(req.user)
    } else {
        res.status(401).send({ msg: 'Unauthorized '})
    }
})

module.exports = router