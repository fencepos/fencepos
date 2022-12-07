const {User} = require("./User")

class AuthModel {

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
        const NewUser = User.build({username: username, email: email , password: password});
        const result = await NewUser.save().catch(error => {
            return error
        });

        if (result && result.stack && result.message) // it's an error, probably
            return "error " + result.message;

        return "register_success";

    }

    static indexUsers() {
        User.findAll().then(res => res.map((mapped) => {
            console.log(mapped.getDataValue("username"))
        }));
    }

}

module.exports = AuthModel;