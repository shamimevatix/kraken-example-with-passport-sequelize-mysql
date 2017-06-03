/**
 * Library to hold crypto specific properties
 */
'use strict';

var crypto = function() {
    var cryptLevel = 10;
    this.getCryptLevel = function() {
        return cryptLevel;
    };
    this.setCryptLevel = function(level) {
        if (cryptLevel === 10) {
            cryptLevel = level;
        }
    };
};

module.exports = new crypto();
