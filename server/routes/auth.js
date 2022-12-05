const express = require('express'),
    router = express.Router();
const AuthModel = require("../models/auth/AuthModel");
const { passport } = require("../config/passport");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res ) => {
    res.send("hello express server")
})

router.post("/register", async (req, res) => {
    let {username, email, password} = req.body;

    AuthModel.registerUser(email, username, password).then(status => {
        return res.json({status: status});
    });
});

router.post("/login", passport.authenticate('local', { session: true }), (req, res) => {
    res.json({ status: "auth_success " + req.user.username });
});

router.get("/protected", passport.authenticate('local', { session: true }), (req, res) => {
    return res.status(200).send("YAY! this is a protected Route")
})

module.exports = router;