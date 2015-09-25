'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ClientActions = require('../../actions/clientsActions');
var toastr = require('toastr');

var ClientList = React.createClass({
  propTypes: {
    clients: React.PropTypes.array.isRequired
  },
  render: function() {
    var createDropdown = function(client) {
      return (
        <option key={client.ClientKey}
                value={client.ClientName}>{client.ClientName}</option>
      );
    };

    return (
      <select name="client"
              onChange={this.props.handleChange}
              className="selectpicker">
              {this.props.clients.map(createDropdown, this)}
      </select>
    );
  }
});

module.exports = ClientList;
