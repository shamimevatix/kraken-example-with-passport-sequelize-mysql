'use strict';

var express = require('express'),
    passport = require('passport'),
    auth = require('../lib/auth'),
    userLib = require('./user')();

module.exports = function spec(app) {
    app.on('middleware:after:session', function configPassport(eventargs) {
        //Give passport a way to serialize and deserialize a user. In this case, by the user's id.
        console.log("set me");
        passport.serializeUser(userLib.serialize);
        passport.deserializeUser(userLib.deserialize);
        app.use(passport.initialize());
        app.use(passport.session());
    });
};
