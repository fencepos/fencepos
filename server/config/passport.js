const passport = require("passport");
const passportjwt = require('passport-jwt');
const {Strategy: LocalStrategy} = require("passport-local");
const {User} = require("../models/auth/User");


const JWTStrategy = passportjwt.Strategy;
const extractJWT = passportjwt.ExtractJwt;

// TODO: change secret key to env
const strategy = new JWTStrategy(
    {
        secretOrKey: 'my_secret_key',
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken()
    },
    (jwtPayload, cb) => {
        // Here, you can validate the JWT payload and return a user object
        // to be stored in `req.user`
        const user = { id: jwtPayload.sub };
        return cb(null, user);
    }
);

passport.use('jwt', strategy);

passport.use('local', new LocalStrategy(
    { usernameField: 'username' },
    async (username, password, done) => {
        // Find the user with the given username
        await User.findOne({
        where: {
            username: username
            }
        })
            .then(function (user) {
                // If no user present, auth failed
                if (!user) {
                    return done(null, false);
                }
                // If passwords do not match, auth failed
                if (!user.validPass(password)) {
                    return done(null, false);
                }
                // Auth has succeeded
                // delete user.password;
                return done(null, user);
            })
            .catch(function (err) {
                if (err) {
                    return done(err);
                }
            });
    }
));

passport.serializeUser((user, done) => {
    process.nextTick(function() {
        done(null, { id: user.uuid, username: user.username });
    });
});

passport.deserializeUser((user, done) => {
    process.nextTick(function() {
        return done(null, user);
    });
});

module.exports = { passport: passport }