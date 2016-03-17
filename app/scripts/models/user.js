var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var User = Backbone.Model.extend({
  idAttribute: '_id',
  defaults:{
    username:'John Doe'
  }
});

module.exports=User;
