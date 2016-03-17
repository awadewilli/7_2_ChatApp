var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var Messages = require('./messages');

var MessageCollection = Backbone.Collection.extend({
  model: Messages,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages/'
});

module.exports= MessageCollection;
