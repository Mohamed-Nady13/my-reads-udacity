import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import './App.css'
import Search from './component/Search'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    bookList: [],
  }

  componentWillMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ bookList: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/search">
              <Search bookList={this.state.bookList} bookUdateHandler={this.getBooks} />
            </Route>
            <Route path="/">
              <Home bookList={this.state.bookList} bookUdateHandler={this.getBooks} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp
