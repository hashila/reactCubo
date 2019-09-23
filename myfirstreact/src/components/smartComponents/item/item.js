import React from 'react';

class Item extends React.Component {
  render(){
    console.log(this.props.book);
  return (
    <div className="item">

      <div className="card">
        {/* <img src={this.props.book.thumb} className="card-img-top"/> */}
      {/* <div className="card-body">
        <h5 className="card-title">{this.props.book.title}</h5>
        <p className="card-text">
          <strong>By :</strong>{this.props.book.auther}
          {this.props.book.pages}<strong>pages</strong>
        </p>
        <button>Add to Read</button>
      </div> */}
    </div>


    </div>
  );
  }
}

export default Item;
