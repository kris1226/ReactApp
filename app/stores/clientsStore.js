'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _clients = [];

/**
 * Set the values for clients that will be used
 * with components.
 */

 function setClients (clients) {
   _clients = clients;
 }

var ClientsStore = assign({}, EventEmitter.prototype, {

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

/**
 * Emits change event.
 */
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getClients: function() {
    return _clients;
  }

});

ClientsStore.dispatchToken = Dispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.actionType) {
    case ActionTypes.RECEIVE_CLIENTS:
    setClients(action.clients);
    break;
  default:
      return true;
  }
  ClientsStore.emitChange();
  return true;
});


module.exports = ClientsStore;
