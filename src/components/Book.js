import React from "react"


const Book = (props) => {

    const book = props.book
    const shelfName = props.shelfName


    // const handleClick = (e) => { }
        //option value to replace book.shelf value
    

    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" selected={shelfName === 'currentlyReading' ? 'selected' : null}>Currently Reading</option>
                <option value="wantToRead" selected={shelfName === 'wantToRead' ? 'selected' : null}>Want to Read</option>
                <option value="read" selected={shelfName === 'read' ? 'selected' : null}>Read</option>
                <option value="none" selected={!shelfName ? 'selected' : null}>None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )

}

export default Book