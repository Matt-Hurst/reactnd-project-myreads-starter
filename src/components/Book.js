import React, { useState } from "react"


const Book = (props) => {

    const [shelfName, setShelfName] = useState(props.shelfName)
    const book = props.book
    const updateBook = props.updateBook

    // console.log(updateBook)

    const handleChange = (e) => { 
        console.log(shelfName)
        setShelfName(e.target.value)
        console.log(shelfName)
        updateBook(book, shelfName)

    }
 
    

    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select value={shelfName} onChange={handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )

}

export default Book