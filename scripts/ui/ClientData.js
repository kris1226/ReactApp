'use strict';
var React = require('react');
var $ = require('jquery');

var ClientData = React.createClass({
  loadData: function() {
    $.ajax({
      url: '/api/clients',
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    this.loadData();
  },
  onChange: function(event) {
    this.setState({text: event.target.value});
  },
  render: function() {
    var clients = this.state.data || [];
    return (
      <div>
        <h4>Clients</h4>
        <ol>
          {clients.map(function(client) {
            return <li>{client.ClientName}<br />{client.ClientKey}</li>
          })}
        </ol>
      </div>
    );
  }
});

module.exports = ClientData;
