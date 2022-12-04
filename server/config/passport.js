const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/auth/User");
// const JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;
// let opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'secret';

// passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
//     const user = await User.findOne({ uuid: jwt_payload.sub }); // find user by uuid
//     if(user === null) return done(null, false); // if user not found
//             return done(null, user); // if user found
// }));

passport.use(new LocalStrategy({ usernameField: "username", passwordField: "password" }, function verify(username, password, done) {
    User.findOne({ where: { username: username } }).then(user => {
        if (!user) return done(null, false, { message: "Incorrect username." });
        if (!user.validPass(password)) return done(null, false, { message: "Incorrect password." });
        return done(null, user);
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.uuid);
});

passport.deserializeUser(function(uuid, done) {
    User.findOne({ where: { uuid: uuid } }).then(user => {
        done(null, user);
    });
});

module.exports = { passport }