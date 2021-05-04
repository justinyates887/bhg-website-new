require('dotenv').config()
require('./src/strategies/discord')

const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport')
const session = require('express-session')
const Store = require('connect-mongo')

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.URI,
    {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

mongoose.connection
    .on('error', (error) => {
        console.error('Error at mongo.js :' + error)
    })
    .on('open', () => {
        console.log('[mongoose] connected')
    })
    .on('close', () => {
        console.log('[mongoose] connection closed')
    })
    .on('connecting', () => {
        console.log('[mongoose] connecting...')
    })
    .on('reconnected', () => {
        console.log('[mongoose] reconnected after interrupt')
    })
    .on('reconnectFailed', error => {
        console.error('[mongoose] reconnection failed due to error:' + error);
    });

app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000 * 60 * 24 //one day
    },
    resave: false,
    saveUninitialized: false,
    store: Store.create({mongoUrl: process.env.URI})
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(require("./src/routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});