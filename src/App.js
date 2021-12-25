import React from 'react'
import Home from './component/Home'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './component/Search'

class BooksApp extends React.Component {
  render() {
     return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp
