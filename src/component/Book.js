import React from 'react'

const Book = (props) => {
    const changehandler =(e) =>{
props.changeshelf(props.bookOject, e.target.value)
    }
    let poster = null; 
    if(props.bookOject.imageLinks && props.bookOject.imageLinks.smallThumbnail){
        poster ='url("'+props.bookOject.imageLinks.smallThumbnail+'")'
    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:poster }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={changehandler} value={props.bookOject.shelf || 'none'}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.bookOject.title}</div>
                <div className="book-authors">{props.bookOject.authors}</div>
            </div>
        </li>

    )
}

export default Book
