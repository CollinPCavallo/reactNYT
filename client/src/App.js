import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ArticleResults from './Pages/ArticleResults/ArticleResults';
import SavedArticles from './Pages/SavedArticles/SavedArticles';
import "./App.css";


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
        <Route exact path='/' component={ArticleResults} />
        <Route path='/saved' component={SavedArticles} />
      </div>
      </Router>
    );
  }
}

export default App;
