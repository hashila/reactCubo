import React from 'react';
// import './App.css';

class Item extends React.Component {
  render(){
  return (
    <div className="item">

      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk</p>
        <button>Add to Read</button>
      </div>
    </div>


    </div>
  );
  }
}

export default Item;
