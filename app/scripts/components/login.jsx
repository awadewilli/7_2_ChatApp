var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var ReactDom = require('react-dom');
require('backbone-react-component');


var Login = React.createClass({
mixins: [Backbone.React.Component.mixin],


handleSubmit:function(e){
  e.preventDefault();
  console.log(this.props.model);

  var usernameInput = $('#username').val();
  localStorage.setItem("username", usernameInput);
  this.props.model.set({'username': localStorage.username});
  Backbone.history.navigate('chat', {trigger: true});
},
render:function(){
  return(
  <div className="username-submit">
    <h3> Input your Username</h3>
    <form onSubmit={this.handleSubmit}>
      <input id="username" type="text" name="username" placeholder="Enter Your Username"/>
      <button type="submit">
        Chat
      </button>
    </form>
  </div>
)
}

});

module.exports = Login;
