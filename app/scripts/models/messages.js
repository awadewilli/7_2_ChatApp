var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var Messages = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    content:'default content',
    time:'default'
  }
});

module.exports= Messages;
