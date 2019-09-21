import React from 'react';
import Item from '../item/item'
// import './App.css';

class Itemlist extends React.Component {

  render(){
    var oneBook = this.props.listArray.map(function(book){
      console.log("dwsdfafadfafaf");
      console.log(book);
      return (
          <li><Item book={book}/></li>
      );
    });
    console.log(this.props.listArray);
    return (
    <div className="items">
      <h1>list</h1>
      <ul>{oneBook}</ul>
    </div>
  );
  }
}

export default Itemlist;
