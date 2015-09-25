'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var Promise = require('es6-promise').Promise;
var ClientsStore = require('../stores/clientsStore');
var ClientsApi = require('../api/clientsApi');
var ActionTypes = require('../constants/actionTypes');

var ClientActions = {

 getClients: function () {
   ClientsApi
     .get('/api/clients')
     .then(function (clients) {
        Dispatcher.handleViewAction({
         actionType: ActionTypes.RECEIVE_CLIENTS,
         clients: clients
       });
     })
     .catch(function() {
       Dispatcher.handleViewAction({
         actionType: ActionTypes.RECEIVE_ERROR,
         error: 'There was a problem getting the clients'
       });
     });
 }

};

module.exports = ClientActions;
