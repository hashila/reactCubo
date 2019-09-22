import React from 'react';
import Item from '../item/item'
// import './App.css';

class Itemlist extends React.Component {

  getItemList(){
    var oneBook = this.props.listArray.map(function(book){
      console.log("dwsdfafadfafaf");
      console.log(book);
      return (
        <div className="onebook col-sm-2">
          <li><Item book={book}/></li>
        </div>
      );
    });
    return oneBook;
  }

  render(){
    var oneBook = this.getItemList();

    console.log(oneBook);
    return (
    <div className="items container">
      <h1>list</h1>
      <div className="row">
        <Item/>
        <ul>{oneBook}</ul>
      </div>
    </div>
  );
  }
}

export default Itemlist;
