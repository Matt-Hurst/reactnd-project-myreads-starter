import React, { useState } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from "./pages/BookCase"
import Search from "./pages/Search"
import { Route } from "react-router-dom"


/* 
TO DO:
- Set up Reat Router

*/

const BookApp = () => {


  return(
    <div className="app">
      <Route exact path='/' render={() => (
        <BookCase />
      )} />
      <Route path='/search' component={Search} />
    </div>
  )
}

export default BookApp
















// class BooksApp extends React.Component {
//   state = {

//     showSearchPage: false
//   }

//   render() {
//     return (
//       <div className="app">
        
         
//         )}
//       </div>
//     )
//   }
// }

// export default BooksApp
