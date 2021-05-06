const router = require("express").Router();
const passport = require('passport')

router.get('/discord', passport.authenticate('discord'))

router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    res.redirect('http://localhost:8080/dashboard')
    //res.send(200)
})

router.get('/', (req, res) => {
    if (req.user){
        res.send(req.user)
    } else {
        res.status(401).send({ msg: 'Unauthorized '})
    }
})

module.exports = router