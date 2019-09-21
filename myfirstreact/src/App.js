import React from 'react';
import './App.css';
import Searchbar from './components/smartComponents/searchbar/searchbar';
import Itemlist from './components/smartComponents/itemlist/itemlist';
var booksApi = require('google-books-search');

class App extends React.Component {

  render(){

    var booksArray = [];

    booksApi.search("harry potter",function(err,result){
      if(!err){
        result.map(function(data){
          var dataForArray = {
            "name" : data.title,
            "auther": data.authors[0],
            "pages": data.pageCount,
            "thumb": data.industryIdentifiers
          }

          booksArray.push(dataForArray);
          // console.log(data);
        });
      }else{
        console.log(err);
      }
      console.log(typeof(booksArray));

    });

    return (
    <div className="App">
      <Searchbar/>

      <Itemlist listArray={booksArray}/>
    </div>
    );
  }

}
export default App;
