import React from "react"
import { Link } from 'react-router-dom'
import Shelf from '../components/Shelf'

const BookCase = (props) => {
    
    const books = props.books

    console.log(`books`, books)
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          { books && <div>
            <Shelf title='Currently Reading' books={books} name='currentlyReading'/>
            <Shelf title='Want to Read' books={books} name='wantToRead' />
            <Shelf title='Read' books={books} name='read' />
          </div>}
        </div>
        <div className="open-search">
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
}

export default BookCase