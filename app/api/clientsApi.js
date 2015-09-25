'use strict';

var request = require('superagent');
var Promise = require('es6-promise').Promise; // jshint ignore:line

/**
 * Wrapper for calling a API
 */

var ClientsApi = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
      request
        .get(url, function (err, res) {
          if(err) {
            console.log(res.error.message);
          }
          if(res.status === 200) {
            console.log(res.status);
            resolve(JSON.parse(res.text));
          }
        });
    });
  }
};

module.exports = ClientsApi;
