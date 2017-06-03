'use strict';

var User = require('../models/user');

var UserLibrary = function() {
    return {
        serialize: function(user, done) {
            done(null, user.id);
        },
        deserialize: function(id, done) {
            console.log("I am not your slave...");
            User.findById(id).then(function (user) {
                done(null, user.dataValues);
            });
        }
    };
};

module.exports = UserLibrary;
