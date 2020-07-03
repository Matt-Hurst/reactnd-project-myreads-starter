import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from "./pages/BookCase"
import Search from "./pages/Search"
import { Route } from "react-router-dom"

/* 
TO DO:
- pass books into BookCase
- filter books based on shelf - map
*/
class BooksApp extends React.Component {
  state = []

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

  render() {
  // console.log(this.state)

    return(
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase 
            books = {this.state}
          />
        )} />
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
