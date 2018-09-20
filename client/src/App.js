import React, { Component } from "react";
import Navbar from './Components/Navbar/Navbar';
import ArticleResults from './Pages/ArticleResults/ArticleResults';
import SavedArticles from './Pages/SavedArticles/SavedArticles';
import "./App.css";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <SavedArticles />
      </div>
    );
  }
}

export default App;
