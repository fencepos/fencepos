const {User} = require("./User")
const bcrypt = require('bcrypt');

class AuthModel {

    static async comparePass(password, hashedPassword){
        return await bcrypt.compare(password, hashedPassword);
    }

    static async hash(password) {
        const salt = await bcrypt.genSalt(8);
        return await bcrypt.hash(password, salt);
    }

    static async registerUser(email, username, password) {
        // Validations
        const isEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                );
        };
        if (!isEmail(email)) {
            return "not-email";
        }

        // Create account
        let HashPWD = this.hash(password).toString();
        const NewUser = User.build({username: email, password: HashPWD});
        const result = await NewUser.save().catch(error => {
            return error
        });

        if (result && result.stack && result.message) // it's an error, probably
            return "error " + result.message;

        return "success: " + result.getDataValue('username');

    }

    static index() {
        User.findAll().then(res => res.map((El) => {
            console.log(El.getDataValue("username"))
        }));
    }

}

module.exports = AuthModel;