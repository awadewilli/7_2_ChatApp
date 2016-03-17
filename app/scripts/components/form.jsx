var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
require('backbone-react-component');

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var SubmitForm = React.createClass({
mixins: [Backbone.React.Component.mixin],


handleSubmit:function(){
e.preventDefault();
var inputVal = $('#messageInput').val();
this.props
},
handleChange: function(e){


},

render:function(){
  return(<div>
    <form onSubmit={this.props.handleSubmit}>
      <div className="input-wrapper">
          <input
            id="messageInput"
            onChange={this.props.handleChange}
            type="text"
            name="content"
            placeholder="Send a Message"/>
      </div>
      <button className="circle" type="submit">
        <span className="glyphicon glyphicon-send send" aria-hidden="true">
        </span>
      </button>
    </form>
  </div>
)
}

});

module.exports = SubmitForm;
