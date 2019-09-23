import React from 'react';
import './searchbar.css';
var booksApi = require('google-books-search');

class Searchbar extends React.Component {
  render() {

    



    return (
    <div className="search">

      <nav className="navbar">
        <form className="form-inline">
          <div className="navCon">
            <input className="form-control mr-sm-2 sinput" id="inputsearch" onKeyUp={this.searchFunction} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-danger my-2 my-sm-0 searchBtn" type="submit">Search</button>
            <p className="errorhide" id="errormsg">Please Insert atleast 3 characters</p>
          </div>
          
        </form>
      </nav>
    </div>
  );
  }

  searchFunction(){
    var keyVal = document.getElementById("inputsearch").value;
  
    if(keyVal.length<3){
      document.getElementById("errormsg").classList.add("errorview");
      document.getElementById("errormsg").classList.remove("errorhide");
      
    }else{
      document.getElementById("errormsg").classList.remove("errorview");
      document.getElementById("errormsg").classList.add("errorhide");


      var booksArray = [];



      booksApi.search(keyVal,function(err,result){
        if(!err){
          result.map(function(data){
            var dataForArray = {
              "name" : data.title,
              "auther": data.authors,
              "pages": data.pageCount,
              "thumb": data.industryIdentifiers
            }

            booksArray.push(dataForArray);
            // console.log(data);
          });
        }else{
          console.log(err);
        }

      });
      // this.setState({
      //   searchArray : booksArray
      // });
      console.log(booksArray);
    }
    
  }

}
export default Searchbar;
