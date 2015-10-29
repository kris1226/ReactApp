'use strict';

var request = require('superagent-es6-promise');

var clientsApi = {
  get: function (url) {
    request.get(url).then(function(res) {
      console.log(res);
    }, function(error) {
        console.error(error);
    });
  });
}

module.exports = clientsApi;
