'use strict';

var IndexModel = require('../../models/index');

module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res, next) {
        console.log("User details", req.user);
        model.user = req.user;
        res.render('profile', model);
    });

};
