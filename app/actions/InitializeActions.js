'use strict';
var ActionTypes = require('../constants/actionTypes');
var Dispatcher = require('../dispatcher/appDispatcher');
var ClientsApi = require('../api/clientsApi');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITALIZE,
      initialData: {
        clients: ClientsApi.source
      }
    });
  }
};
