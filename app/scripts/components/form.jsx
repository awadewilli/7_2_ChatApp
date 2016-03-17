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
console.log(localStorage.username);
var SubmitForm = React.createClass({
mixins: [Backbone.React.Component.mixin],

getInitialState:function(){
  return {'content':'default', 'username':localStorage.username};

},

handleSubmit:function(e){
e.preventDefault();
var inputVal = {
 content: $('#messageInput').val(),
 username:localStorage.username
};
console.log(inputVal);
this.getCollection().create(inputVal);
console.log();
},

handleChange: function(e){


},

render:function(){

  return(<div>
    <form onSubmit={this.handleSubmit}>
      <div className="input-wrapper">
          <input
            id="messageInput"
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
