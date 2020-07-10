import React, { useState } from "react"
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from "../components/Book"



const Search = (props) => {
    
    const [booksRetrieved, setBooksRetrieved] = useState([])
    const userBooks = props.userBooks.books
    // let userBooksIdArray = new Set()

    const handleChange = (event) => {
        const userQuery = event.target.value
        BooksAPI.search(userQuery).then(bookResults => {
            if (bookResults) {
                bookResults.forEach(bookResult => {
                    bookResult.shelf = 'none'
                }) 
                setBooksRetrieved(bookResults)
                console.log(booksRetrieved)
            } else {
                setBooksRetrieved([])
            }
        })
    }

    const checkBook = (book, userBooks) => {
        userBooks.forEach(userBook => {
            if (userBook.id === book.id) {
               book.shelf = userBook.shelf
            } 
        })
        return book.shelf
    }


    console.log(userBooks)
    return (
        <div className="search-books">
            <div className="search-books-bar">
            <Link to='/'>
                <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={handleChange}/>
            </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {booksRetrieved ? (booksRetrieved.map(book => (
                        <li key={book.id}>
                            <Book 
                                book = {book}
                                shelfName = {checkBook(book, userBooks)}
                            />
                        </li>
                    ))) : null}
                </ol>
            </div>
        </div>
    )
}

export default Search