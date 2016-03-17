var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
require('backbone-react-component');
var SubmitForm = require('./form.jsx');

console.log(SubmitForm.state);

var ChatContent = React.createClass({
mixins: [Backbone.React.Component.mixin],
componentDidMount: function(){
    setInterval(this.handleFetch, 3000);
  },

handleFetch:function(){
  this.props.collection.fetch();

},

  render:function(){
    var messages = this.props.collection.map(function(model){
      return (
        <div className="recipient" key={model.get('_id')}>
          <span>{model.get('content')}</span>
          <span>{model.get('time')}</span>
          <span> {model.get('username')}</span>
        </div>
      )
    });


    return(
      <div className="row chat-wrapper" id="chat-wrapper">
      <div className="col-md-6 col-sm-6 col-xs-6">
          {messages}
      </div>
      <div className="col-md-6 col-sm-6 col-xs-6">
        <div className="user">
          <span></span>
        </div>
      </div>
  </div>
    )
  }
});

module.exports = ChatContent;
