"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ClientActions = require('../actions/clientsActions');
var ClientsStore = require('../stores/clientsStore');
var ClientList = require('./clients/ClientList');
var FilterableClientTable = require('./FilterableClientTable');

var HomePage = React.createClass({

	getInitialState: function () {
		return {
			clients: []
		};
	},

	handleChange: function (e) {
		console.log(e);
  },

	_onChange: function () {
		this.setState({ clients: ClientsStore.getClients() });
  },

	componentDidMount: function () {
		ClientActions.getClients();
	},

	componentWillMount: function () {
		ClientsStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		ClientsStore.removeChangeListener(this._onChange);
  },

	render: function () {
		return (
			<div className="jumbotron">
				<h1>Smart Agent Data</h1>

				<ClientList clients={this.state.clients} />
				<FilterableClientTable />
			</div>
		);
	}
});

module.exports = HomePage;
