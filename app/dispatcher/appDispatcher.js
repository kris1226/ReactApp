/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */
 'use strict';

var Flux = require('flux');
var assign = require('object-assign');

var Dispatcher = assign(new Flux.Dispatcher(), {
  /**
 * @param {object} action The details of the action, including the action's
 * type and additional data coming from the view.
 */
  handleViewAction: function (action) {
    var payload = {
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = Dispatcher;
