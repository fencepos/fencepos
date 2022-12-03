const { Sequelize, DataTypes} = require("sequelize");
const path = require('path')
// specify current directory explicitly
let specpath = path.join(__dirname, '..', 'db', 'database.db');
const db = new Sequelize({
    dialect: 'sqlite',
    storage: specpath
});

    const User = db.define("User", {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
        },
        username: {
            type: DataTypes.STRING(64),
            unique:"username",
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING(32),
        },
        lastname: {
            type: DataTypes.STRING(32),
        },
        email: {
            type: DataTypes.STRING(64),
            unique:"email"
        },
    });

    (async () => {
        await User.sync();
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })();

class AuthModel {

    static testAuth() {
        try {
            db.authenticate().then(r => console.log("DB AUTH SUCCESS! " + r));
        } catch (e) {
            console.log("error: " + e);
        }
    }
    static registerUser(username, password) {
        console.log(username, password);
        (async () => {
                try {
                    const NewUser = User.build({username: username, password: password});
                    await NewUser.save();
                } catch (error) {
                    console.error(error);
                }
        })();
    }

    static index() {
        User.findAll().then(res => res.map((El) => {
            console.log(El.getDataValue("username"))
        }));
    }

}

module.exports = AuthModel;

