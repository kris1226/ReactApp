'use strict';
var React = require('react');
var ClientList = require('./clients/ClientList');

var FilterableClientTable = React.createClass({

  	getInitialState: function () {
  		return {
  			testClients: [
          {ClientName: 'Sacred Heart', ClientKey:'1', HowToDeliver: 'ECN2'},
          {ClientName: 'Geisnger', ClientKey:'2', HowToDeliver: 'OSM'},
          {ClientName: 'Norton', ClientKey:'3', HowToDeliver: 'ECN2'}
        ]
  		};
  	},

  render: function() {
    return (
      <div>
        <ClientList clients={this.state.testClients} />
      </div>
    );
  }
});

module.exports = FilterableClientTable;
