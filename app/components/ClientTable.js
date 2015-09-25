'use strict';
var React = require('react');

var ClientTable = React.createClass({
  render: function () {
    var rows = [];
    var lastClient = null;
    this.props.clients.forEach(function(client) {
      if(client.HowToDeliver != lastClient) {
        rows.push()
      }
    });
  }
});
