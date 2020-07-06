import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from "./pages/BookCase"
import Search from "./pages/Search"
import { Route } from "react-router-dom"

/* 
TO DO:
- check search books against state - if match update select option
- add new book method
- change book shelf method
*/
class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((currentState) => (
          {
            books
          }
        )
      )
    })
  }

  //ADD NEW BOOK
  //addNewBook(newBook) 

  

  //CHANGE BOOK SHELF

  render() {
  // console.log(this.state)

    return(
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase 
            books = {this.state}
          />
        )} />
        <Route path='/search' render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
