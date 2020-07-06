import React, { useState } from "react"
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from "../components/Book"



const Search = (props) => {
    
    const [booksRetrieved, setBooksRetrieved] = useState([])

    const handleChange = (event) => {
        const userQuery = event.target.value
        // setQuery({query: userQuery})
        BooksAPI.search(userQuery).then(res => {
            setBooksRetrieved(res)
        })
    }
    
    
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
                            />
                        </li>
                    ))) : null}
                </ol>
            </div>
        </div>
    )
}

export default Search