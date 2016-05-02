var React = require('react');
var ListItem = require('./ListItem.jsx');


var ingredient = [{"id":1,"text":"ram"},{"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

var List = React.createClass({
  render : function(){
    var listItems = ingredient.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
