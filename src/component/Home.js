import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class Home extends React.Component {
    constructor(props) {
        super()
        console.log(props)
    }

    changeStatus = (book, status) => {
        BooksAPI.update(book, status).then(x => {
            this.props.bookUdateHandler()
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.bookList
                                        .filter(x => x.shelf === "currentlyReading")
                                        .map(x => <Book bookOject={x} changeshelf={this.changeStatus} key={x.id} />)
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {this.props.bookList
                                        .filter(x => x.shelf === "wantToRead")
                                        .map(x => <Book bookOject={x} changeshelf={this.changeStatus} key={x.id} />)
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {this.props.bookList
                                        .filter(x => x.shelf === "read")
                                        .map(x => <Book bookOject={x} changeshelf={this.changeStatus} key={x.id} />)
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" />
                </div>
            </div>
        )
    }

}

export default Home
