import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './Books';
import Home from './Home';
import BorrowerTable from './BorrowerTable';
import AddBorrower from './AddBorrower';
import UpdateBorrower from './UpdateBorrower';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';
import BookTable from './BookTable';
import DeleteBook from './DeleteBook';
import DeleteBorrower from './DeleteBorrower';
import { NavLink, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/home" exact component="Home">
          Home
        </NavLink>
      <br/>
        <NavLink to="/booktable" exact component="BookTable">
          Book Table
        </NavLink>
      <br/>
        <NavLink to="/borrowertable" exact component="BorrowerTable">
          Borrower Table
        </NavLink>
      <br/>
        <NavLink to="/addbook" exact component="AddBook">
          Add Book
        </NavLink>
      <br/>
        <NavLink to="/updatebook" exact component="UpdateBook">
          Update Book
        </NavLink>
      <br/>
        <NavLink to="/addborrower" exact component="AddBorrower">
          Add Borrower
        </NavLink>  
      <br/>
        <NavLink to="/updateborrower" exact component="UpdateBorrower">
          Update Borrower
        </NavLink>
      <br/>
        <NavLink to="/booktable" exact component="BookTable">
          Book Table
        </NavLink>
      <br/>
        <NavLink to="/deletebook" exact component="DeleteBook">
          Delete Book
        </NavLink>
      <br/>
        <NavLink to="/deleteborrower" exact component="DeleteBorrower">
          Delete Borrower
        </NavLink>
      <br/>
      <hr/>
      <Route path="/home" exact component={Home}/>
      <Route path="/booktable" exact component={BookTable}/>
      <Route path="/borrowertable" exact component={BorrowerTable}/>
      <Route path="/addbook" exact component={AddBook}/>
      <Route path="/updatebook" exact component={UpdateBook}/>
      <Route path="/addborrower" exact component={AddBorrower}/>
      <Route path="/updateborrower" exact component={UpdateBorrower}/>
      <Route path="/deletebook" exact component={DeleteBook}/>
      <Route path="/deleteborrower" exact component={DeleteBorrower}/>
      </div>
    );
  }
}

export default App;
