import React from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    state = {
        searchResult: [],
    }

    searchHandler(e) {
        BooksAPI.search(e).then(x => {

            if (x && Array.isArray(x)) {
                this.setState({
                    searchResult: x
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
            this.getBooks()
        })
    }
    
    getBooks() {
        BooksAPI.getAll().then(x => {
            this.setState({
                bookList: x
            })
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