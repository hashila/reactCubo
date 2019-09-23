import React from 'react';
import Item from '../item/item'

class Itemlist extends React.Component {

  getItemList(){
    var propsarray = this.props.listArray;
    var oneBook;
    var oneBook = propsarray.map(function(book){
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
      <div className="row">
        <Item/>
        <ul>{oneBook}</ul>
      </div>
    </div>
  );
  }
}

export default Itemlist;
