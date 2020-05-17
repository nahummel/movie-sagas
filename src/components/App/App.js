import React, { Component } from 'react';
import {connect} from 'react-redux';
import{HashRouter, Route, Link} from 'react-router-dom';

import './App.css';
import MoviesList from '../MoviesList/MoviesList';

class App extends Component {
  componentDidMount(){
    console.log(this.reduxState)
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header>
          <h1>Movies</h1>
        </header>
        <MoviesList/>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({reduxState});

export default connect(putStateOnProps)(App);
