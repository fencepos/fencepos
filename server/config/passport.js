const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/auth/User");

passport.use(new LocalStrategy({ usernameField: "username", passwordField: "password" }, (username, password, done) => {
    User.findOne({ where: { username: username } }).then(user => {
        if (!user) return done(null, false, { message: "Incorrect username." });
        if (!user.validPass(password)) return done(null, false, { message: "Incorrect password." });
        return done(null, user);
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.uuid);
});

passport.deserializeUser(async function(uuid, done) {
    await User.findOne({ where: { uuid: uuid } }).then(user => {
        done(null, user);
    });
});

module.exports = { passport }