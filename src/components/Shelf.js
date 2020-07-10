import React from "react"
import Book from "./Book"

const Shelf = (props) => {

    const books = props.books.books
    const { title, name, updateBook } = props
    
    return(
        <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter(book => book.shelf === name).map(book => (
                      <li key={book.id}>
                          <Book 
                            book = {book}
                            shelfName = {name}
                            updateBook = {updateBook}
                          />
                    </li>
                   )
                  )}
                </ol>
              </div>
            </div>
    )
}

export default Shelf
