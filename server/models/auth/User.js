const { Sequelize, DataTypes} = require("sequelize");
const path = require('path');
const bcrypt = require('bcryptjs');
// specify current directory explicitly
let specpath = path.join(__dirname, '..', 'db', 'database.db');
const db = new Sequelize({
    dialect: 'sqlite',
    storage: specpath,
    logging: false
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

    User.addHook('beforeCreate', (newUser) => {
        newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10));
    });

    User.prototype.validPass = async function (password) {
        return await bcrypt.compare(password, this.password);
    }

    const syncDB = async ()  => {
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
            await User.sync();
            console.log('DB Synced');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    };

    (async () => {
        await syncDB();
    })();

// then execute some code inside a closure

    module.exports = { User, db }