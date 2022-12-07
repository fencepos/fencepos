const express = require('express'),
    router = express.Router();
const AuthModel = require("../models/auth/AuthModel");
const { passport } = require("../config/passport");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use((req, res, next) => {
    // Useless for now, maybe used in the future.
    const {user} = req;
    if (user) {
        next();
    } else next();
})

router.post("/register", async (req, res) => {
    let {username, email, password} = req.body;

    AuthModel.registerUser(email, username, password).then(status => {
        return res.json({status: status, username: req.user.username});
    });
});

router.post("/login", passport.authenticate('local', { session: true }), (req, res) => {
    return res.status(200).json({ status: "login_success", username: req.user.username });
});

router.post('/protected', (req, res) => {
    if (req.isAuthenticated()) return res.send('success');
    return res.send("not_auth")
});

router.post('/logout', function(req, res, next) {
    req.logout((err) => {
        if (err) { return next(err); }
        return res.json({status: "logout-success"});
    });
});

module.exports = router;