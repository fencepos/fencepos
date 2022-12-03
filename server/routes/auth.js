const express = require('express'),
    router = express.Router();
const AuthModel = require("../models/auth/User");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.send("hello express server")
})

router.post("/login", (req, res) => {
    let {email, password} = req.body;

    AuthModel.registerUser(email, password);
    return res.json({message: [email, password], status: "x"});
});

// router.get("/protected", passport.authenticate('jwt', { session: false }), (req, res) => {
//     return res.status(200).send("YAY! this is a protected Route")
// })

module.exports = router;