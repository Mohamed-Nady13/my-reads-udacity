import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class Search extends React.Component {
    state = {
        searchResult: [],
    }

    constructor(props) {
        super()
    }

    searchHandler(e) {
        BooksAPI.search(e).then(searchBooks => {

            if (searchBooks && Array.isArray(searchBooks)) {
                let booksWithShelf = searchBooks.map(b => {
                    let result = this.props.bookList.filter(z => z.id === b.id);
                    if (result.length > 0) {
                        b.shelf = result[0].shelf;
                    }
                    return b
                })

                this.setState({
                    searchResult: booksWithShelf
                })
            }
            else {
                this.setState({
                    searchResult: []
                })
            }
        })
    }

    changeStatus = (book, status) => {

        BooksAPI.update(book, status).then(x => {
            this.props.bookUdateHandler()
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" />
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e) => this.searchHandler(e.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResult.map(x => <Book bookOject={x} key={x.id} changeshelf={this.changeStatus} />)}
                    </ol>

                </div>
            </div>
        )
    }
}

export default Search