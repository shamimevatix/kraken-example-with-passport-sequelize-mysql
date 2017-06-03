/**
 * Module that will handle our authentication tasks
 */
'use strict';

var User = require('../models/user'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

exports.config = function(settings) {

};

/**
 * A helper method to retrieve a user from a local DB and ensure that the provided password matches.
 * @param req
 * @param res
 * @param next
 */
passport.use(new LocalStrategy(
    function(username, password, done) {
        //Retrieve the user from the database by login
        User.findOne({
            where: {
                username: username
            }
        }).then(function (user) {
            //If something weird happens, abort.
            //If we couldn't find a matching user, flash a message explaining what happened
            if (!user) {
                return done(null, false, {
                    message: 'login not found'
                });
            }

            //Make sure that the provided password matches what's in the DB.
            if (!user.passwordMatches(password)) {
                return done(null, false, {
                    message: 'Incorrect Password'
                });
            }
            //If everything passes, return the retrieved user object.
            console.log("I am lost here", done);
            done(null, user);
        });
    }
));


/**
 * A helper method to determine if a user has been authenticated, and if they have the right role.
 * If the user is not known, redirect to the login page. If the role doesn't match, show a 403 page.
 * @param role The role that a user should have to pass authentication.
 */
exports.isAuthenticated = function() {

    return function(req, res, next) {
        //access map
        console.log("isAuthenticated.auth url: ", req.url)
        var auth = {
                '/admin': true,
                '/profile': true
            },
            route = req.url;

        if (!auth[route]) {
            console.log("not authorized route...");
            next();
            return;
        }
        else if (!req.isAuthenticated()) {
            console.log("i am not authenticated....");
            //If the user is not authorized, save the location that was being accessed so we can redirect afterwards.
            req.session.goingTo = req.url;
            req.flash('error', 'Please log in to view this page');
            res.redirect('/login');
        } else {
            console.log("i am redirecting....");
            next();
        }

    };
};

/**
 * A helper method to add the user to the response context so we don't have to manually do it.
 * @param req
 * @param res
 * @param next
 */
exports.injectUser = function() {
    return function injectUser(req, res, next) {
        if (req.isAuthenticated()) {
            console.log("am i here");
            res.locals.user = req.user;
        }

        next();
    };
};
