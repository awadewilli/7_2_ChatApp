var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var Messages = require('./models/messages');
var MessageCollection = require('./models/messageCollection');
var SubmitForm = require('./components/form.jsx');
var ChatContent = require('./components/chat.jsx');
var LoginForm = require('./components/login.jsx');
var messageCollection = new MessageCollection();
var message = new Messages();

var Router = Backbone.Router.extend({

routes:{
'':'renderUserForm',
'chat':'renderIndex'
},

renderIndex : function(){
ReactDOM.render(
  React.createElement(ChatContent,{collection:messageCollection}),
   document.getElementById('main')
);
ReactDOM.render(
  React.createElement(SubmitForm,{collection:messageCollection}),
  document.getElementById('form-insert')
);
},

renderUserForm : function(){

  ReactDOM.render(
    React.createElement(LoginForm,{model:message}),
    document.getElementById('main')
  );

}
});


module.exports = new Router();
