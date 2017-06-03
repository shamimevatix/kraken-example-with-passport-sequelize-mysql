var IndexModel = require('./');
var model = new IndexModel();
var sequelize = model.sequelize, Sequelize = model.Sequelize;
var bcrypt = require('bcrypt'), crypto = require('../lib/crypto');
var User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
},
{
    instanceMethods: {
        passwordMatches: function(plainText) {
            var salt = bcrypt.genSaltSync(crypto.getCryptLevel());
            var hashedPwd = bcrypt.hashSync("passw0rd", salt);
            console.log("hashedPwd", hashedPwd);
            return bcrypt.compareSync(plainText, this.password);
        }
    }
});

module.exports = User
