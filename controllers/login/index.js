'use strict';

var LoginModel = require('../../models/login');
var passport = require('passport');


module.exports = function (router) {

    var model = new LoginModel();

    router.get('/', function (req, res, next) {
        model.messages = req.flash('error');
        res.render('login', model);
    });

    router.post('/', function (req, res, next) {
        passport.authenticate('local', {
            successRedirect: req.session.goingTo || '/profile',
            failureRedirect: '/login',
            failureFlash: true
        })(req, res, next);
    });

};
