'use strict';
var data = require('../config/app.json');

var Sequelize = require('sequelize');

/*
 var sequelize = new Sequelize('test', 'root', null, {
 dialect: 'mysql'
 })
 */

/* How to reuse database.js ? */
var sequelize = new Sequelize(data.databaseConfig.database,
    data.databaseConfig.username,
    data.databaseConfig.password,
    data.databaseConfig.options);

module.exports = function IndexModel() {
    return {
        sequelize: sequelize,
        Sequelize: Sequelize,
        name: 'Kraken'
    };
};
