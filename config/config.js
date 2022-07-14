require('dotenv').config()

module.exports = {
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_URI,

    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',

    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations'
}