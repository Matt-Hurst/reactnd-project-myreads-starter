import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from "./pages/BookCase"
import Search from "./pages/Search"
import { Route } from "react-router-dom"


class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
    this.updateBook = this.updateBook.bind(this)
    this.addBook = this.addBook.bind(this)
  } 
  
  componentDidMount() {
    this.getAllBooks()
  }
  
  getAllBooks() {
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

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.setState((currentState) => ({
        books: currentState.books.filter((b) => 
          b.id === book.id ? (b.shelf = shelf) : b
        )
      })) 
    })
  }

  addBook (book, shelf) {
    BooksAPI.update(book, shelf)
    .then(() => {
      book.shelf = shelf
      this.setState((currentState) => ({
        books: currentState.books.concat(book)
      }))
    })
  }

  render() {
    return(
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase 
            books = {this.state}
            updateBook = {this.updateBook}
          />
        )} />
        <Route path='/search' render={() => (
          <Search 
            userBooks = {this.state}
            updateBook = {this.updateBook}
            addBook = {this.addBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
