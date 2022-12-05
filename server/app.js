const express = require('express'),
    app = express();
const session = require('express-session');
const port = 3000;
const passport = require('passport');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Change this session secret. ( to .env + add generator for this secret )
app.use(session({
    secret: "example value",
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

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