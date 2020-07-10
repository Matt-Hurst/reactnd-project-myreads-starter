import React from "react"


const Book = (props) => {

    let shelfName = props.shelfName
    const book = props.book
    const { updateBook, addBook } = props


    const handleChange = (e) => { 
        shelfName = e.target.value    
        if (book.shelf === "none"){
            addBook(book, shelfName)

        } else {
            updateBook(book, shelfName)
        }

    }
 
    

    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.smallThumbnail}` : ''}}></div>
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