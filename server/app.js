const express = require('express'),
    app = express();
const session = require('express-session');
let SequelizeStore = require("connect-session-sequelize")(session.Store);
const port = 8080;
const passport = require('passport');
const cors = require('cors')
require("dotenv").config();
const { db } = require("./models/auth/User")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: '*',
    credentials: false
}

app.use(cors(corsOptions));

let sessionStore = new SequelizeStore({
    db: db,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 60 * 60 * 1000
});
app.use(session({
    secret: process.env.KEY,
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
    store: sessionStore
}));
sessionStore.sync()
app.use(passport.initialize({ userProperty: 'user' }));
app.use(passport.session({ pauseStream: true}));

app.get('/greet/:name', (req, res) => {// greet/Alex
    return res.send(
        `How are you ${req.params.name} !`,
    ); // How are you Alex
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})

const birds = require('./RouterModule')

app.use('/yay', birds) // localhost:3000/yay

const testRoutes = require('./routes/auth');

app.use('/auth', testRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})