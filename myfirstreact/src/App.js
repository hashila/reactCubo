import React from 'react';
import './App.css';
import Searchbar from './components/smartComponents/searchbar/searchbar';
import Itemlist from './components/smartComponents/itemlist/itemlist';
import ItemDummySet from './components/dummy/dummylistset/dummylistset.js'

class App extends React.Component {

  render(){

        // var booksArray = Searchbar.state.searchArray;

    return (
    <div className="App">
      <Searchbar/>

      {/* <Itemlist listArray={booksArray}/> */}
      <ItemDummySet/>    
      </div>
    );
  }

}
export default App;
