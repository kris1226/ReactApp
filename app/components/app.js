'use strict';
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;
