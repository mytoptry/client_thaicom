const Sequelize = require("sequelize");
const sequelize = require("./db_instance");
const sequelizeTransforms = require("sequelize-transforms");

const users = sequelize.define(
    "users",
    {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        firstname: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        lastname: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
    {
        createdAt: false,
        timestamps: false,
        freezeTableName: true,
    }
);

sequelizeTransforms(users);

(async () => {
    await users.sync({ force: false });
})();

module.exports = users;
