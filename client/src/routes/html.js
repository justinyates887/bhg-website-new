const router = require("express").Router();
const path = require('path');
const auth = require('./auth')

//Standard Routes
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/commands', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/commands.html'));
});

router.get('/faq', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/faq.html'));
});

router.get('/music', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/music.html'));
});

router.get('/support', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/support.html'));
});

router.use('/auth', auth)

module.exports = router;